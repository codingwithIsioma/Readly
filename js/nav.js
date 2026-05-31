const avatar = document.getElementById("avatar");
const retrievedUser = User.loadFromLocalStorage();
const activeUser = new User(retrievedUser);

// SETS THE INITIALS OF THE AVATAR
avatar.textContent = activeUser.getInitials();

// SETS THE ACTIVE LINK TO THE RIGHT PAGE

const currentWindow = window.location.href;
const navLinks = document.querySelector(".nav-links").children;
[...navLinks].forEach((nav) => {
  if (currentWindow === nav.href) {
    nav.classList.add("active");
  }
});
