import Launch from "./Launch";
import ToastNotification from "./ToastNotification";
import Funkcije from "../funkcije";
import Ship from "./Ship";

export const spaceSelectOptions = () => {
  const options = `<option value="default" selected disabled>Chose...</option>
  <option value="date-newest">date newest</option>
  <option value="date-oldest">date oldest</option>
  `;
  return options;
};
export const shipsSelectOptions = () => {
  const options = `<option value="default" selected disabled>Chose...</option><option value="newest"> newest</option><option value="oldest">oldest</option><option value="heaviest">heaviest</option><option value="lightest">lightest</option><option value="most-used">most used</option><option value="least-used">least used</option>`;
  return options;
};
export const spaceFilterBtns = () => {
  const btns = `
    <div class="filterBtn">
        <input type="radio" id="month" name="filter" checked />
        <label for="month">Month</label>
    </div>
    <div class="filterBtn">
        <input type="radio" id="details" name="filter" />
        <label for="details">Details</label>
    </div>
    <div class="filterBtn">
        <input type="radio" id="mission-name" name="filter" />
        <label for="rocket-name">Mission Name</label>
    </div>`;
  return btns;
};
export const shipFilterBtns = () => {
  const btns = `
    <div class="filterBtn">
        <input type="radio" id="ship-role" name="filter"  checked/>
        <label for="details">Ship Roles</label>
    </div>
    <div class="filterBtn">
        <input type="radio" id="port-name" name="filter" />
        <label for="rocket-name">Port Name</label>
    </div>`;
  return btns;
};

const SearchAndFilter = (selectOptions, filterBtns) => {
  const divFormWrapper = document.createElement("div");
  divFormWrapper.classList.add("formWrapper");
  const forma = document.createElement("form");
  forma.method = "get";
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("input-wrapper");
  inputWrapper.innerHTML = `<input type="text" id="input-search" maxlength="20" />
  <input type="submit" value="search" />`;
  const selectWrapper = document.createElement("div");
  selectWrapper.classList.add("select-wrapper");
  const select = document.createElement("select");
  select.name = "sort";
  select.classList.add("sort");
  const selectLabel = document.createElement("label");
  selectLabel.for = "sort";
  selectLabel.innerText = "Sort by:";
  select.innerHTML += selectOptions;
  selectWrapper.append(selectLabel, select);
  forma.append(inputWrapper, selectWrapper);
  const divFilter = document.createElement("div");
  divFilter.classList.add("filters");
  const h4 = document.createElement("h4");
  h4.innerText = "Select a Filter to search by:";
  divFilter.append(h4);
  divFilter.innerHTML += filterBtns;
  divFormWrapper.append(forma, divFilter);
  const divIspis = document.querySelector(".ispis");

  let currentFilterContent = [];
  let newCurrentFilter = [];

  forma.addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.querySelector(".toastNotification")) return;
    newCurrentFilter = JSON.parse(localStorage.getItem("newFilterContent"));
    currentFilterContent = JSON.parse(localStorage.getItem("filterContent"));
    if (newCurrentFilter === null && currentFilterContent === null) {
      ToastNotification("No launches to filter from", inputSearch);
      return;
    }
    const radioBtnMonth = document.querySelector("#month");
    const radioBtnDetals = document.querySelector("#details");
    const radioBtnMissionName = document.querySelector("#mission-name");
    const inputSearch = document.querySelector(" #input-search");
    const radioBtnShipRoles = document.querySelector("#ship-role");
    const radioBtnPortName = document.querySelector("#port-name");

    let value = inputSearch.value.trim();

    select.value = "default";
    if (value === "") {
      ToastNotification("Please type in something", inputSearch);
      return;
    }
    if (radioBtnMonth !== null) {
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
          localStorage.setItem("newFilterContent", JSON.stringify(""));
          newCurrentFilter = localStorage.setItem(
            "newFilterContent",
            JSON.stringify(newCurrentFilter)
          );
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
        newCurrentFilter = localStorage.setItem(
          "newFilterContent",
          JSON.stringify(newCurrentFilter)
        );
      }
      if (value === "" && radioBtnMissionName.checked) {
        ToastNotification("Please type in a mission name", inputSearch);
        return;
      }
      if (value !== "" && radioBtnMissionName.checked) {
        newCurrentFilter = currentFilterContent.filter(
          (launch) =>
            launch.mission_name.toLowerCase().substring(0, value.length) ===
            value.toLowerCase()
        );
        if (newCurrentFilter !== null) {
          divIspis.innerHTML = "";
          newCurrentFilter.forEach((launch) => {
            divIspis.appendChild(Launch(launch));
          });
          newCurrentFilter = localStorage.setItem(
            "newFilterContent",
            JSON.stringify(newCurrentFilter)
          );
        } else {
          ToastNotification("No matching mission name", inputSearch);
          return;
        }
      }
    }
    if (radioBtnShipRoles !== null) {
      if (radioBtnShipRoles.checked && value !== "") {
        newCurrentFilter = currentFilterContent.filter((ship) =>
          ship.roles.join().toLowerCase().includes(value.toLowerCase())
        );
        if (newCurrentFilter.length < 1) {
          ToastNotification("no match found", inputSearch);
          return;
        }
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((ship) => {
          divIspis.appendChild(Ship(ship));
        });
        newCurrentFilter = localStorage.setItem(
          "newFilterContent",
          JSON.stringify(newCurrentFilter)
        );
      }
      if (radioBtnPortName.checked && value !== "") {
        newCurrentFilter = currentFilterContent.filter((ship) =>
          ship.home_port.toLowerCase().includes(value.toLowerCase())
        );
        if (newCurrentFilter.length < 1) {
          ToastNotification("no match found", inputSearch);
          return;
        }
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((ship) => {
          divIspis.appendChild(Ship(ship));
        });
        newCurrentFilter = localStorage.setItem(
          "newFilterContent",
          JSON.stringify(newCurrentFilter)
        );
      }
    }
  });

  select.addEventListener("click", (e) => {
    newCurrentFilter = JSON.parse(localStorage.getItem("newFilterContent"));
    currentFilterContent = JSON.parse(localStorage.getItem("filterContent"));

    if (currentFilterContent === undefined) {
      currentFilterContent = JSON.parse(localStorage.getItem("filterContent"));
    }
    if (newCurrentFilter === undefined) {
      newCurrentFilter = JSON.parse(localStorage.getItem("newFilterContent"));
    }

    if (currentFilterContent === undefined && newCurrentFilter === undefined)
      return;
    if (newCurrentFilter.length < 1) {
      if (select.value === "date-oldest") {
        currentFilterContent.sort((a, b) => a.flight_number - b.flight_number);
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Launch(item));
        });
      }
      if (select.value === "oldest") {
        currentFilterContent.sort((a, b) => a.year_built - b.year_built);
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "date-newest") {
        currentFilterContent.sort((a, b) => b.flight_number - a.flight_number);
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Launch(item));
        });
      }
      if (select.value === "newest") {
        currentFilterContent.sort((a, b) => b.year_built - a.year_built);
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "heaviest") {
        currentFilterContent.sort((a, b) => b.weight_kg - a.weight_kg);
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "lightest") {
        currentFilterContent.sort((a, b) => a.weight_kg - b.weight_kg);
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "most-used") {
        currentFilterContent.sort(
          (a, b) => b.missions.length - a.missions.length
        );
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "least-used") {
        currentFilterContent.sort(
          (a, b) => a.missions.length - b.missions.length
        );
        divIspis.innerHTML = "";
        currentFilterContent.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
    } else {
      if (select.value === "date-oldest") {
        newCurrentFilter.sort((a, b) => a.flight_number - b.flight_number);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Launch(item));
        });
      }
      if (select.value === "oldest") {
        newCurrentFilter.sort((a, b) => a.year_built - b.year_built);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "date-newest") {
        newCurrentFilter.sort((a, b) => b.flight_number - a.flight_number);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Launch(item));
        });
      }
      if (select.value === "newest") {
        newCurrentFilter.sort((a, b) => b.year_built - a.year_built);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "heaviest") {
        newCurrentFilter.sort((a, b) => b.weight_kg - a.weight_kg);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "lightest") {
        newCurrentFilter.sort((a, b) => a.weight_kg - b.weight_kg);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "most-used") {
        newCurrentFilter.sort((a, b) => b.missions.length - a.missions.length);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
      if (select.value === "least-used") {
        newCurrentFilter.sort((a, b) => a.missions.length - b.missions.length);
        divIspis.innerHTML = "";
        newCurrentFilter.forEach((item) => {
          divIspis.appendChild(Ship(item));
        });
      }
    }
  });
  return divFormWrapper;
};
export default SearchAndFilter;
