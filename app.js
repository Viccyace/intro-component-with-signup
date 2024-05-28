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

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstNameMessage.innerHTML = "First name cannot be empty";
    firstName.classList.add("error");
  } else {
    firstNameMessage.innerHTML = "";
    firstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    lastNameMessage.innerHTML = "Last name cannot be empty";
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

//Toggle password
togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
