import { getAllLaunches } from "./services";
import ToastNotification from "./components/ToastNotification";
import Funkcije from "./funkcije";
import Launch from "./components/Launch";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
const allLaunchesBtn = document.querySelector("#all-launches");
const singleLaunchBtn = document.querySelector("#single-launch");
const launchYearBtn = document.querySelector("#launch-year");
const divIspis = document.querySelector(".ispis");
const inputSearch = document.querySelector(" #input-search");
const headerForm = document.querySelector("header form");
const radioBtnMonth = document.querySelector("#month");
const radioBtnDetals = document.querySelector("#details");
const radioBtnMissionName = document.querySelector("#mission-name");
const sortBy = document.querySelector("#sort");
const loader = Loader();
const spaceSwitch = document.querySelector("#spaceBtnsSwitch");
const spaceBtns = document.querySelector("#spaceBtns");
const shipSwitch = document.querySelector("#shipsBtnsSwitch");
const shipBtns = document.querySelector("#shipBtns");
spaceSwitch.addEventListener("click", (e) => {
  spaceBtns.classList.toggle("switchOnOff");
});
shipSwitch.addEventListener("click", (e) => {
  shipBtns.classList.toggle("switchOnOff");
});
let newCurrentFilter = [];
let currentFilterContent = [];

export const reset = () => {
  inputSearch.value = "";
  sortBy.value = "default";
  currentFilterContent = [];
  newCurrentFilter = [];
};

allLaunchesBtn.addEventListener("click", (e) => {
  if (document.querySelector(".toastNotification")) return;
  divIspis.innerHTML = "";

  reset();
  divIspis.append(loader);
  getAllLaunches()
    .then((response) => {
      divIspis.innerHTML = "";
      console.log(response.status);
      currentFilterContent = response.data.filter(
        (launch) => launch.links.mission_patch !== null
      );
      currentFilterContent.forEach((item) => {
        divIspis.appendChild(Launch(item));
      });
      ToastNotification(response.status);
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
  const modalLaunchYearButton = document.querySelector(".modalButton");
  const modalLaunchYearInput = document.querySelector("#modal-main input");
  modalLaunchYearButton.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    if (modalLaunchYearInput.value === "") {
      ToastNotification("Please add a launch year", modalLaunchYearInput);
      return;
    } else {
      reset();
      getAllLaunches()
        .then((response) => {
          currentFilterContent = response.data.filter(
            (launch) => launch.launch_year === modalLaunchYearInput.value
          );
          currentFilterContent = currentFilterContent.filter(
            (launch) => launch.links.mission_patch !== null
          );
          if (currentFilterContent.length < 1) {
            ToastNotification(
              "No launches for this year",
              modalLaunchYearInput
            );
            reset();
            return;
          }
          ToastNotification(response.status);
          divIspis.innerHTML = "";
          Funkcije.closeModal();
          currentFilterContent.forEach((item) => {
            divIspis.appendChild(Launch(item));
          });
        })
        .catch((error) => {
          if (error.message !== null) {
            ToastNotification(error.message, modalLaunchYearInput);
            divIspis.removeChild(loader);
            reset();
          }
          return;
        });
    }
  });
});
sortBy.addEventListener("click", (e) => {
  if (newCurrentFilter.length < 1 && currentFilterContent.length < 1) return;

  if (newCurrentFilter.length < 1) {
    if (sortBy.value === "date-oldest") {
      currentFilterContent.sort((a, b) => a.flight_number - b.flight_number);
      divIspis.innerHTML = "";
      currentFilterContent.forEach((item) => {
        divIspis.appendChild(Launch(item));
      });
    }
    if (sortBy.value === "date-newest") {
      currentFilterContent.sort((a, b) => b.flight_number - a.flight_number);
      divIspis.innerHTML = "";
      currentFilterContent.forEach((item) => {
        divIspis.appendChild(Launch(item));
      });
    }
  } else {
    if (sortBy.value === "date-oldest") {
      newCurrentFilter.sort((a, b) => a.flight_number - b.flight_number);
      divIspis.innerHTML = "";
      newCurrentFilter.forEach((item) => {
        divIspis.appendChild(Launch(item));
      });
    }
    if (sortBy.value === "date-newest") {
      newCurrentFilter.sort((a, b) => b.flight_number - a.flight_number);
      divIspis.innerHTML = "";
      newCurrentFilter.forEach((item) => {
        divIspis.appendChild(Launch(item));
      });
    }
  }
});
headerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.querySelector(".toastNotification")) return;

  if (newCurrentFilter.length < 1 && currentFilterContent.length < 1) {
    ToastNotification("No launches to filter from", inputSearch);
    return;
  }
  let value = inputSearch.value.trim();
  sortBy.value = "default";
  if (value === "" && radioBtnMonth.checked) {
    ToastNotification("Please type in a month", inputSearch);
    return;
  }
  if (radioBtnMonth.checked) {
    let brojMeseca = Funkcije.monthNameToNumbers(value);
    let newFilter = [];
    currentFilterContent.forEach((e) => {
      let mesec = Funkcije.convertToMonth(e.launch_date_utc);
      if (brojMeseca == mesec) {
        return newFilter.push(e);
      }
    });
    if (newFilter.length > 0) {
      divIspis.innerHTML = "";
      newCurrentFilter = newFilter;
      newCurrentFilter.forEach((l) => {
        divIspis.appendChild(Launch(l));
      });
    }
    if (newFilter.length === 0 && value !== "") {
      ToastNotification("no match found", inputSearch);
      return;
    }
  }
  if (value === "" && radioBtnDetals.checked) {
    currentFilterContent = currentFilterContent.filter(
      (launch) => launch.details !== null
    );
    if (currentFilterContent === null) {
      return;
    }
    divIspis.innerHTML = "";
    currentFilterContent.forEach((launch) => {
      divIspis.appendChild(Launch(launch));
    });
  }
  if (value !== "" && radioBtnDetals.checked) {
    currentFilterContent = currentFilterContent.filter(
      (launch) => launch.details !== null
    );
    newCurrentFilter = currentFilterContent.filter((launch) =>
      launch.details.includes(value)
    );
    if (newCurrentFilter.length === 0) {
      ToastNotification("no match found", inputSearch);
      return;
    }
    divIspis.innerHTML = "";
    newCurrentFilter.forEach((launch) => {
      divIspis.appendChild(Launch(launch));
    });
  }
  if (value === "" && radioBtnMissionName.checked) {
    ToastNotification("Please type in a mission name", inputSearch);
    return;
  }
  if (value !== "" && radioBtnMissionName.checked) {
    newCurrentFilter = currentFilterContent.filter(
      (launch) => launch.mission_name.toLowerCase() == value.toLowerCase()
    );
    if (newCurrentFilter.length !== 0) {
      divIspis.innerHTML = "";
      newCurrentFilter.forEach((launch) => {
        divIspis.appendChild(Launch(launch));
      });
    } else {
      ToastNotification("No matching mission name", inputSearch);
      return;
    }
  }
});
