import { getAllLaunches } from "./services";
import { getSingleLaunch } from "./services";
import Funkcije from "./components/Functions";
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
let currentFilterContent = [];
let newCurrentFilter = [];

const reset = () => {
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
      currentFilterContent = response.data.filter(
        (launch) => launch.links.mission_patch !== null
      );
      currentFilterContent.forEach((item) => {
        divIspis.appendChild(Launch(item));
      });
    })
    .catch((error) => {
      if (error.message !== null) {
        Funkcije.emptyValueOrError(error.message, inputSearch);
        divIspis.removeChild(loader);

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
  const modalSingleLaunchButton = document.querySelector(".modalButton");
  const modalSingleLaunchInput = document.querySelector("#modal-main input");
  modalSingleLaunchButton.addEventListener("click", (e) => {
    if (document.querySelector(".toastNotification")) return;
    if (modalSingleLaunchInput.value === "") {
      Funkcije.emptyValueOrError(
        "Please add a Launch id",
        modalSingleLaunchInput
      );

      return;
    } else {
      divIspis.append(loader);
      getSingleLaunch(modalSingleLaunchInput.value)
        .then((response) => {
          reset();
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
          Funkcije.emptyValueOrError(errorMsg, modalSingleLaunchInput);
          divIspis.removeChild(loader);

          return;
        });
      // try {
      //   const response = await getSingleLaunch(modalSingleLaunchInput.value);
      //   divIspis.innerHTML = "";
      //   divIspis.appendChild(Launch(response.data));
      // } catch (error) {
      //   return console.log(error.response.data.error);
      // }
    }
  });
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
      Funkcije.emptyValueOrError(
        "Please add a launch year",
        modalLaunchYearInput
      );

      return;
    } else {
      reset();
      divIspis.append(loader);
      getAllLaunches()
        .then((response) => {
          currentFilterContent = response.data.filter(
            (launch) => launch.launch_year === modalLaunchYearInput.value
          );
          currentFilterContent = currentFilterContent.filter(
            (launch) => launch.links.mission_patch !== null
          );
          if (currentFilterContent.length < 1) {
            Funkcije.emptyValueOrError(
              "No launches for this year",
              modalLaunchYearInput
            );

            reset();
            divIspis.removeChild(loader);

            return;
          }

          divIspis.innerHTML = "";
          Funkcije.closeModal();
          currentFilterContent.forEach((item) => {
            divIspis.appendChild(Launch(item));
          });
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message !== null) {
            Funkcije.emptyValueOrError(error.message, modalLaunchYearInput);
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
    Funkcije.emptyValueOrError("No launches to filter from", inputSearch);

    return;
  }
  let value = inputSearch.value.trim();
  sortBy.value = "default";
  if (value === "" && radioBtnMonth.checked) {
    Funkcije.emptyValueOrError("Please type in a month", inputSearch);

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
      Funkcije.emptyValueOrError("no match found", inputSearch);

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
      Funkcije.emptyValueOrError("no match found", inputSearch);

      return;
    }
    divIspis.innerHTML = "";
    newCurrentFilter.forEach((launch) => {
      divIspis.appendChild(Launch(launch));
    });
  }
  if (value === "" && radioBtnMissionName.checked) {
    Funkcije.emptyValueOrError("Please type in a mission name", inputSearch);

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
      Funkcije.emptyValueOrError("No matching mission name", inputSearch);

      return;
    }
  }
});
