import ToastNotification from "./ToastNotification";

const closeModal = () => {
  const divModal = document.querySelector("#modal");
  divModal.style.animation =
    "modalHide 0.5s cubic-bezier(0.82, 0.02, 0.43, 1.4)";
  divModal.style.transform = "translateX(-200%)";
  const divModalBackground = document.querySelector("#modal-background");
  divModalBackground.style.opacity = "0";
  setTimeout(() => {
    document.body.removeChild(divModalBackground);
  }, 600);
};
const monthNameToNumbers = (value) => {
  let broj;
  switch (value) {
    case "januar":
      broj = "01";
      break;
    case "februar":
      broj = "02";
      break;
    case "mart":
      broj = "03";
      break;
    case "april":
      broj = "04";
      break;
    case "maj":
      broj = "05";
      break;
    case "jun":
      broj = "06";
      break;
    case "jul":
      broj = "07";
      break;
    case "avgust":
      broj = "08";
      break;
    case "septembar":
      broj = "09";
      break;
    case "octobar":
      broj = "10";
      break;
    case "novembar":
      broj = "11";
      break;
    case "decembar":
      broj = "12";
      break;

    default:
      break;
  }
  return broj;
};
const convertToMonth = (str) => {
  let month = str.substring(0, 7).slice(-2);
  return month;
};
const convertToDate = (str) => {
  let Launchdate = str.substring(0, 10);
  return Launchdate;
};
const emptyValueOrError = (errorMsg, inputError) => {
  let toast = ToastNotification(errorMsg);
  document.body.appendChild(toast);
  inputError.style.borderColor = "red";
  setTimeout(() => {
    inputError.style.borderColor = "inherit";
    document.body.removeChild(toast);
  }, 4010);
};

const Funkcije = {
  closeModal,
  monthNameToNumbers,
  convertToMonth,
  convertToDate,
  emptyValueOrError,
};
export default Funkcije;
