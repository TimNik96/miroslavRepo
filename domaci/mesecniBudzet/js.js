const ukupanBudzet = document.querySelector("#ukupanBudzet");
const ispisUkupnogRashoda = document.querySelector(" #ispisRashod");
const ispisUkupnogPrihoda = document.querySelector("#ispisPrihod");
const ukupanRashodProcenat = document.querySelector("#ukupanRashodProcenat");
const select = document.querySelector("#plusMinus");
const inputOpis = document.querySelector('[type="text"]');
const inputIznos = document.querySelector('[type="number"]');
const inputSubmit = document.querySelector('[type="submit"]');
const form = document.querySelector("form");
const divIspisPrihodaRashoda = document.querySelector("#ispisi");
const ispis = document.querySelector("#ispisi");
const ispisiPrihoda = document.querySelector("#ispisiPrihoda");
const ispisiRashoda = document.querySelector("#ispisiRashoda");

function percentage(partialValue, totalValue) {
  return ((100 * partialValue) / totalValue).toFixed(3);
}

let nizPrihoda = [];
let nizRashoda = [];
let ukupanPrihodaBroj = 0;
let ukupanRashodBroj = 0;
let ukupno = 0;

const renderBrojeva = () => {
  let ukupanPrihodaBroj = 0;
  let ukupanRashodBroj = 0;
  nizPrihoda.forEach((element) => {
    ukupanPrihodaBroj += element.iznos;
  });
  nizRashoda.forEach((element) => {
    ukupanRashodBroj += element.iznos;
  });
  ukupno = ukupanPrihodaBroj - ukupanRashodBroj;

  let ukupanRashodPosto = percentage(ukupanRashodBroj, ukupanPrihodaBroj);

  ispisUkupnogPrihoda.textContent = ` + ${ukupanPrihodaBroj}`;

  ispisUkupnogRashoda.textContent = ` - ${ukupanRashodBroj}`;

  ukupanRashodProcenat.textContent = `${ukupanRashodPosto} %`;

  ukupanBudzet.textContent = `${ukupno}`;
};
const renderPrihoda = (divIspisPrihoda, nizPrihoda) => {
  nizPrihoda.forEach((element) => {
    const divIspisi = document.createElement("div");
    divIspisi.classList.add("divPrihodi");
    const pOpis = document.createElement("p");
    pOpis.textContent = element.opis;
    pOpis.classList.add("nazivPrihoda");
    pOpis.classList.add("mb-0");
    const pIznos = document.createElement("p");
    pIznos.textContent = `+ ${element.iznos}`;
    pIznos.classList.add("valuePrihoda");
    pIznos.classList.add("mb-0");
    const divBtns = document.createElement("div");
    divBtns.classList.add("d-flex", "w-50", "justify-content-around");
    const obrisi = document.createElement("button");
    obrisi.classList.add("deleteBtn");
    obrisi.textContent = "Obrisi";
    const izmeni = document.createElement("button");
    izmeni.textContent = "Izmeni";
    izmeni.classList.add("izmeniBtn");
    divIspisi.addEventListener("mouseover", (e) => {
      obrisi.classList.add("vidljivost");
      izmeni.classList.add("vidljivost");
    });
    divIspisi.addEventListener("mouseout", (e) => {
      obrisi.classList.remove("vidljivost");
      izmeni.classList.remove("vidljivost");
    });

    obrisi.addEventListener("click", (e) => {
      nizPrihoda.splice(
        nizPrihoda.findIndex(
          (f) => f.opis === e.target.parentElement.children[0].textContent
        ),
        1
      );

      ispisiPrihoda.innerHTML = "<h2>PRIHODI</h2>";
      renderPrihoda(ispisiPrihoda, nizPrihoda);
      ispisiRashoda.innerHTML = "<h2>RASHODI</h2>";
      renderBrojeva();
      renderRashoda(ispisiRashoda, nizRashoda);
    });
    izmeni.addEventListener("click", (e) => {
      nizPrihoda.splice(
        nizPrihoda.findIndex(
          (f) => f.opis === e.target.parentElement.children[0].textContent
        ),
        1
      );

      ispisiPrihoda.innerHTML = "<h2>PRIHODI</h2>";
      renderPrihoda(ispisiPrihoda, nizPrihoda);
      ispisiRashoda.innerHTML = "<h2>RASHODI</h2>";
      renderBrojeva();
      renderRashoda(ispisiRashoda, nizRashoda);

      select.value = "plus";
      inputOpis.value = element.opis;
      inputIznos.value = element.iznos;
    });
    divBtns.append(izmeni, obrisi);
    divIspisi.append(pOpis, pIznos, divBtns);
    divIspisPrihoda.appendChild(divIspisi);
  });
  renderBrojeva();
};
const renderRashoda = (divIspisRashoda, nizRashoda) => {
  nizRashoda.forEach((element) => {
    const divIspisi = document.createElement("div");
    divIspisi.classList.add("divRashodi");
    const pOpis = document.createElement("p");
    pOpis.textContent = element.opis;
    pOpis.classList.add("nazivRashoda");
    pOpis.classList.add("mb-0");
    const pIznos = document.createElement("p");
    pIznos.textContent = `- ${element.iznos}`;
    pIznos.classList.add("valueRashoda");
    pIznos.classList.add("mb-0");
    const divBtns = document.createElement("div");
    divBtns.classList.add("d-flex", "w-50", "justify-content-around");
    const obrisi = document.createElement("button");
    obrisi.classList.add("deleteBtn");
    obrisi.textContent = "Obrisi";
    const izmeni = document.createElement("button");
    izmeni.textContent = "Izmeni";
    izmeni.classList.add("izmeniBtn");
    divIspisi.addEventListener("mouseover", (e) => {
      obrisi.classList.add("vidljivost");
      izmeni.classList.add("vidljivost");
    });
    divIspisi.addEventListener("mouseout", (e) => {
      obrisi.classList.remove("vidljivost");
      izmeni.classList.remove("vidljivost");
    });
    let ukupanPrihodbrBR = 0;
    nizPrihoda.forEach((element) => {
      ukupanPrihodbrBR += element.iznos;
    });

    const pProcenat = document.createElement("p");
    pProcenat.classList.add("rashodProcenat");
    pProcenat.classList.add("mb-0");
    pProcenat.textContent = `${percentage(element.iznos, ukupanPrihodbrBR)} %`;

    obrisi.addEventListener("click", (e) => {
      nizRashoda.splice(
        nizRashoda.findIndex(
          (f) => f.opis === e.target.parentElement.children[0].textContent
        ),
        1
      );

      ispisiRashoda.innerHTML = "<h2>RASHODI</h2>";
      renderBrojeva();
      renderRashoda(ispisiRashoda, nizRashoda);
    });
    izmeni.addEventListener("click", (e) => {
      nizRashoda.splice(
        nizRashoda.findIndex(
          (f) => f.opis === e.target.parentElement.children[0].textContent
        ),
        1
      );

      ispisiRashoda.innerHTML = "<h2>RASHODI</h2>";

      renderRashoda(ispisiRashoda, nizRashoda);

      select.value = "minus";
      inputOpis.value = element.opis;
      inputIznos.value = element.iznos;
    });

    divBtns.append(izmeni, obrisi);

    divIspisi.append(pOpis, pIznos, pProcenat, divBtns);
    divIspisRashoda.appendChild(divIspisi);
  });
  renderBrojeva();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputOpis.value.length > 20) {
    alert("predugacak Opis");
    return;
  }
  if (inputIznos.value < 0) {
    alert("ne moze biti manje od nula");
    return;
  }

  if (select.value == "plus") {
    ukupanPrihodaBroj += +inputIznos.value;
    if (nizPrihoda.find((e) => e.opis === inputOpis.value)) {
      alert("Prihod sa ovim nazivom vec postoji");
      return;
    }
    const prihodi = {
      opis: inputOpis.value,
      iznos: +inputIznos.value,
    };

    nizPrihoda.push(prihodi);
  }
  if (select.value == "minus") {
    const rashodi = {
      opis: inputOpis.value,
      iznos: +inputIznos.value,
    };

    nizRashoda.push(rashodi);
  }

  ispisiPrihoda.innerHTML = "<h2>PRIHODI</h2>";
  ispisiRashoda.innerHTML = "<h2>RASHODI</h2>";

  renderBrojeva();

  renderPrihoda(ispisiPrihoda, nizPrihoda);
  renderRashoda(ispisiRashoda, nizRashoda);
  form.reset();
});
