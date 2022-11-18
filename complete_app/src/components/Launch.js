const Launch = (launch) => {
  const divLaunch = document.createElement("div");
  divLaunch.classList.add("launch");

  const imgPatch = document.createElement("img");
  imgPatch.src = launch.links.mission_patch;

  const pRocketName = document.createElement("p");
  pRocketName.textContent = launch.rocket.rocket_name;

  const convertToDate = (str) => {
    let Launchdate = str.substring(0, 10);
    return Launchdate;
  };

  const pLaunchYear = document.createElement("p");
  pLaunchYear.textContent = convertToDate(launch.launch_date_utc);

  const divDetails = document.createElement("div");
  divDetails.classList.add("launch-details");
  const h3Details = document.createElement("h3");
  h3Details.textContent = "Details";
  const pDetails = document.createElement("p");
  
  if (typeof launch.details==='string') {
     pDetails.textContent = launch.details;
  }else{
    pDetails.textContent = "No details for this mission";
  }
 
 
  h3Details.addEventListener("click", (e) => {
    if (divDetails.style.height == "100%") {
      divDetails.style.height = "0%";
    } else {
      divDetails.style.height = "100%";

      divDetails.style.overflowY = "scroll";
    }
  });
  divDetails.append(pDetails);

  divLaunch.append(imgPatch, pRocketName, pLaunchYear, h3Details, divDetails);

  return divLaunch;
};

export default Launch;
