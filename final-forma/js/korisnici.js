export const validation = (username, password, forma, register) => {
  let validPassword = false;
  let validUsername = false;
  let nizKorisnika = JSON.parse(localStorage.getItem("korisnici"));

  if (username.value.trim() === "" && password.value.trim() === "") {
    alert("Please enter your username and password!");
    username.style.borderColor = "red";
    password.style.borderColor = "red";
    username.addEventListener("focusin", (e) => {
      username.style.borderColor = "#663399";
    });
    password.addEventListener("focusin", (e) => {
      password.style.borderColor = "#663399";
    });
    forma.reset();
    return;
  }

  if (username.value.trim() === "") {
    alert("Please enter your username!");
    username.style.borderColor = "red";
    username.addEventListener("focusin", (e) => {
      username.style.borderColor = "#663399";
    });
    return;
  }

  if (password.value.trim() === "") {
    alert("Please enter your password!");
    password.style.borderColor = "red";
    password.addEventListener("focusin", (e) => {
      password.style.borderColor = "#663399";
    });
    return;
  }

  nizKorisnika.forEach((element) => {
    if (username.value.trim() == element.username) {
      validUsername = true;
      if (password.value.trim() == element.password) {
        validPassword = true;
      } else {
        alert("Wrong password!");
        password.style.borderColor = "red";
        password.addEventListener("focusin", (e) => {
          password.style.borderColor = "#663399";
        });
        return;
      }
    }
  });

  if (!validPassword && !validUsername) {
    alert("You need to register!");
    register.style.animation = "heartbeat 1.5s ease-in-out infinite both";
    setTimeout(function () {
      register.style.animation = "none";
    }, 9000);

    forma.reset();
    return;
  }

  return validPassword;
};
export let nizKorisnika = [
  {
    username: "admin",
    password: "admin",
    isAdmin: true,
  },
];

export const changePass = (email, inputNewPassword, inputConfirmPassword) => {
  let indeksKorisnika;
  let dozvolaZaPromenu = false;
  let nizKorisnika = JSON.parse(localStorage.getItem("korisnici"));

  for (let i = 0; i < nizKorisnika.length; i++) {
    if (email.value.trim() === nizKorisnika[i].email) {
      dozvolaZaPromenu = true;
      indeksKorisnika = i;
    }
  }

  if (dozvolaZaPromenu) {
    if (inputNewPassword.value.trim() === inputConfirmPassword.value.trim()) {
      nizKorisnika[indeksKorisnika].password = inputConfirmPassword.value;
      localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
      alert("You have successfully changed your password");
      return true;
    } else {
      alert("Please type in the same password in both fields!!");
      inputConfirmPassword.style.borderColor = "red";
    }
  } else {
    alert("Invalid email!");
    email.style.borderColor = "red";
    email.addEventListener("focusin", (e) => {
      email.style.borderColor = "#663399";
    });
  }
};

if (localStorage.getItem("korisnici") == null)
  localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
