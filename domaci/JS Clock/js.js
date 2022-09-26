const divCasovnik = document.querySelector(".casovnik");
const sekunda = document.querySelector(".sekunda");
const minuta = document.querySelector(".minuta");
const sat = document.querySelector(".sat");

const time = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let dobaDana = "AM";

  let sec = seconds * 6;
  let min = minutes * 6;
  let hr = hours * 30 + minutes / 2;

  sekunda.style.transform = `rotate(${sec}deg)`;
  minuta.style.transform = `rotate(${min}deg)`;
  sat.style.transform = `rotate(${hr}deg)`;

  if (hours > 12) {
    dobaDana = "PM";
    hours -= 12;
  }

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  divCasovnik.innerHTML = `<span class="sati">${hours}</span>:<span class="minuti">${minutes}</span>:<span class="sekundi">${seconds}</span><span class="dobaDana"> ${dobaDana}</span>`;

  return setTimeout(() => {
    time();
  }, 1000);
};

time();
