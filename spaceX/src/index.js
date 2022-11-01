import Launch from "./components/Launch";
import LaunchId from "./components/LaunchId";
import Loader from "./components/Loader";
import { getAllLaunches } from "./services";

const divIspis = document.querySelector(".ispis");
const allLaunchesBtn = document.querySelector(".all_launches_btn");
const launchIdBtn = document.querySelector(".launch_id_btn");
const launchesPerYearBtn = document.querySelector(".launches_per_year_btn");
const formContainer = document.querySelector(".form_container");

const loader = Loader();

allLaunchesBtn.addEventListener("click", (e) => {
  divIspis.innerHTML = "";
  divIspis.appendChild(loader);
  getAllLaunches().then((response) => {
    let allLaunches = [];
    allLaunches = response.data.filter(
      (launch) => launch.links.mission_patch !== null
    );

    divIspis.removeChild(loader);

    allLaunches.forEach((l, index) => {
      divIspis.appendChild(Launch(l, index));
    });
  });
});

launchIdBtn.addEventListener("click", (e) => {
  formContainer.innerHTML = "";

  formContainer.appendChild(LaunchId());

  formContainer.classList.add("height_100");
  formContainer.classList.add("animation");
});

launchesPerYearBtn.addEventListener("click", (e) => {
  formContainer.innerHTML = "";
  formContainer.classList.add("height_100");
  formContainer.appendChild(loader);
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

    formContainer.removeChild(loader);

    const inputSubmit = document.createElement("input");
    inputSubmit.type = "submit";
    inputSubmit.classList.add("launches_per_year_submit");
    divSelectWrapper.append(select);
    const divMessage = document.createElement("div");
    divMessage.classList.add("message");
    divMessage.textContent = "Please select a year";

    divForm.append(divMessage, divSelectWrapper, inputSubmit);

    formContainer.appendChild(divForm);
    formContainer.classList.add("animation");

    const divSelect = document.querySelector(".select");
    divSelect.addEventListener("click", (e) => {
      divSelect.classList.toggle("promena");
      if (divMessage.classList.contains("show-message")) {
        divMessage.classList.remove("show-message");
      }
    });
    divForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (select.value === "year") {
        divMessage.classList.add("show-message");
        divSelect.classList.add("promena");

        return;
      }

      divIspis.appendChild(loader);

      getAllLaunches().then((response) => {
        let launchesPerYear = [];
        response.data.forEach((launch) => {
          if (launch.launch_year === select.value) {
            launchesPerYear.push(launch);
          }
        });
        divIspis.innerHTML = "";
        launchesPerYear.forEach((l, index) => {
          divIspis.appendChild(Launch(l, index));
        });
      });
    });
  });
});
