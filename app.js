const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const firstNameMessage = document.querySelector("#firstName-error");
const lastNameMessage = document.querySelector("#lastName-error");
const emailMessage = document.querySelector("#email-error");
const pwdMessage = document.querySelector("#password-error");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const togglePassword = document.getElementById("toggle-password");

const iconError = document.querySelectorAll(".icon-error");
const lIconError = document.querySelectorAll(".licon-error");

console.log(firstName);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstNameMessage.textContent = "First name cannot be empty";
    iconError.forEach((icon) => icon.classList.remove("hidden"));
    firstName.classList.add("error");
  } else {
    firstNameMessage.innerHTML = "";
    iconError.forEach((icon) => icon.classList.add("hidden"));
    firstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    lastNameMessage.textContent = "Last name cannot be empty";
    lastName.classList.add("error");
  } else {
    lastNameMessage.innerHTML = "";
    lastName.classList.remove("error");
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    emailMessage.innerHTML = "Email cannot be empty or is invalid";
    email.classList.add("error");
  } else {
    emailMessage.innerHTML = "";
    email.classList.remove("error");
  }

  // Check password
  if (passwordVal === "") {
    pwdMessage.innerHTML = "Password cannot be empty";
    password.classList.add("error");
  } else {
    pwdMessage.innerHTML = "";
    password.classList.remove("error");
  }
});

// Toggle password
togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("fa-eye-slash");
});

// Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
