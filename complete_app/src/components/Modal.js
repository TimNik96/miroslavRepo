import Funkcije from "../funkcije";
import { getSingleLaunch } from "../services";
// import { getAllLaunches } from "../services";
import Launch from "./Launch";
import ToastNotification from "./ToastNotification";
// import { reset } from "..";
const divIspis = document.querySelector(".ispis");
// const sortBy = document.querySelector("#sort");

// let currentFilterContent = [];

const Modal = (
  title,
  labelText,
  inputName,
  inputType,
  modalBtnText = "send",
  inputPlaceholder = " "
) => {
  const divModalBackground = document.createElement("div");
  divModalBackground.id = "modal-background";
  const divModal = document.createElement("div");
  divModal.id = "modal";
  const divModalHeader = document.createElement("div");
  divModalHeader.id = "modal-header";
  const h3ModalTitle = document.createElement("h3");
  h3ModalTitle.innerText = title;
  const divModalClose = document.createElement("div");
  divModalClose.classList.add("close");
  divModalClose.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>`;
  const divModalMain = document.createElement("div");
  divModalMain.id = "modal-main";
  const labelModalMain = document.createElement("label");
  labelModalMain.setAttribute("for", inputName);
  labelModalMain.textContent = labelText;
  const inputModalMain = document.createElement("input");
  inputModalMain.id = inputName;
  inputModalMain.type = inputType;
  inputModalMain.placeholder = inputPlaceholder;
  const divModalFooter = document.createElement("div");
  divModalFooter.id = "modal-footer";
  const buttonModalFooter = document.createElement("button");
  buttonModalFooter.innerText = modalBtnText;
  buttonModalFooter.classList.add("modalButton");

  window.onclick = function (event) {
    if (event.target == divModalBackground) {
      Funkcije.closeModal();
    }
  };

  divModalClose.addEventListener("click", (close) => {
    Funkcije.closeModal();
  });

  buttonModalFooter.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    if (inputModalMain.value === "") {
      ToastNotification("Please type in something", inputModalMain);
      return;
    }
    if (inputName === "singleLaunch") {
      getSingleLaunch(inputModalMain.value)
        .then((response) => {
          ToastNotification(response.status);
          divIspis.innerHTML = "";
          Funkcije.closeModal();
          divIspis.appendChild(Launch(response.data));
        })
        .catch((error) => {
          let errorMsg;
          if (error.response.status === 404) {
            errorMsg = "launch id not found";
          } else {
            errorMsg = "there was an error";
          }
          ToastNotification(errorMsg, inputModalMain);
          return;
        });
    }
    //   if (inputName === "launchYear") {
    //     getAllLaunches()
    //       .then((response) => {
    //         currentFilterContent = response.data.filter(
    //           (launch) => launch.launch_year === inputModalMain.value
    //         );
    //         currentFilterContent = currentFilterContent.filter(
    //           (launch) => launch.links.mission_patch !== null
    //         );
    //         if (currentFilterContent.length < 1) {
    //           Funkcije.emptyValueOrError(
    //             "No launches for this year",
    //             inputModalMain
    //           );
    //           reset();
    //           return;
    //         }
    //         divIspis.innerHTML = "";
    //         Funkcije.closeModal();
    //         currentFilterContent.forEach((item) => {
    //           divIspis.appendChild(Launch(item));
    //         });
    //         console.log(currentFilterContent + " launchYear");
    //         return;
    //       })
    //       .catch((error) => {
    //         if (error.message !== null) {
    //           Funkcije.emptyValueOrError(error.message, inputModalMain);
    //           // reset();
    //         }
    //         return;
    //       });
    //   }
    // });
    // sortBy.addEventListener("click", (e) => {
    //   if (sortBy.value === "date-oldest") {
    //     currentFilterContent.sort((a, b) => a.flight_number - b.flight_number);
    //     divIspis.innerHTML = "";
    //     currentFilterContent.forEach((item) => {
    //       divIspis.appendChild(Launch(item));
    //     });
    //   }
    //   if (sortBy.value === "date-newest") {
    //     currentFilterContent.sort((a, b) => b.flight_number - a.flight_number);
    //     divIspis.innerHTML = "";
    //     currentFilterContent.forEach((item) => {
    //       divIspis.appendChild(Launch(item));
    //     });
    //   }
  });

  divModalMain.append(labelModalMain, inputModalMain);
  divModalHeader.append(h3ModalTitle, divModalClose);
  divModalFooter.append(buttonModalFooter);
  divModal.append(divModalHeader, divModalMain, divModalFooter);

  divModalBackground.append(divModal);
  return divModalBackground;
};

export default Modal;
