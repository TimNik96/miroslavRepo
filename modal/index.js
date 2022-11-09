import Modal from "./modal.js";

let naslov = "Single Launch";
let labelText = "Enter launch number:";

document.body.appendChild(Modal(naslov, labelText));

const activateModalBtn = document.querySelector(".activate");
const divModalWrapper = document.querySelector(".modal-wrapper");
const divModal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const inputLaunchNumber = document.querySelector(".modal main input");
const pModalErrorMessage = document.querySelector(".errorMsg");
const sendBtn = document.querySelector(".modal footer button");

activateModalBtn.addEventListener("click", () => {
  divModalWrapper.style.display = "flex";
  // setTimeout(() => {
  divModalWrapper.style.backgroundColor = "#00000088";
  divModal.style.opacity = "1";
  // }, 0)
});

closeBtn.addEventListener("click", () => {
  divModalWrapper.classList.remove("show");
  divModalWrapper.style.display = "none";
  divModal.style.opacity = "0";
});

sendBtn.addEventListener("click", () => {
  if (inputLaunchNumber.value === "") {
    pModalErrorMessage.textContent = "Add launch number";

    setTimeout(() => {
      pModalErrorMessage.textContent = "";
    }, 2000);

    return;
  }

  console.log(inputLaunchNumber.value);
});
