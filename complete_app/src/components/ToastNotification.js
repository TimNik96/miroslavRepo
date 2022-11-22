const ToastNotification = (text) => {
  const divToast = document.createElement("div");
  divToast.classList.add("toastNotification");
  divToast.innerText = text;
  return divToast;
};
export default ToastNotification;
