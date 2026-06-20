const avatar = document.getElementById("avatar");
const retrievedUser = User.loadFromLocalStorage();
const activeUser = new User(retrievedUser);

// SETS THE INITIALS OF THE AVATAR
avatar.textContent = activeUser.getInitials();

// SETS THE ACTIVE LINK TO THE RIGHT PAGE

const currentWindow = window.location.href;
const navLinks = document.querySelector(".nav-links").children;
const mobileLink = document.querySelector(".mobile-nav").children;
[...navLinks].forEach((nav) => {
  if (currentWindow === nav.href) {
    nav.classList.add("active");
  }
});

[...mobileLink].forEach((nav) => {
  if (currentWindow === nav.children[1].href) {
    nav.children[0].classList.add("active-link");
    nav.children[1].classList.add("active-link");
  }
});
