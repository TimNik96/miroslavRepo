const screenDigitrona = document.querySelector(".screen");
const deleteAll = document.querySelector(".delete-all");
const prethodniBroj = document.querySelector(".prethodni");
const trenutniBroj = document.querySelector(".trenutni");

const onOffFunkcija = () => {
  let timerID;
  let counter = 0;
  let pressHoldEvent = new CustomEvent("pressHold");
  let pressHoldDuration = 60;

  deleteAll.addEventListener("mousedown", pressingDown);
  deleteAll.addEventListener("mouseup", notPressingDown);
  deleteAll.addEventListener("mouseleave", notPressingDown);
  deleteAll.addEventListener("pressHold", onOff);

  function pressingDown() {
    requestAnimationFrame(timer);
  }
  function notPressingDown() {
    cancelAnimationFrame(timerID);
    counter = 0;
  }
  function timer() {
    if (counter < pressHoldDuration) {
      timerID = requestAnimationFrame(timer);
      counter++;
    } else {
      deleteAll.dispatchEvent(pressHoldEvent);
    }
  }
  function onOff() {
    screenDigitrona.classList.toggle("iskljuceno");
  }
};

const pretvoriBroj = (broj) => {
  const stringBroj = broj.toString();
  const integer = parseFloat(stringBroj.split(".")[0]);

  const decimala = stringBroj.split(".")[1];
  let brojZaIspis;
  if (decimala != null) {
    brojZaIspis = `${integer}.${decimala}`;
  } else {
    brojZaIspis = integer;
  }
  //   if (brojZaIspis.length > 13) {
  //     brojZaIspis = brojZaIspis.substr(0, 13);
  //   }
  return brojZaIspis;
};

const updateDisplay = (trenutnaOperacija) => {
  trenutniBroj.value = pretvoriBroj(trenutniBroj.value);

  if (trenutnaOperacija != null) {
    if (
      prethodniBroj.value.charAt(prethodniBroj.value.length - 1) ===
      trenutnaOperacija
    )
      return prethodniBroj.value;

    prethodniBroj.value = `${pretvoriBroj(
      prethodniBroj.value
    )}  ${trenutnaOperacija}`;
  } else prethodniBroj.value = "";
};
const dodajBroj = (broj) => {
  if (broj === "." && trenutniBroj.value.includes("."))
    return trenutniBroj.value;
  if (broj === "0" && trenutniBroj.value === "0")
    return (trenutniBroj.value = "0");
  if (trenutniBroj.value.length > 12) return trenutniBroj.value;

  trenutniBroj.value = trenutniBroj.value.toString() + broj.toString();

  return trenutniBroj.value;
};

const racun = (operacija) => {
  let resenje;
  const trenutni = parseFloat(trenutniBroj.value);
  const prethodni = parseFloat(prethodniBroj.value);

  if (isNaN(prethodni) || isNaN(trenutni)) return;
  else {
    switch (operacija) {
      case "+":
        resenje = prethodni + trenutni;
        break;
      case "-":
        resenje = prethodni - trenutni;
        break;
      case "*":
        resenje = prethodni * trenutni;
        break;
      case "/":
        resenje = prethodni / trenutni;
        break;
      case "%":
        resenje = prethodni % trenutni;
        break;

      default:
        return;
    }
  }

  trenutniBroj.value = resenje;
  operacija = null;
  prethodniBroj.value = "";
};

const funkcije = {
  onOffFunkcija,
  updateDisplay,
  racun,
  dodajBroj,
};

export default funkcije;
