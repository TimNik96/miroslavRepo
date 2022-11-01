import { getSingleLaunch } from "../services";
import Launch from "./Launch";

const divIspis = document.querySelector(".ispis");

const LaunchId = () => {
  const divForm = document.createElement("form");
  divForm.classList.add("launchIdForm");
  const inputText = document.createElement("input");
  inputText.type = "text";
  const inputSubmit = document.createElement("input");
  inputSubmit.type = "submit";
  inputSubmit.classList.add("launch_id_submit");
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("launchIdError");
  errorMsg.innerText = "Please enter a number";
  divForm.append(errorMsg, inputText, inputSubmit);

  inputText.addEventListener("keyup", (e) => {
    if (inputText.value.trim() === "" || isNaN(+inputText.value.trim())) {
      errorMsg.innerText = "";
      errorMsg.innerText = "Please enter a flight number";
      errorMsg.classList.add("show-message");
      inputText.style.backgroundColor = " #dd000088";
      return;
    }

    if (inputText.value.length > 3) {
      errorMsg.innerText = "";
      errorMsg.innerText = "Number to long";
      errorMsg.classList.add("show-message");
      inputText.style.backgroundColor = " #dd000088";
      return;
    }

    if (errorMsg.classList.contains("show-message")) {
      errorMsg.classList.remove("show-message");
      inputText.style.backgroundColor = "  #ffffff88";
    }
  });

  divForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (errorMsg.classList.contains("show-message")) return;

    if (inputText.value.trim() === "" || isNaN(+inputText.value.trim())) {
      errorMsg.innerText = "";
      errorMsg.innerText = "Please enter a flight number";
      errorMsg.classList.add("show-message");
      inputText.style.backgroundColor = " #dd000088";
      return;
    }

    const singleLaunchInput = document.querySelector(
      '.launchIdForm input[type="text"]'
    );

    getSingleLaunch(singleLaunchInput.value)
      .then((response) => {
        divIspis.innerHTML = "";
        divIspis.appendChild(Launch(response.data));
      })
      .catch((error) => {
        divIspis.innerHTML = "";
        errorMsg.innerText = "";
        errorMsg.innerText = "Wrong flight number";
        errorMsg.classList.add("show-message");
        inputText.style.backgroundColor = " #dd000088";
        return console.log(error.response);
      });
  });

  return divForm;
};

export default LaunchId;
