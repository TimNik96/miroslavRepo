import { getAllLaunches } from "./services";
import Launch from "./components/Launch";
import Loader from "./components/Loader";
import ToastNotification from "./components/ToastNotification";
const allLaunchesBtn = document.querySelector("#all-launches");
const divIspis = document.querySelector(".ispis");
const inputSearch = document.querySelector(" #input-search");
const headerForm = document.querySelector("header form");
const radioBtnMonth = document.querySelector("#month");
const radioBtnDetals = document.querySelector("#details");
const radioBtnMissionName = document.querySelector("#mission-name");
// const divFilters = document.querySelector(".filters");

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
  allLaunchesBtn.style.backgroundColor = "#8332ac";
  divIspis.innerHTML = "";
  reset();

  divIspis.append(loader);

  getAllLaunches().then((response) => {
    divIspis.innerHTML = "";

    currentFilterContent = response.data.filter(
      (launch) => launch.links.mission_patch !== null
    );
    currentFilterContent.forEach((item) => {
      divIspis.appendChild(Launch(item));
    });
  });

  // Uncaught ReferenceError: regeneratorRuntime is not defined

  // try {
  //   const response = await getAllLaunches();
  //   let allLaunches = [];
  //   allLaunches = response.data.filter(
  //     (launch) => launch.links.mission_patch !== null
  //   );

  //   allLaunches.forEach((l) => {
  //     divIspis.appendChild(Launch(l));
  //   });
  //   currentFilterContent = allLaunches;
  // } catch (error) {
  //   console.log(error.response.data.error);
  // }
});

sortBy.addEventListener("click", (e) => {
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
let clicked;
headerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (clicked) return;

  let value = inputSearch.value.trim();
  sortBy.value = "default";

  if (value === "" && radioBtnMonth.checked) {
    let toast = ToastNotification("Please type in a month");
    document.body.appendChild(toast);
    inputSearch.style.borderColor = "red";
    clicked = true;
    setTimeout(() => {
      inputSearch.style.borderColor = "inherit";
      document.body.removeChild(toast);
      clicked = false;
    }, 5000);

    return;
  }

  if (radioBtnMonth.checked) {
    let brojMeseca = monthNameToNumbers(value);
    let newFilter = [];

    currentFilterContent.forEach((e) => {
      let mesec = convertToMonth(e.launch_date_utc);

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
    } else {
      let toast = ToastNotification("no match found");
      document.body.appendChild(toast);
      inputSearch.style.borderColor = "red";
      clicked = true;
      setTimeout(() => {
        inputSearch.style.borderColor = "inherit";
        document.body.removeChild(toast);
        clicked = false;
      }, 5000);

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

    if (newCurrentFilter.length < 1) {
      let toast = ToastNotification("no match found");
      document.body.appendChild(toast);
      inputSearch.style.borderColor = "red";
      clicked = true;
      setTimeout(() => {
        inputSearch.style.borderColor = "inherit";
        document.body.removeChild(toast);
        clicked = false;
      }, 5000);

      return;
    }

    divIspis.innerHTML = "";
    newCurrentFilter.forEach((launch) => {
      divIspis.appendChild(Launch(launch));
    });
  }

  if (value === "" && radioBtnMissionName.checked) {
    let toast = ToastNotification("Please type in a mission name");
    document.body.appendChild(toast);
    inputSearch.style.borderColor = "red";
    clicked = true;
    setTimeout(() => {
      inputSearch.style.borderColor = "inherit";
      document.body.removeChild(toast);
      clicked = false;
    }, 5000);

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
      let toast = ToastNotification("No matching mission name");
      document.body.appendChild(toast);
      inputSearch.style.borderColor = "red";
      clicked = true;
      setTimeout(() => {
        inputSearch.style.borderColor = "inherit";
        document.body.removeChild(toast);
        clicked = false;
      }, 5000);

      return;
    }
  }
});
