import { changePass } from "./korisnici.js";

const inputEmail = document.querySelector("#email");
const inputNewPassword = document.querySelector("#newPassword");
const inputConfirmPassword = document.querySelector("#confirmPassword");
const forma = document.querySelector("form");

forma.addEventListener("submit", (e) => {
  e.preventDefault();

  if (changePass(inputEmail, inputNewPassword, inputConfirmPassword)) {
    window.location.href = "index.html";
  }
});
inputConfirmPassword.addEventListener("keyup", (e) => {
  if (
    inputNewPassword.value.trim() !== inputConfirmPassword.value.trim() ||
    inputConfirmPassword.value.trim() === ""
  ) {
    inputNewPassword.style.borderColor = "#663399";
    inputConfirmPassword.style.borderColor = "#663399";
  } else {
    inputNewPassword.style.borderColor = "green";
    inputConfirmPassword.style.borderColor = "green";
  }
});
inputNewPassword.addEventListener("keyup", (e) => {
  if (
    inputNewPassword.value.trim() !== inputConfirmPassword.value.trim() ||
    inputNewPassword.value.trim() === ""
  ) {
    inputNewPassword.style.borderColor = "#663399";
    inputConfirmPassword.style.borderColor = "#663399";
  } else {
    inputNewPassword.style.borderColor = "green";
    inputConfirmPassword.style.borderColor = "green";
  }
});
