import { validation } from "./korisnici.js";

const forma = document.querySelector("form");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const register = document.querySelector("#register");

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validation(inputUsername, inputPassword, forma, register)) {
    if (inputUsername.value == "admin") {
      window.location.href = "adminPage.html";
    } else {
      window.location.href = "site.html";
    }
    forma.reset();
  }
});
