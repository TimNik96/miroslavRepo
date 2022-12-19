import Funkcije from "../funkcije";
import { getAllShips, getSingleLaunch, getSingleShip } from "../services";
import { getAllLaunches } from "../services";
import Launch from "./Launch";
import ToastNotification from "./ToastNotification";
import Ship from "./Ship";
import Login from "./LogIn";

const divIspis = document.querySelector(".ispis");
const inputSearch = document.querySelector(" #input-search");
const sortBy = document.querySelector(".sort");

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

const Modal = (
  title,
  labelText,
  inputName = "",
  inputType = "text",
  modalBtnText = "send",
  inputPlaceholder = "",
  modalBtnText2 = "",
  inputName2 = "",
  inputType2 = "text",
  inputPlaceholder2 = ""
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
  const inputModalMain2 = document.createElement("input");
  inputModalMain2.id = inputName2;
  inputModalMain2.type = inputType2;
  inputModalMain2.placeholder = inputPlaceholder2;
  const divModalFooter = document.createElement("div");
  divModalFooter.id = "modal-footer";
  const buttonModalFooter = document.createElement("button");
  buttonModalFooter.innerText = modalBtnText;
  buttonModalFooter.classList.add("modalButton");
  const buttonModalFooter2 = document.createElement("button");
  buttonModalFooter2.innerText = modalBtnText2;
  buttonModalFooter2.classList.add("modalButton");
  buttonModalFooter2.classList.add("openLoginBtn");

  window.onclick = function (event) {
    if (event.target == divModalBackground) {
      closeModal();
    }
  };
  divModalClose.addEventListener("click", (close) => {
    closeModal();
  });

  let currentFilterContent = [];

  buttonModalFooter2.addEventListener("click", (e) => {
    if (buttonModalFooter2.innerText === "Yes") {
      closeModal();
      divIspis.appendChild(Login());
      return;
    }
  });
  buttonModalFooter.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    if (modalBtnText === "No") {
      closeModal();
      return;
    }
    if (inputModalMain.value === "" && inputName !== "") {
      ToastNotification("Please type in something", inputModalMain);
      return;
    }
    if (inputName === "singleLaunch") {
      getSingleLaunch(inputModalMain.value)
        .then((response) => {
          ToastNotification(response.status);
          divIspis.innerHTML = "";
          closeModal();
          divIspis.appendChild(Launch(response.data));
          inputSearch.value = "";
          sortBy.value = "default";
        })
        .catch((error) => {
          let errorMsg;
          if (error.request.status === 404) {
            errorMsg = "launch id not found";
          } else {
            errorMsg = "there was an error";
          }
          ToastNotification(errorMsg, inputModalMain);
          return;
        });
    }
    if (inputName === "launchYear") {
      getAllLaunches()
        .then((response) => {
          currentFilterContent = response.data.filter(
            (launch) => launch.launch_year === inputModalMain.value
          );
          currentFilterContent = currentFilterContent.filter(
            (launch) => launch.links.mission_patch !== null
          );
          if (currentFilterContent.length < 1) {
            Funkcije.emptyValueOrError(
              "No launches for this year",
              inputModalMain
            );
            currentFilterContent = [];
            return;
          }
          divIspis.innerHTML = "";
          closeModal();
          currentFilterContent.forEach((item) => {
            divIspis.appendChild(Launch(item));
          });
          localStorage.setItem(
            "filterContent",
            JSON.stringify(currentFilterContent)
          );
          return;
        })
        .catch((error) => {
          if (error.message !== null) {
            Funkcije.emptyValueOrError(error.message, inputModalMain);
          }
          return;
        });
    }
    if (inputName === "shipName") {
      if (inputModalMain.value === "A Shortfall of Gravitas") {
        inputModalMain.value = "ASOG";
      }
      if (inputModalMain.value === "Elsbeth III") {
        inputModalMain.value = "ELSBETH3";
      }
      if (inputModalMain.value === "Of Course I Still Love You") {
        inputModalMain.value = "OCISLY";
      }
      if (inputModalMain.value === "Pacific Freeedom") {
        inputModalMain.value = "PACIFICFREEDOM";
      }
      if (inputModalMain.value === "Pacific Warrior") {
        inputModalMain.value = "PACIFICWARRIOR";
      }
      if (inputModalMain.value === "Just Read The Instructions 1") {
        inputModalMain.value = "JRTI-1";
      }
      if (inputModalMain.value === "Just Read The Instructions 2") {
        inputModalMain.value = "JRTI-2";
      }
      getSingleShip(inputModalMain.value.replace(/ /g, "").toUpperCase())
        .then((response) => {
          ToastNotification(response.status);
          divIspis.innerHTML = "";
          closeModal();
          divIspis.appendChild(Ship(response.data));
          inputSearch.value = "";
          sortBy.value = "default";
        })
        .catch((error) => {
          let errorMsg;

          if (error.request.status === 404) {
            errorMsg = "ship name not found";
          } else {
            errorMsg = "there was an error";
          }
          ToastNotification(errorMsg, inputModalMain);
          return;
        });
    }
    if (inputName === "shipType") {
      getAllShips()
        .then((response) => {
          divIspis.innerHTML = "";
          currentFilterContent = response.data.filter(
            (ship) =>
              ship.ship_type.toLowerCase() ===
              inputModalMain.value.toLowerCase()
          );
          if (currentFilterContent.length < 1) {
            const errorMsg = "not found";
            ToastNotification(errorMsg, inputModalMain);
            return;
          }
          currentFilterContent.forEach((item) => {
            divIspis.appendChild(Ship(item));
          });
          closeModal();
          ToastNotification(response.status);
          localStorage.setItem(
            "filterContent",
            JSON.stringify(currentFilterContent)
          );
        })
        .catch((error) => {
          let errorMsg;
          if (error.request.status === 404) {
            errorMsg = "type not found";
          } else {
            errorMsg = "there was an error";
          }
          ToastNotification(errorMsg, inputModalMain);
          return;
        });
    }
  });
  inputModalMain.addEventListener("keyup", (e) => {
    if (inputName !== "shipName") return;
    if (inputModalMain.value.length < 1) return;

    getAllShips()
      .then((response) => {
        const imena = response.data.filter(
          (ship) =>
            ship.ship_name
              .toLowerCase()
              .substring(0, inputModalMain.value.length) ===
            inputModalMain.value.toLowerCase()
        );

        const provera = document.querySelector(".shipNamesInModal");
        if (divModal.contains(provera)) {
          provera.remove();
        }
        if (imena.length < 1) return;

        const showNames = (names) => {
          const shipIme = document.createElement("div");
          shipIme.classList.add("shipNamesInModal");
          names.forEach((name) => {
            const option = document.createElement("p");
            option.classList.add("shipNameOptions");
            option.innerText = name.ship_name;
            shipIme.append(option);
            option.addEventListener("click", (e) => {
              inputModalMain.value = option.innerText;
            });
          });
          divModal.append(shipIme);
        };
        showNames(imena);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  });

  if (localStorage.getItem("filterContent") === null)
    localStorage.setItem("filterContent", JSON.stringify(currentFilterContent));
  if (modalBtnText2 !== "") {
    divModalMain.append(labelModalMain);
    divModalHeader.append(h3ModalTitle, divModalClose);
    divModalFooter.append(buttonModalFooter, buttonModalFooter2);
    divModal.append(divModalHeader, divModalMain, divModalFooter);
    divModalBackground.append(divModal);
    return divModalBackground;
  }
  divModalMain.append(labelModalMain, inputModalMain);
  divModalHeader.append(h3ModalTitle, divModalClose);
  divModalFooter.append(buttonModalFooter);
  divModal.append(divModalHeader, divModalMain, divModalFooter);
  divModalBackground.append(divModal);
  if (inputName === "shipType") {
    const types = ["tug", "cargo", "high speed craft", "barge"];
    const shipIme = document.createElement("div");
    shipIme.classList.add("shipNamesInModal");

    types.forEach((type) => {
      const option = document.createElement("p");
      option.classList.add("shipNameOptions");
      option.innerText = type;
      shipIme.append(option);
      option.addEventListener("click", (e) => {
        inputModalMain.value = option.innerText;
      });
    });
    divModal.append(shipIme);
  }
  return divModalBackground;
};
export default Modal;
