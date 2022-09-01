#Handy_things

sass json settings 

"liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/sass/css",
            "savePathSegmentKeys": null,
            "savePathReplaceSegmentsWith": null
        }
    ],
    "liveSassCompile.settings.includeItems": [
    
    ]

https://mastery.games/flexboxzombies/
https://flexboxfroggy.com/ // gridGarden
https://nicepage.com/website-design/preview/mountain-adventure-19154?device=desktop

https://animista.net/play/basic/rotate-90/rotate-90-horizontal-fwd

https://swiperjs.com/demos
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

https://www.json.org/json-en.html
https://www.xenonstack.com/insights/local-vs-session-storage-vs-cookie

https://michalsnik.github.io/aos/

https://flaviocopes.com/urlsearchparams/

#Domaci_1

1. Napisati funkciju koja vraca imena iz niza koja imaju bar dva slova 'a'.
2. Napisati funkciju koja vraca index karaktera u stringu.
3. Napisati kod koji ispisuje koliko slova ima svaki element niza. (niz stringova je u pitanju)
4. Napisati kod koji vraca da li ima brojeva deljivih sa 11 u rasponu od m do n.
5. Napisati funkciju koja proverava koliko se puta odredjeni element pojavljuje u nizu.
6. Napisati funkciju koja vraca da li odredjeni element postoji u nizu. (Ukoliko postoji, vraca element, u suprotnom vraca poruku)
7. Napisati funkciju koja proverava da li je broj prost.

#Domaci_2

1. Napraviti improvizovanu login aplikaciju. Za ime i prezime uneti vrednosti po zelji koje se proveravaju u nizu u kome se nalaze neki korisnici. Korisnici mogu biti u bilo kom formatu u nizu, kako je lakse piscu.
   Obraditi situacije kada se u promenljive ime ili/i prezime ne upise nista.
2. Napisati funkciju substring.
3. Napisati funkciju koja refaktorise string tako da posle svake tacke treba da se nalazi razmak. Primer: Danas je lep dan.Idemo da setamo. => Danas je lep dan. Idemo da setamo.
4. Napisati kod koji ispisuje broj sa ciframa u obrnutom redosledu kao resenje.
5. Napisati skriptu koja za uneti niz pokemona sa njihovim indexom napada vraca sledeci ispis u konzolu:

		primer niza, imena pokemona mogu bili bilo koja: [[pokemon_1, 55],[pokemon_2, 70],[pokemon_3, 40]]
	
		ispis u konzoli:  pokemon_1: jacina napada je 55
			  	  pokemon_2: jacina napada je 70
			  	  pokemon_3: jacina napada je 40

#Domaci_3

sajt:
	https://drive.google.com/drive/u/0/folders/1cLzKlUyI2OkiDaUzZ7YjCiM4LXgkszH8

1. Izbaciti sve elemente iz niza koji se ponavljaju.
2. Ubaciti 20 elemenata u niz koji se rendom generisu, ali se u nizu ne sme ponoviti element.

#Domaci_4

sajt: 
    https://drive.google.com/drive/folders/1OsmwfIQkviCjClSLoznmReZV8XbyWZ4P
forme:
    https://drive.google.com/drive/folders/1SAgXUGaIIxp9vckX5Unv1oX6r_i8_qSF
animacije: 
    https://drive.google.com/drive/folders/14LzTCelERy3shuU-OxfUKuPYEceWZ6HP

#Domaci_5

#Domaci_6

1. Napisati JS funkciju koja za prosleđeni string ispisuje 5 najčešće korišćenih karaktera kao i njihov
broj ponavljanja:
Izgled funkcije

function printCount(inputStr){
 //code here...
}

Primer ispisa za string xxxyyoopc
x: 3
y: 3
o: 2
p: 1
c: 1

2. Na klik elementa sa klasom swtf-task dodati mu kalsu selected ukoliko je već ne poseduje. U
selektovanom elementu pronaći atribut(element sa klasom swtf-task-attr) pod nazivom
IsActive i ukoliko postoji postaviti mu vrednost na true.

<!-- <div class="swtf-task">
 <p class="swtf-task-text">Lorem ipsum dolor sit amet, consectetur
adipiscing elit</p>
 <div class="swtf-task-attr">
 <p><span class="attr-name">Priority</span> : <span
class="attr-value">1</span><p>
 </div>
 <div class="swtf-task-attr">
 <p><span class="attr-name">IsActive</span> : <span
class="attr-value">false</span><p>
 </div>
</div>
<div class="swtf-task">
 <p class="swtf-task-text">Lorem ipsum dolor sit amet, consectetur
adipiscing elit</p>
<div class="swtf-task-attr">
 <p><span class="attr-name">Priority</span> : <span
class="attr-value">3</span><p>
 </div>
 <div class="swtf-task-attr">
 <p><span class="attr-name">IsActive</span> : <span
class="attr-value">false</span><p>
 </div>
</div>
<div class="swtf-task">
 <p class="swtf-task-text">Lorem ipsum dolor sit amet, consectetur
adipiscing elit</p>
</div>
<div class="swtf-task">
 <p class="swtf-task-text">Lorem ipsum dolor sit amet, consectetur
adipiscing elit</p>
 <div class="swtf-task-attr">
 <p><span class="attr-name">Priority</span> : <span
class="attr-value">5</span><p>
 </div>
 <div class="swtf-task-attr">
 <p><span class="attr-name">IsActive</span> : <span
class="attr-value">false</span><p>
 </div>
</div>
<div class="swtf-task">
 <p class="swtf-task-text">Lorem ipsum dolor sit amet, consectetur
adipiscing elit</p>
</div> -->

3. Na hover dugmeta dodati klasu mu hovered, kada se izađe iz stanja haver-a obrisati klasu
hovered. Na klik dugmeta izmeniti boju pozadine elementa sa klasom my-cnt na orange.

<div class="my-cnt">
 <button class="my-btn">
</div>

#Domaci_7

1. Napisati skriptu koja racuna stepen broja. (U jedan se input unosi osnova, u drugi stepen. U trecem inputu se javlja resenje klikom na dugme)
2. Izracunati faktorijel broja. (U jedan input unosimo broj, u drugom se javlja resenje klikom na dugme)
3. Proveriti klikom na dugme da li uneti username postoji u bazi podataka.(u nizu) Ukoliko postoji, border inputa treba da postane crven, a ukoliko ne postoji, border postaje zelen. (U input se unosi user, taj se input boji)
4. Tekst iz paragrafa je potrebno refaktorisati tako da posle svake tacke treba da se nalazi razmak. Primer: Danas je lep dan.Idemo da setamo. => Danas je lep dan. Idemo da setamo.
5. Napisati kod koji iz inputa kupi broj i ispisuje broj sa ciframa u obrnutom redosledu u drugom inputu kao resenje.(Koristiti dugme) Primer: 1234 => 4321
6. Napraviti par korisnika kao objekte u nizu. Dodati polja po izboru. Zatim ih lepo ispisati na stranici u nekom divu. (potruditi se malo oko stilizovanja)
7. Napisati zadatak koji racuna cenu pizze prema unosu precnika iste. Cena pizze je dinar po kvadratnom centimetru. (Potrebno je imati input za precnik pizze i dugme za vracanje cene u drugom inputu)
8. Korisnike iz 6. zadatka koristiti i ispisati samo one cije ime pocinje na slovo koje se zada u inputu. (Moze se koristiti dugme ili putem Entera, kako god je lakse)
9. Napisati skriptu koja pravi x paragrafa. Svaki paran paragraf ima 30 reci lorem ipsum, a svaki treci ima zelenu boju pozadine.
10. Napraviti igru kamen-papir-makaze u jednu pobedu. (postoji jedan input za unos zeljene opcije, u paragrafu ispod se na klik dugmeta ispisuje pobednik, a u konzoli se ispisuje sta je racunar odabrao. 
    Za opciju koju racunar treba da dobije potrebno je koristiti random())