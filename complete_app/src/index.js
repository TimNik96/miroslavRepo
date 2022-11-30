import { getAllLaunches } from "./services";
import { getAllShips } from "./services";
import ToastNotification from "./components/ToastNotification";
import Launch from "./components/Launch";
import Ship from "./components/Ship";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import SearchAndFilter from "./components/SearchAndFilter";
import { shipFilterBtns } from "./components/SearchAndFilter";
import { shipsSelectOptions } from "./components/SearchAndFilter";
import { spaceFilterBtns } from "./components/SearchAndFilter";
import { spaceSelectOptions } from "./components/SearchAndFilter";

window.onload = () => {
  const spaceOptions = spaceSelectOptions();
  const spaceFilters = spaceFilterBtns();
  const header = document.querySelector("header");
  const headerText = SearchAndFilter(spaceOptions, spaceFilters);
  header.innerHTML = "";
  header.append(headerText);
  const shipOptions = shipsSelectOptions();
  const shipFilters = shipFilterBtns();
  const allLaunchesBtn = document.querySelector("#all-launches");
  const singleLaunchBtn = document.querySelector("#single-launch");
  const launchYearBtn = document.querySelector("#launch-year");
  const divIspis = document.querySelector(".ispis");
  const inputSearch = document.querySelector(" #input-search");
  const sortBy = document.querySelector(".sort");
  const loader = Loader();
  const spaceSwitch = document.querySelector("#spaceBtnsSwitch");
  const spaceBtns = document.querySelector("#spaceBtns");
  const shipSwitch = document.querySelector("#shipsBtnsSwitch");
  const shipBtns = document.querySelector("#shipBtns");
  const shipNameBtn = document.querySelector("#ship-name");
  const shipTypeBtn = document.querySelector("#ship-type");
  const allShipsBtn = document.querySelector("#all-ships");
  const logInBtn = document.querySelector("#login");

  spaceSwitch.addEventListener("click", (e) => {
    spaceBtns.classList.toggle("switchOnOff");
  });
  shipSwitch.addEventListener("click", (e) => {
    shipBtns.classList.toggle("switchOnOff");
  });

  let newCurrentFilter = [];
  let currentFilterContent = [];

  if (localStorage.getItem("newFilterContent") === null)
    localStorage.setItem("newFilterContent", JSON.stringify(newCurrentFilter));

  if (localStorage.getItem("filterContent") === null)
    localStorage.setItem("filterContent", JSON.stringify(currentFilterContent));

  newCurrentFilter = localStorage.setItem(
    "newFilterContent",
    JSON.stringify(newCurrentFilter)
  );
  currentFilterContent = localStorage.setItem(
    "filterContent",
    JSON.stringify(currentFilterContent)
  );
  const reset = () => {
    inputSearch.value = "";
    sortBy.value = "default";
  };
  allLaunchesBtn.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    divIspis.innerHTML = "";
    header.innerHTML = "";
    const headerText = SearchAndFilter(spaceOptions, spaceFilters);
    header.append(headerText);
    reset();
    divIspis.append(loader);
    getAllLaunches()
      .then((response) => {
        divIspis.innerHTML = "";
        currentFilterContent = response.data.filter(
          (launch) => launch.links.mission_patch !== null
        );
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Launch(item));
        });
        ToastNotification(response.status);
        localStorage.setItem(
          "filterContent",
          JSON.stringify(currentFilterContent)
        );
      })
      .catch((error) => {
        if (error.message !== null) {
          ToastNotification(error.message, inputSearch);
          reset();
        }
        return;
      });
  });
  singleLaunchBtn.addEventListener("click", (addModal) => {
    if (document.querySelector(".toastNotification")) return;
    const title = "single launch";
    const labelText = "Please enter a single launch id";
    const inputName = "singleLaunch";
    const inputType = "number";
    const modalBtnText = "find";
    const inputPlaceholder = "Launch ID";
    document.body.append(
      Modal(
        title,
        labelText,
        inputName,
        inputType,
        modalBtnText,
        inputPlaceholder
      )
    );
    header.innerHTML = "";
    const headerText = SearchAndFilter(spaceOptions, spaceFilters);
    header.append(headerText);
    reset();
  });
  launchYearBtn.addEventListener("click", (addModal) => {
    if (document.querySelector(".toastNotification")) return;
    const title = "launch year";
    const labelText = "Please enter a launch year";
    const inputName = "launchYear";
    const inputType = "number";
    const modalBtnText = "find";
    const inputPlaceholder = "Launch Year";
    document.body.append(
      Modal(
        title,
        labelText,
        inputName,
        inputType,
        modalBtnText,
        inputPlaceholder
      )
    );
    reset();
    header.innerHTML = "";
    const headerText = SearchAndFilter(spaceOptions, spaceFilters);
    header.append(headerText);
    currentFilterContent = JSON.parse(localStorage.getItem("filterContent"));
  });
  allShipsBtn.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    divIspis.innerHTML = "";
    header.innerHTML = "";
    const headerText = SearchAndFilter(shipOptions, shipFilters);
    header.append(headerText);
    reset();
    divIspis.append(loader);
    getAllShips()
      .then((response) => {
        divIspis.innerHTML = "";
        currentFilterContent = response.data.filter(
          (ship) => ship.image !== null
        );
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
        ToastNotification(response.status);
        localStorage.setItem(
          "filterContent",
          JSON.stringify(currentFilterContent)
        );
      })
      .catch((error) => {
        if (error.message !== null) {
          ToastNotification(error.message, inputSearch);
          reset();
        }
        return;
      });
  });
  shipTypeBtn.addEventListener("click", (addModal) => {
    if (document.querySelector(".toastNotification")) return;
    const title = "Ship Type";
    const labelText = "Please enter a Ship Type";
    const inputName = "shipType";
    const inputType = "text";
    const modalBtnText = "find";
    const inputPlaceholder = "Ship Type";
    document.body.append(
      Modal(
        title,
        labelText,
        inputName,
        inputType,
        modalBtnText,
        inputPlaceholder
      )
    );
    reset();
    header.innerHTML = "";
    const headerText = SearchAndFilter(shipOptions, shipFilters);
    header.append(headerText);
    currentFilterContent = JSON.parse(localStorage.getItem("filterContent"));
  });
  shipNameBtn.addEventListener("click", (addModal) => {
    if (document.querySelector(".toastNotification")) return;
    const title = "Ship Name";
    const labelText = "Please enter a Ship Name";
    const inputName = "shipName";
    const inputType = "text";
    const modalBtnText = "find";
    const inputPlaceholder = "Ship Name";
    document.body.append(
      Modal(
        title,
        labelText,
        inputName,
        inputType,
        modalBtnText,
        inputPlaceholder
      )
    );
    reset();
    header.innerHTML = "";
    const headerText = SearchAndFilter(shipOptions, shipFilters);
    header.append(headerText);
    currentFilterContent = JSON.parse(localStorage.getItem("filterContent"));
  });
  logInBtn.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    const title = "Loging out";
    const labelText = "Are you sure you want to log out?";
    const inputName = "";
    const inputType = "";
    const modalBtnText = "No";
    const inputPlaceholder = "";
    const modalBtnText2 = "Yes";
    document.body.append(
      Modal(
        title,
        labelText,
        inputName,
        inputType,
        modalBtnText,
        inputPlaceholder,
        modalBtnText2
      )
    );
  });
};
