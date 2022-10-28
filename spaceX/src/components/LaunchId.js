import { getSingleLaunch } from "../services";
import Launch from "./Launch";

const divIspis = document.querySelector(".ispis");

const LaunchId = () => {
  const divForm = document.createElement("form");
  divForm.classList.add('launchIdForm')
  const inputText = document.createElement("input");
  inputText.type = "text";

  const inputSubmit = document.createElement("input");
  inputSubmit.type = "submit";
  inputSubmit.classList.add("launch_id_submit");

  divForm.append(inputText, inputSubmit);
  
  divForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const singleLaunchInput = document.querySelector('.launchIdForm input[type="text"]')
    getSingleLaunch(singleLaunchInput.value).then(response => {
      divIspis.appendChild(Launch(response.data))
    })
  })

  return divForm;
};

export default LaunchId;
