import axios from "axios";

export const getAllLaunches = () => {
  return axios.get("https://api.spacexdata.com/v3/launches");
};
export const getSingleLaunch = (flight_number) => {
  return axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`);
};
export const getAllShips = () => {
  return axios.get("https://api.spacexdata.com/v3/ships");
};
export const getSingleShip = (ship_number) => {
  return axios.get(`https://api.spacexdata.com/v3/ships/${ship_number}`);
};
