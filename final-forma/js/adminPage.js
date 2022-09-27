import { renderAdminPage, renderBase } from "./funkcije.js";
const mainIspis = document.querySelector("main");
const buttonDeleteUser = document.querySelector("button");

renderAdminPage(mainIspis);

buttonDeleteUser.addEventListener("click", (e) => {
  let nizKorisnika = JSON.parse(localStorage.getItem("korisnici"));
  for (let i = 0; i < nizKorisnika.length; i++) {
    if (nizKorisnika[i].isMarked) {
      nizKorisnika.splice(i, 1);
      i--;
    }
  }

  localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
  mainIspis.textContent = "";
  renderBase(mainIspis);
  renderAdminPage(mainIspis);
});
