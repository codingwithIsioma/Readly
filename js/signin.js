const signInBtn = document.querySelectorAll(".sign-in-auth");
const signInForm = document.getElementById("sign-in-form");
const signInEmail = document.getElementById("email");
const signInPassword = document.getElementById("password");
const signInShowPassword = document.getElementById("togglePassword");
const signInError = document.getElementById("sign-in-error");
const signInSuccesMessage = document.querySelector(".success-message");

// Handles the redirection of page from landing
signInBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      User.loadFromLocalStorage() &&
      User.loadFromLocalStorage().isLoggedIn === true
    ) {
      window.location.href = "./home.html";
    } else {
      window.location.href = "./signin.html";
    }
  });
});

// removes the error when user puts in a valid input
signInEmail.addEventListener("input", (e) => {
  if (e.target.value) {
    signInErrorMessage("");
  }
});
signInPassword.addEventListener("input", (e) => {
  if (e.target.value) {
    signInErrorMessage("");
  }
});
// toggle password show
signInShowPassword.addEventListener("click", () => {
  const type =
    signInPassword.getAttribute("type") === "password" ? "text" : "password";
  signInPassword.setAttribute("type", type);
  if (signInShowPassword.classList.contains("fa-eye")) {
    signInShowPassword.classList.remove("fa-eye");
    signInShowPassword.classList.add("fa-eye-slash");
  } else if (signInShowPassword.classList.contains("fa-eye-slash")) {
    signInShowPassword.classList.remove("fa-eye-slash");
    signInShowPassword.classList.add("fa-eye");
  }
});

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmailAndPassword()) {
    const retrievedUser = User.loadFromLocalStorage();
    const retrieveStreakCount = StreakTracker.loadFromLocalStorage();
    const newVisit = new Date();
    if (
      retrievedUser.email === signInEmail.value &&
      retrievedUser.password === signInPassword.value
    ) {
      signInSuccesMessage.style.display = "flex";
      const returningUser = new User({ ...retrievedUser, isLoggedIn: true });
      const updateStreakTracker = new StreakTracker(retrieveStreakCount);
      returningUser.saveToLocalStorage();
      updateStreakTracker.checkStreakCount(newVisit);
      setTimeout(() => {
        window.location.href = "./home.html";
      }, 2000);
    } else {
      signInErrorMessage("Email address or password is incorrect.");
    }
  }
});

const signInErrorMessage = (errMsg) => {
  signInError.style.display = errMsg ? "block" : "none";
  signInError.textContent = errMsg;
};

const validateEmailAndPassword = () => {
  const signInEmailValue = signInEmail.value;
  const signInPasswordValue = signInPassword.value;

  if (!signInEmailValue && !signInPasswordValue) {
    signInErrorMessage("Please provide a valid email and password");
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(signInEmailValue)) {
    signInErrorMessage("Invalid email format");
    return false;
  }
  if (signInPasswordValue.length < 8) {
    signInErrorMessage("Password must be at least 8 characters");
    return false;
  }

  return true;
};
