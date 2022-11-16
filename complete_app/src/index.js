import { getAllLaunches } from "./services";
import Launch from "./components/Launch";
import Loader from "./components/Loader";
const allLaunchesBtn = document.querySelector("#all-launches");
const divIspis = document.querySelector(".ispis");
const inputSearch = document.querySelector("#input-search");
const inputWrapper = document.querySelector(".input-wrapper");
const headerForm = document.querySelector("header form");
const radioBtnMonth = document.querySelector("#month");
// const divFilters = document.querySelector(".filters");

const sortBy = document.querySelector("#sort");

const loader = Loader();

const reset = () => {
  inputSearch.value = "";
  sortBy.value = "default";
};

let currentFilterContent = [];
let newCurrentFilter = [];

allLaunchesBtn.addEventListener("click", (e) => {
  allLaunchesBtn.style.backgroundColor = "#8332ac";
  divIspis.innerHTML = "";
  reset();

  divIspis.append(loader);

  getAllLaunches().then((response) => {
    divIspis.innerHTML = "";
    let allLaunches = [];
    allLaunches = response.data.filter(
      (launch) => launch.links.mission_patch !== null
    );

    allLaunches.forEach((l) => {
      divIspis.appendChild(Launch(l));
    });
    currentFilterContent = allLaunches;
  });
});

sortBy.addEventListener("click", (e) => {
  if (newCurrentFilter.length < 1) {
    if (sortBy.value == "date-oldest") {
      currentFilterContent.sort((a, b) => a.flight_number - b.flight_number);
      divIspis.innerHTML = "";
      currentFilterContent.forEach((l) => {
        divIspis.appendChild(Launch(l));
      });
    }
    if (sortBy.value == "date-newest") {
      currentFilterContent.sort((a, b) => b.flight_number - a.flight_number);
      divIspis.innerHTML = "";
      currentFilterContent.forEach((l) => {
        divIspis.appendChild(Launch(l));
      });
    }
  } else {
    if (sortBy.value == "date-oldest") {
      newCurrentFilter.sort((a, b) => a.flight_number - b.flight_number);
      divIspis.innerHTML = "";
      newCurrentFilter.forEach((l) => {
        divIspis.appendChild(Launch(l));
      });
    }
    if (sortBy.value == "date-newest") {
      newCurrentFilter.sort((a, b) => b.flight_number - a.flight_number);
      divIspis.innerHTML = "";
      newCurrentFilter.forEach((l) => {
        divIspis.appendChild(Launch(l));
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

headerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = inputSearch.value;

  if (value.trim() === "") {
    const divErrorMsg = document.createElement("div");
    divErrorMsg.classList.add("error");
    divErrorMsg.innerHTML = `<p>Please type something<p>`;
    inputWrapper.append(divErrorMsg);
    setTimeout(() => {
      divErrorMsg.remove();
    }, 1000);
    return;
  }

  if (radioBtnMonth.checked) {
    let brojMeseca = monthNameToNumbers(value);
    console.log(brojMeseca);
    let newFilter = [];

    currentFilterContent.forEach((e) => {
      let mesec = convertToMonth(e.launch_date_utc);

      if (brojMeseca == mesec) {
        return newFilter.push(e);
      }
    });
    if (newFilter.length > 1) {
      divIspis.innerHTML = "";
      newCurrentFilter = newFilter;

      newCurrentFilter.forEach((l) => {
        divIspis.appendChild(Launch(l));
      });
    } else {
      alert("nema ih");
    }
  }

  console.log(value);
  // console.log(filterContent);
});
