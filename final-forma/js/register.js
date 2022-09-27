const inputFirstName = document.querySelector("#firstName");
const inputLastName = document.querySelector("#lastName");
const inputDateOfBirth = document.querySelector("#dateOfBirth");
const inputPhone = document.querySelector("#phone");
const inputUserName = document.querySelector("#username");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirmPassword");
const exists = document.querySelector(".exists");
const empty = document.querySelector(".empty");
const inputs = document.getElementsByTagName("input");
const forma = document.querySelector("form");

let noviKorisnik = {};
let noviUsername;

inputUserName.addEventListener("focusout", (e) => {
  let nizKorisnika = JSON.parse(localStorage.getItem("korisnici"));
  noviUsername = true;

  if (inputUserName.value.trim() === "") {
    inputUserName.style.borderColor = "red";
    inputUserName.placeholder = "Please add a username";
    setTimeout(function () {
      inputUserName.style.borderColor = "#663399";
    }, 3000);
    return;
  }

  nizKorisnika.forEach((element) => {
    if (inputUserName.value.trim() === element.username) {
      noviUsername = false;
    }
  });

  if (noviUsername) {
    inputUserName.style.borderColor = "green";
  } else {
    inputUserName.style.borderColor = "red";
    exists.innerText = `This Username already exists `;
    exists.style.display = "block";
    exists.style.animation = "fadeIn 0.8s";
  }
});
inputUserName.addEventListener("focusin", (e) => {
  exists.style.display = "none";
  inputUserName.style.borderColor = "#663399";
});

inputConfirmPassword.addEventListener("keyup", (e) => {
  if (
    inputPassword.value.trim() !== inputConfirmPassword.value.trim() ||
    inputConfirmPassword.value.trim() === ""
  ) {
    inputPassword.style.borderColor = "#663399";
    inputConfirmPassword.style.borderColor = "#663399";
  } else {
    inputPassword.style.borderColor = "green";
    inputConfirmPassword.style.borderColor = "green";
  }
});
inputPassword.addEventListener("keyup", (e) => {
  if (
    inputPassword.value.trim() !== inputConfirmPassword.value.trim() ||
    inputPassword.value.trim() === ""
  ) {
    inputPassword.style.borderColor = "#663399";
    inputConfirmPassword.style.borderColor = "#663399";
  } else {
    inputPassword.style.borderColor = "green";
    inputConfirmPassword.style.borderColor = "green";
  }
});

forma.addEventListener("submit", (e) => {
  e.preventDefault();

  let nizKorisnika = JSON.parse(localStorage.getItem("korisnici"));
  let ispravanTelefon = false;
  let ispravanPassword = false;

  noviKorisnik = {
    first_name: inputFirstName.value.trim(),
    last_name: inputLastName.value.trim(),
    birthday: inputDateOfBirth.value,
    phone: "",
    username: "",
    password: "",
    email: inputEmail.value.trim(),
    isAdmin: false,
    isMarked: false,
  };

  if (
    inputPhone.value.trim().length === 10 ||
    inputPhone.value.trim().length === 9
  ) {
    noviKorisnik.phone = "+381/" + inputPhone.value.trim().substring(1);
    ispravanTelefon = true;
  } else {
    alert("Wrong number!");
    setTimeout(function () {
      inputPhone.style.borderColor = "red";
    }, 100);
    inputPhone.addEventListener("focusin", (e) => {
      inputPhone.style.borderColor = "#663399";
    });
    return;
  }

  if (noviUsername) {
    noviKorisnik.username = inputUserName.value.trim();
  } else {
    alert("This Username already exists!");
    return;
  }

  if (inputPassword.value.trim() === inputConfirmPassword.value.trim()) {
    noviKorisnik.password = inputConfirmPassword.value.trim();
    ispravanPassword = true;
  } else {
    alert("Please type in the same password in both fields!");
    inputConfirmPassword.style.borderColor = "red";
    return;
  }

  if (ispravanTelefon && noviUsername && ispravanPassword) {
    nizKorisnika.push(noviKorisnik);
    localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
    alert(`You have registered successfully as  ${inputUserName.value.trim()}`);
    window.location.href = "index.html";
  }
});
