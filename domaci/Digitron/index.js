import funkcije from "./funkcije.js";

const prethodniBroj = document.querySelector(".prethodni");
const trenutniBroj = document.querySelector(".trenutni");
const brojBtn = document.querySelectorAll(".broj");
const deleteAll = document.querySelector(".delete-all");
const deleteLast = document.querySelector(".delete-last");
const operacijaBtn = document.querySelectorAll(".operacija");
const jednakoBtn = document.querySelector(".jednako");
const negiranjeBtn = document.querySelector(".negiranje");

let trenutnaOperacija; //undefined

resetCalculator(); // trenutnaOperacija = null

funkcije.onOffFunkcija(); // holding the C btn to turn on/off the screen

function resetCalculator() {
  trenutniBroj.value = "0";
  prethodniBroj.value = "";
  trenutnaOperacija = null;
}
const odabirOperacije = (operation) => {
  if (trenutniBroj.value === "") return;
  if (prethodniBroj.value !== "") {
    funkcije.racun(trenutnaOperacija);
  }
  trenutnaOperacija = operation;
  prethodniBroj.value = trenutniBroj.value;
  trenutniBroj.value = "0";
};

brojBtn.forEach((broj) => {
  broj.addEventListener("click", () => {
    trenutniBroj.value = funkcije.dodajBroj(broj.innerText);
    funkcije.updateDisplay(trenutnaOperacija);
  });
});

operacijaBtn.forEach((operacijaDugme) => {
  operacijaDugme.addEventListener("click", () => {
    if (trenutnaOperacija !== null) return;
    odabirOperacije(operacijaDugme.innerText);
    funkcije.updateDisplay(trenutnaOperacija);
  });
});

jednakoBtn.addEventListener("click", (e) => {
  funkcije.racun(trenutnaOperacija);
  trenutnaOperacija = null;
  funkcije.updateDisplay(trenutnaOperacija);
});

negiranjeBtn.addEventListener("click", (e) => {
  trenutniBroj.value = trenutniBroj.value * -1;
  funkcije.updateDisplay(trenutnaOperacija);
});

deleteAll.addEventListener("click", resetCalculator);

deleteLast.addEventListener("click", (e) => {
  trenutniBroj.value = trenutniBroj.value.toString().slice(0, -1);
  if (trenutniBroj.value.length < 1) return (trenutniBroj.value = "0");
});
