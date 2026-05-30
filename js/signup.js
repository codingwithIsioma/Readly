const signUpBtns = document.querySelectorAll(".sign-up-auth");
const signUpForm = document.getElementById("user-sign-up");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const showPassword = document.querySelector("#togglePassword");
const confirmPswrd = document.querySelector("#confirm-pswrd");
const showConfirmPassword = document.querySelector("#toggleConfirmPassword");
const age = document.querySelector("#age");
const fullNameError = document.querySelector("#fullname-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const confirmError = document.querySelector("#confirm-error");
const ageError = document.querySelector("#age-error");
const successMessage = document.querySelector(".success-message");

// track validation states for inputs
let isFullNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmPasswordValid = false;
let isAgeValid = false;

// Handles the redirection of page from landing
signUpBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (User.loadFromLocalStorage() && User.loadFromLocalStorage().isLoggedIn) {
      window.location.href = "./home.html";
    } else {
      window.location.href = "./signup.html";
    }
  });
});

// Full Name Validator
let fullNameInput;
fullName.addEventListener("input", (e) => {
  fullNameInput = e.target.value;
  if (
    validatorFunction(fullNameInput, validateFullName, fullName, fullNameError)
  ) {
    isFullNameValid = true;
  } else {
    isFullNameValid = false;
  }
});

// Email Validator
let emailInput;
email.addEventListener("input", (e) => {
  emailInput = e.target.value;
  if (validatorFunction(emailInput, validateEmail, email, emailError)) {
    isEmailValid = true;
  } else {
    isEmailValid = false;
  }
});

// Password Validator
let passwordInput;
password.addEventListener("input", (e) => {
  passwordInput = e.target.value;
  if (
    validatorFunction(passwordInput, validatePassword, password, passwordError)
  ) {
    isPasswordValid = true;
  } else {
    isPasswordValid = false;
  }
});

// toggle function
const toggleShowPassword = (input, elementID) => {
  const type = input.getAttribute("type") === "password" ? "text" : "password";
  input.setAttribute("type", type);
  if (elementID.classList.contains("fa-eye")) {
    elementID.classList.remove("fa-eye");
    elementID.classList.add("fa-eye-slash");
  } else if (elementID.classList.contains("fa-eye-slash")) {
    elementID.classList.remove("fa-eye-slash");
    elementID.classList.add("fa-eye");
  }
};

// show password
// showPassword.addEventListener("click", () =>
//   toggleShowPassword(password, showPassword),
// );

// Confirm Password Validator
confirmPswrd.addEventListener("input", (e) => {
  let confirmPasswordInput = e.target.value;
  if (
    validatorFunction(
      confirmPasswordInput,
      validateConfirmPassword,
      confirmPswrd,
      confirmError,
    )
  ) {
    isConfirmPasswordValid = true;
  } else {
    isConfirmPasswordValid = false;
  }
});

// show confirm password
showConfirmPassword.addEventListener("click", () =>
  toggleShowPassword(confirmPswrd, showConfirmPassword),
);

// Age Validator
age.addEventListener("input", (e) => {
  let ageInput = Number(e.target.value);

  if (validatorFunction(ageInput, validateAge, age, ageError)) {
    isAgeValid = true;
  } else {
    isAgeValid = false;
  }
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    isFullNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isAgeValid
  ) {
    successMessage.style.display = "flex";
    const joinedAt = new Date().toDateString();
    const newUser = new User({
      name: fullNameInput,
      email: emailInput,
      password: passwordInput,
      joinedAt,
      isLoggedIn: true,
    });
    const streakCount = new StreakTracker({
      streakCount: 1,
      lastVisit: joinedAt,
    });
    newUser.saveToLocalStorage();
    streakCount.saveToLocalStorage(1, joinedAt);
    setTimeout(() => {
      window.location.href = "./home.html";
    }, 2000);
  }
});

const validatorFunction = (input, validateFunc, inputElem, inputError) => {
  if (!validateFunc(input)) {
    inputElem.classList.remove("success-border");
    inputElem.classList.add("error-border");
    inputError.style.display = "block";
  } else {
    inputElem.classList.add("success-border");
    inputError.style.display = "none";
    return true;
  }

  if (!input) {
    inputElem.classList.remove("success-border");
    inputElem.classList.remove("error-border");
    inputError.style.display = "none";
  }
};
// Validation Functions for each input
const validateFullName = (fullname) => {
  if (!fullname) return false;
  const getFullNameArray = fullname.split(" ");
  if (
    getFullNameArray.length <= 1 ||
    getFullNameArray[1] === "" ||
    getFullNameArray[0].length < 2 ||
    getFullNameArray[1].length < 2
  ) {
    return false;
  }
  return true;
};
const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return false; // the test function returns a true or false
  return true;
};
const validatePassword = (password) => {
  if (!password) return false;
  const digit = /[0-9]/;
  const upperAndLowerCase = /[A-Z]/;
  const specialCharacters = /[!@#$%^&*]/;
  if (
    password.length < 8 ||
    !(
      digit.test(password) &&
      upperAndLowerCase.test(password) &&
      specialCharacters.test(password)
    ) ||
    password.includes(" ")
  ) {
    return false;
  }
  return true;
};
const validateConfirmPassword = (confirmPswrd) => {
  if (!confirmPswrd) return false;
  if (passwordInput !== confirmPswrd || confirmPswrd.length < 8) return false;
  return true;
};
const validateAge = (age) => {
  if (!age) return false;
  if (age < 18 || age > 100) return false;
  return true;
};
