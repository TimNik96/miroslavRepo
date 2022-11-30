import ToastNotification from "./ToastNotification";

let admin = [
  {
    username: "admin",
    password: "admin",
  },
];

let korisnici = JSON.parse(localStorage.getItem("korisnici"));
console.log(korisnici);

if (localStorage.getItem("korisnici") === null)
  localStorage.setItem("korisnici", JSON.stringify(admin));

const closeLogin = () => {
  const divLogin = document.querySelector(".loginModal");
  divLogin.style.animation =
    "modalHide 0.5s cubic-bezier(0.82, 0.02, 0.43, 1.4)";
  divLogin.style.transform = "translateX(-200%)";
  const loginBackground = document.querySelector(".login-background");
  loginBackground.style.opacity = "0";
  setTimeout(() => {
    loginBackground.remove();
  }, 600);
  return;
};

function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

const Register = () => {
  const loginBackground = document.createElement("div");
  loginBackground.classList.add("login-background");
  const divLogin = document.createElement("div");
  divLogin.classList.add("loginModal");
  const loginTitle = document.createElement("h3");
  loginTitle.innerText = "Please Register";
  const divRegisterClose = document.createElement("div");
  divRegisterClose.classList.add("close");
  divRegisterClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>`;
  const usernameLabel = document.createElement("label");
  usernameLabel.for = "username";
  usernameLabel.innerText = "Username";
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  const emailLabel = document.createElement("label");
  emailLabel.for = "email";
  emailLabel.innerText = "Email";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  const passwordLabel = document.createElement("label");
  passwordLabel.for = "password";
  passwordLabel.id = "passwordLabel";
  passwordLabel.innerHTML =
    " <div><p>Password</p><span class='registerPasswordSpan'>Needs to have at least one special caracter,at least one small letter,at least one big letter and to be at least 8 characters long</span></div>";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  const confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.for = "confirmPassword";
  confirmPasswordLabel.innerText = "Confirm Password";
  const confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.id = "confirmPassword";
  const confirmRegisterBtn = document.createElement("button");
  confirmRegisterBtn.innerText = "Register";
  divLogin.append(
    loginTitle,
    divRegisterClose,
    usernameLabel,
    usernameInput,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    confirmPasswordLabel,
    confirmPasswordInput,
    confirmRegisterBtn
  );
  window.onclick = function (event) {
    if (event.target == loginBackground) {
      closeLogin();
      document.body.appendChild(Login());
    }
  };
  divRegisterClose.addEventListener("click", (close) => {
    closeLogin();
    document.body.appendChild(Login());
  });
  confirmRegisterBtn.addEventListener("click", (e) => {
    let availableUsername = true;
    let goodEmail = false;
    let goodPassword = false;
    let confirmPassword = false;
    if (usernameInput.value === "") {
      ToastNotification("Add in a username", usernameInput);
      return;
    }
    if (emailInput.value === "") {
      ToastNotification("Add in a email", emailInput);
      return;
    }
    if (passwordInput.value === "") {
      ToastNotification("Add in a password", passwordInput);
      return;
    }
    if (confirmPasswordInput.value === "") {
      ToastNotification("Confirm the password", confirmPasswordInput);
      return;
    }
    korisnici.forEach((korisnik) => {
      if (korisnik.username === usernameInput.value.trim()) {
        ToastNotification("Username exists", usernameInput);
        availableUsername = false;
      }
    });
    const validateEmail = (email) => {
      return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };
    if (validateEmail(emailInput.value)) {
      goodEmail = true;
    } else {
      ToastNotification("Invalid email", emailInput);
    }
    if (checkPassword(passwordInput.value)) {
      goodPassword = true;
    } else {
      document
        .querySelector(".registerPasswordSpan")
        .classList.add("addHeight");
      ToastNotification("Invalid password", passwordInput);
      setTimeout(() => {
        document
          .querySelector(".registerPasswordSpan")
          .classList.remove("addHeight");
      }, 2000);
      return;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
      ToastNotification("Enter same password", confirmPasswordInput);
      return;
    } else {
      confirmPassword = true;
    }
    if (availableUsername && goodEmail && goodPassword && confirmPassword) {
      const newUser = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
      };
      korisnici.push(newUser);
      localStorage.setItem("korisnici", JSON.stringify(korisnici));
      closeLogin();
      document.body.appendChild(Login());
      ToastNotification("Welcome successfuly registered");
    }
  });
  loginBackground.append(divLogin);
  return loginBackground;
};

const ForgotPassword = () => {
  const loginBackground = document.createElement("div");
  loginBackground.classList.add("login-background");
  const divLogin = document.createElement("div");
  divLogin.classList.add("loginModal");
  const loginTitle = document.createElement("h3");
  loginTitle.innerText = "Please Register";
  const divRegisterClose = document.createElement("div");
  divRegisterClose.classList.add("close");
  divRegisterClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>`;
  const emailLabel = document.createElement("label");
  emailLabel.for = "email";
  emailLabel.innerText = "Email";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  const passwordLabel = document.createElement("label");
  passwordLabel.for = "password";
  passwordLabel.id = "passwordLabel";
  passwordLabel.innerHTML =
    " <div><p>New Password</p><span class='registerPasswordSpan'>Needs to have at least one special caracter,at least one small letter,at least one big letter and to be at least 8 characters long</span></div>";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  const confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.for = "confirmPassword";
  confirmPasswordLabel.innerText = "Confirm Password";
  const confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.id = "confirmPassword";
  const changePasswordBtn = document.createElement("button");
  changePasswordBtn.innerText = "Set New Password";
  window.onclick = function (event) {
    if (event.target == loginBackground) {
      closeLogin();
      document.body.appendChild(Login());
    }
  };
  divRegisterClose.addEventListener("click", (close) => {
    closeLogin();
    document.body.appendChild(Login());
  });
  changePasswordBtn.addEventListener("click", (e) => {
    let indeksKorisnika;
    let dozvolaZaPromenu = false;
    let goodNewPassword = false;

    if (emailInput.value === "") {
      ToastNotification("Please add email", emailInput);
      return;
    }
    if (passwordInput.value === "") {
      ToastNotification("Please add a new password", passwordInput);
      return;
    }
    if (confirmPasswordInput.value === "") {
      ToastNotification("Please confirm password", confirmPasswordInput);
      return;
    }
    if (checkPassword(passwordInput.value)) {
      goodNewPassword = true;
    } else {
      document
        .querySelector(".registerPasswordSpan")
        .classList.add("addHeight");
      ToastNotification("Invalid password", passwordInput);
      setTimeout(() => {
        document
          .querySelector(".registerPasswordSpan")
          .classList.remove("addHeight");
      }, 2000);
      return;
    }

    let korisnici = JSON.parse(localStorage.getItem("korisnici"));

    for (let i = 1; i < korisnici.length; i++) {
      if (emailInput.value.trim() === korisnici[i].email) {
        dozvolaZaPromenu = true;
        indeksKorisnika = i;
      } else {
        ToastNotification("Invalid email or does not exist", emailInput);
        return;
      }
    }
    if (dozvolaZaPromenu && goodNewPassword) {
      if (passwordInput.value.trim() === confirmPasswordInput.value.trim()) {
        korisnici[indeksKorisnika].password = confirmPasswordInput.value;
        localStorage.setItem("korisnici", JSON.stringify(korisnici));
        closeLogin();
        document.body.appendChild(Login());
        ToastNotification(
          "Welcome you have successfully changed your password"
        );
        return true;
      } else {
        ToastNotification("Type in same password", confirmPasswordInput);
      }
    }
  });
  divLogin.append(
    loginTitle,
    divRegisterClose,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    confirmPasswordLabel,
    confirmPasswordInput,
    changePasswordBtn
  );
  loginBackground.append(divLogin);
  return loginBackground;
};

const Login = () => {
  const loginBackground = document.createElement("div");
  loginBackground.classList.add("login-background");
  const divLogin = document.createElement("div");
  divLogin.classList.add("loginModal");
  const loginTitle = document.createElement("h3");
  loginTitle.innerText = "Please log in";
  const usernameLabel = document.createElement("label");
  usernameLabel.for = "username";
  usernameLabel.innerText = "Username";
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.id = "username";
  const passwordLabel = document.createElement("label");
  passwordLabel.for = "password";
  passwordLabel.innerText = "Password";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  const loginBtn = document.createElement("button");
  loginBtn.id = "loginBtn";
  loginBtn.innerText = "Log in";
  const registerBtn = document.createElement("button");
  registerBtn.id = "registerBtn";
  registerBtn.innerText = "Register";
  const forgotPasswordBtn = document.createElement("button");
  forgotPasswordBtn.id = "forgotPasswordBtn";
  forgotPasswordBtn.innerText = "Forgot password?";
  const bottomBtns = document.createElement("div");
  bottomBtns.id = "bottomBtns";
  bottomBtns.append(registerBtn, forgotPasswordBtn);
  divLogin.append(
    loginTitle,
    usernameLabel,
    usernameInput,
    passwordLabel,
    passwordInput,
    loginBtn,
    bottomBtns
  );
  window.onclick = function (event) {
    if (event.target == loginBackground) {
      divLogin.style.animation = "vibrate-1 0.3s linear 2 both";
      setTimeout(() => {
        divLogin.style.animation = "none";
      }, 2000);
      return;
    }
  };
  if (localStorage.getItem("korisnici") === null)
    localStorage.setItem("korisnici", JSON.stringify(admin));
  loginBtn.addEventListener("click", (e) => {
    let validUsername = false;
    let validPassword = false;
    if (usernameInput.value === "") {
      ToastNotification("Please enter username", usernameInput);
      return;
    }
    if (passwordInput.value === "") {
      ToastNotification("Please enter password", passwordInput);
      return;
    }
    korisnici.forEach((user) => {
      if (usernameInput.value.trim() === user.username) {
        validUsername = true;
        if (passwordInput.value.trim() === user.password) {
          validPassword = true;
        } else {
          validPassword = false;
        }
      }
    });
    if (!validPassword) {
      ToastNotification(`Invalid password`, passwordInput);
      return;
    }
    if (!validUsername && !validPassword) {
      ToastNotification(`You need to register`);
      return;
    }
    if (validUsername && validPassword) {
      ToastNotification(`Welcome ${usernameInput.value}`);
      closeLogin();
    }
  });
  registerBtn.addEventListener("click", (e) => {
    document.body.append(Register());
    closeLogin();
  });
  forgotPasswordBtn.addEventListener("click", (e) => {
    document.body.append(ForgotPassword());
    closeLogin();
  });
  loginBackground.append(divLogin);
  return loginBackground;
};
export default Login;
