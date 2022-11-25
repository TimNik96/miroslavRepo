import Funkcije from "../funkcije";
const Launch = (launch) => {
  const divLaunch = document.createElement("div");
  divLaunch.classList.add("launch");

  const imgPatch = document.createElement("img");
  imgPatch.src = launch.links.mission_patch;

  const pRocketName = document.createElement("p");
  pRocketName.innerHTML = `<span>Rocket: </span>${launch.rocket.rocket_name}`;
  const pMissionName = document.createElement("p");
  pMissionName.innerHTML = `<span>Mission: </span>${launch.mission_name}`;
  const pLaunchYear = document.createElement("p");
  pLaunchYear.innerHTML = `<span>Date: </span>${Funkcije.convertToDate(
    launch.launch_date_utc
  )}`;

  const divDetails = document.createElement("div");
  divDetails.classList.add("launch-details");
  const h3Details = document.createElement("h3");
  h3Details.textContent = "Details";
  const pDetails = document.createElement("p");

  if (typeof launch.details === "string") {
    pDetails.textContent = launch.details;
  } else {
    pDetails.textContent = "No details for this mission";
  }

  h3Details.addEventListener("click", (e) => {
    h3Details.classList.toggle("activated");

    if (divDetails.style.height == "100%") {
      divDetails.style.height = "0%";
    } else {
      divDetails.style.height = "100%";
    }
  });
  divDetails.append(pDetails);

  divLaunch.append(
    imgPatch,
    pRocketName,
    pMissionName,
    pLaunchYear,
    h3Details,
    divDetails
  );

  return divLaunch;
};

export default Launch;
