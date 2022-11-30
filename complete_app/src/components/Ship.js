const Ship = (ship) => {
  const divShip = document.createElement("div");
  divShip.classList.add("ship");
  const divImg = document.createElement("div");
  divImg.classList.add("img-wrapper");
  const divPWrapper = document.createElement("div");
  divPWrapper.classList.add("p-wrapper");
  const imgPatch = document.createElement("img");
  imgPatch.src = ship.image;
  const pShipName = document.createElement("p");
  pShipName.classList.add("ship-name");
  pShipName.innerHTML = `<span>Ship name: </span>${ship.ship_name}`;
  const pShipType = document.createElement("p");
  pShipType.classList.add("ship-type");
  pShipType.innerHTML = `<span>Ship type: </span>${ship.ship_type}`;
  const ifNull = (arg, kg = "") => {
    if (arg === null) {
      arg = "unknown";
      kg = "";
    }
    return arg + kg;
  };
  const pShipYear = document.createElement("p");
  pShipYear.classList.add("ship-year");
  pShipYear.innerHTML = `<span>Built year : </span>${ifNull(ship.year_built)}`;
  const pShipPort = document.createElement("p");
  pShipPort.classList.add("ship-port");
  pShipPort.innerHTML = `<span>Port name : </span>${ship.home_port}`;
  const pShipWeight = document.createElement("p");
  pShipWeight.classList.add("ship-weight");
  pShipWeight.innerHTML = `<span>Weight : </span>${ifNull(
    ship.weight_kg,
    " kg"
  )}`;
  const shipRoles = (roles) => {
    let rolesLength = roles.length;
    let text = `<ul>`;
    for (let i = 0; i < rolesLength; i++) {
      text += `<li>${roles[i]}</li>`;
    }
    text += `</ul>`;
    return text;
  };
  const missionsUsed = (missions) => {
    let missionsLenght = missions.length;
    let text = `<ul>`;
    for (let i = 0; i < missionsLenght; i++) {
      text += `<li><span>Name: </span>${missions[i].name} <span>Flight: </span>${missions[i].flight}</li>`;
    }
    text += `</ul>`;
    return text;
  };
  const divMissions = document.createElement("div");
  divMissions.classList.add("ship-missions");
  divMissions.innerHTML = `<span>Used in missions: </span>${missionsUsed(
    ship.missions
  )}`;
  const divShipRoles = document.createElement("div");
  divShipRoles.classList.add("ship-roles");
  divShipRoles.innerHTML = `<span>Ship roles: </span>${shipRoles(ship.roles)}`;
  divPWrapper.append(pShipName, pShipType, pShipYear, pShipPort, pShipWeight);
  divImg.append(imgPatch);
  divShip.append(divImg, divPWrapper, divShipRoles, divMissions);
  return divShip;
};
export default Ship;
