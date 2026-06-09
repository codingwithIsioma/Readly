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
const retrieveBookmarks = BookmarkManager.loadBookmarksFromLocalStorage();
const bookmarks = new BookmarkManager(retrieveBookmarks);
const bookmarkCount = document.getElementById("bookmark-count");
const bookmarkContainer = document.querySelector(".bookmarks");
const noBookmark = document.querySelector(".no-bookmark");

bookmarkCount.textContent = bookmarks.getBookmarkCount();

let bookmarkHTML = "";
bookmarkContainer.innerHTML = "";

if (bookmarks.bookmarkArray.length <= 0) {
  noBookmark.style.display = "flex";
} else {
  bookmarkHTML = bookmarks.renderBookmarkedArticles();
  bookmarkContainer.innerHTML = bookmarkHTML;
}

bookmarkContainer.addEventListener("click", (e) => {
  const element = e.target.tagName;
  if (element === "BUTTON") {
    bookmarks.removeBookmark(e.target.attributes.id.value);
    bookmarkHTML = bookmarks.renderBookmarkedArticles();
    bookmarkContainer.innerHTML = bookmarkHTML;
    bookmarkCount.textContent = bookmarks.getBookmarkCount();
    if (bookmarks.bookmarkArray.length <= 0) {
      noBookmark.style.display = "flex";
    }
  } else if (element === "H4") {
    window.location.href = `./article.html?id=${e.target.attributes.id.value}`;
  }
});
