//Pretraga korisnika po unosu sa pocetka stringa
renderUser(korisnici.filter(korisnik => korisnik.ime.substring(0, inputSearch.value.length) === inputSearch.value))
