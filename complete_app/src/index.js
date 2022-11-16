import { getAllLaunches } from "./services";
import Launch from "./components/Launch";
import Loader from "./components/Loader";
const allLaunchesBtn = document.querySelector("#all-launches");
const divIspis = document.querySelector(".ispis");
const loader = Loader();

allLaunchesBtn.addEventListener("click", (e) => {
  divIspis.innerHTML = "";

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
  });
});
