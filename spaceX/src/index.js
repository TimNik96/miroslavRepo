import Launch from "./components/Launch";
import LaundchId from "./components/LaunchId";
import { getAllLaunches } from "./services";

const divIspis = document.querySelector(".ispis");
const allLaunchesBtn = document.querySelector(".all_launches_btn");
const launchIdBtn = document.querySelector(".launch_id_btn");
const launchesPerYearBtn = document.querySelector(".launches_per_year_btn");
const formContainer = document.querySelector(".form_container");

allLaunchesBtn.addEventListener("click", (e) => {
  divIspis.innerHTML = "";
  getAllLaunches().then((response) => {
    let allLaunches = [];
    allLaunches = response.data.filter(
      (launch) => launch.links.mission_patch !== null
    );

    allLaunches.forEach((l, index) => {
      divIspis.appendChild(Launch(l, index));
    });
  });
});
launchIdBtn.addEventListener("click", (e) => {
  formContainer.innerHTML = "";
  formContainer.appendChild(LaundchId());
  formContainer.classList.add("height_100");
  formContainer.classList.add("animation");
});

launchesPerYearBtn.addEventListener("click", (e) => {
  formContainer.innerHTML = "";
  getAllLaunches().then((response) => {
    const divForm = document.createElement("form");
    const divSelectWrapper = document.createElement("div");
    divSelectWrapper.classList.add("select");
    const select = document.createElement("select");
    select.name = "select";
    select.innerHTML = `"<option value="year" selected disabled>
                     select a year &hellip;
                 </option>"`;

    let launchYear = [];
    response.data.forEach((launch) => {
      if (!launchYear.includes(launch.launch_year)) {
        launchYear.push(launch.launch_year);
      }
    });

    launchYear.forEach((year) => {
      const option = document.createElement("option");
      option.textContent = year;
      option.value = year;
      select.appendChild(option);
    });

    const inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.classList.add("launches_per_year_submit");
    divSelectWrapper.append(select);
    divForm.append(divSelectWrapper, inputSubmit);

    formContainer.appendChild(divForm);
    formContainer.classList.add("height_100");
    formContainer.classList.add("animation");

    const divSelect = document.querySelector(".select");
    divSelect.addEventListener("click", (e) => {
      divSelect.classList.toggle("promena");
    });
  });
});
