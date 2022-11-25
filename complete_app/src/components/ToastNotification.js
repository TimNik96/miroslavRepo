const ToastNotification = (msg, input = null) => {
  const divToast = document.createElement("div");
  divToast.classList.add("toastNotification");
  divToast.innerText = msg;

  document.body.appendChild(divToast);

  if (msg === 200) {
    divToast.innerText = "success";
    divToast.classList.add("success");
    if (input !== null) {
      input.style.borderColor = "green";
    }
  }
  if (input !== null) {
    input.style.borderColor = "red";
  }

  setTimeout(() => {
    if (input !== null) {
      input.style.borderColor = "inherit";
    }

    document.body.removeChild(divToast);
  }, 4010);
};
export default ToastNotification;
