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
const signOut = document.getElementById("sign-out");
const deleteAccount = document.getElementById("delete-account");
const deleteModal = document.querySelector(".modal-overlay");
const cancelDelete = document.getElementById("cancel-delete");
const confirmDelete = document.getElementById("confirm-delete");

// update profile details
profileAvatar.textContent = userDetails.getInitials();
profileName.textContent = userDetails.name;
profileEmail.textContent = userDetails.email;
joinedBy.textContent = userDetails.getMemberSince();

// update stats details
streakCount.textContent = retrieveStreak.streakCount;

// update favorite topics
// ...

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
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
});
