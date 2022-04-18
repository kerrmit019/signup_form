// add in error message
// with bad password matching criteria for demo purpose only
// there is no authentication

const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirmPassword");
const errorMessage = document.querySelector(".error-message");

// event listeners.

passwordField.addEventListener("input", checkPasswordsMatch);
confirmPasswordField.addEventListener("input", checkPasswordsMatch);

function checkPasswordsMatch() {
  console.log(passwordField.value);
  if (passwordField.value === confirmPasswordField.value) {
    passwordField.classList.remove("error");
    confirmPasswordField.classList.remove("error");
    errorMessage.style.visibility = "hidden";
    return;
  }
  passwordField.classList.add("error");
  errorMessage.style.visibility = "visible";
  confirmPasswordField.classList.add("error");
  return;
}
