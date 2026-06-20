// AUTHENTICATION GUARD
const retrieveUser = User.loadFromLocalStorage();
if (!retrieveUser || retrieveUser.isLoggedIn === false) {
  window.location.href = "./signin.html";
}

// UPDATE STREAK COUNTER
const retrieveStreak = StreakTracker.loadFromLocalStorage();
const userStreak = new StreakTracker(retrieveStreak);
userStreak.checkStreakCount(new Date());

// EVERYTHING ELSE....
const userDetails = new User(retrieveUser);
const profileAvatar = document.querySelector(".profile-avatar");
const profileName = document.querySelector(".profile-name");
const profileEmail = document.querySelector(".profile-email");
const joinedBy = document.getElementById("joinedBy");
const streakCount = document.getElementById("streak-count");
const articlesReadCount = document.getElementById("articles-read");
const bookmarksCount = document.getElementById("bookmarks-count");
const mobileStreakCount = document.getElementById("mobile-streak-count");
const mobileArticlesReadCount = document.getElementById("mobile-articles-read");
const mobileBookmarksCount = document.getElementById("mobile-bookmarks-count");
const favoriteTopics = document.querySelector(".favorite-topics");
const signOut = document.getElementById("sign-out");
const deleteAccount = document.getElementById("delete-account");
const deleteModal = document.querySelector(".modal-overlay");
const cancelDelete = document.getElementById("cancel-delete");
const confirmDelete = document.getElementById("confirm-delete");

const retrieveArticlesRead = Article.loadCountFromLocalStorage();
const retrieveTopicsCount = TopicTracker.loadFromLocalStorage();
const retrieveBookmarksCount = BookmarkManager.loadBookmarksFromLocalStorage();

// update profile details
profileAvatar.textContent = userDetails.getInitials();
profileName.textContent = userDetails.name;
profileEmail.textContent = userDetails.email;
joinedBy.textContent = userDetails.getMemberSince();

// update stats details
const bookmarkCount = new BookmarkManager(retrieveBookmarksCount);
streakCount.textContent = retrieveStreak.streakCount;
articlesReadCount.textContent = retrieveArticlesRead.articlesRead;
bookmarksCount.textContent = bookmarkCount.getBookmarkCount();
mobileStreakCount.textContent = retrieveStreak.streakCount;
mobileArticlesReadCount.textContent = retrieveArticlesRead.articlesRead;
mobileBookmarksCount.textContent = bookmarkCount.getBookmarkCount();

// update favorite topics
const topicsCount = new TopicTracker(retrieveTopicsCount);
const favoriteTopicsArray = topicsCount.getTopN(3);
let favoriteTopicsHTML = "";
if (favoriteTopicsArray.length > 0) {
  favoriteTopics.innerHTML = "";
  favoriteTopicsArray.forEach((topic) => {
    favoriteTopicsHTML += `
    <div class="favorite-topic">${topic[0]}</div>
  `;
  });
  favoriteTopics.innerHTML = favoriteTopicsHTML;
}

// handle sign out and delete account
// sign out
signOut.addEventListener("click", () => {
  const signingOut = new User({ ...userDetails, isLoggedIn: false });
  signingOut.saveToLocalStorage();
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 2000);
});

// delete account
deleteAccount.addEventListener("click", () => {
  deleteModal.classList.add("active");
});

cancelDelete.addEventListener("click", () => {
  deleteModal.classList.remove("active");
});

confirmDelete.addEventListener("click", () => {
  User.removeFromLocalStorage();
  StreakTracker.removeFromLocalStorage();
  Article.removeCountFromLocalStorage();
  TopicTracker.removeFromLocalStorage();
  BookmarkManager.removeBookmarksFromLocalStorage();
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
});
