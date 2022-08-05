const h1 = document.createElement("h1");
const body = document.body;
h1.innerHTML = "SEO praksa";
const p = document.createElement("p");
p.innerHTML = "Naziv Knjige, 10<sup>th</sup> izdanje";
const div1 = document.createElement("div");
div1.innerHTML =
  "<p>SEO<i>Search Engine Optimization</i> predstavlja marketinsku tehniku koja sa odnosi na optimizaciju sajta za pretrazivace. <strong> Cilj SEO tehnika je da se sajt prikaze u rezultatima pretrage, sto blize vrhu.</strong></p>";

const div2 = document.createElement("div");
div2.innerHTML =
  "<h2>Potrebe korisnika i ciljevi pretrazivaca</h2><p><strong>Korisnici zele da sto efikasnije pronadju informaciju koja ihzanima.</strong>To znaci, da uz sto manje napora dodju do web sajta koji ih interesuje.Web pretrazivaci, omogucavaju da unosom jednog ili vise termina (kljucnihreci), korisnik dobije listu sajtova koji odgovaraju njegovom upitu.</p><p>Cilj web pretrazivaca je da na sto kvalitetniji nacin zadovolje potrebekorisnika, posto i sami zaradjuju od korisnickih pretraga direktno(prikazujuci reklame unutar svojih rezultata) ili indirektno (nudecidodatne usluge).</p><p>Da bi korisnici bili zadovoljni, web pretrazivac pokusava da na najboljinacin &quot;pogodi&quot;sta su zeleli. Algoritam vrsi procenu koji rezultati sunajrelevantniji za datu pretragu i tako ih i poredja na stranici sarezultatima. Odavno je poznato da su korisnici &quot;	lenji&quot;	 - retko ko zeli da&quot;	istrazuje&quot;	 kroz stranice i stranice rezultata. Znajuci to, Google i ostali pretrazivaci ulazu ogromne napore da na vrhu stranice prikazunajbolje rezultate.</p>";

const div3 = document.createElement("div");
div3.innerHTML =
  "<h2>Ciljevi vlasnika sajta</h2><p><em>Nije tajna da vlasnici sajtova zele posecenost.</em>Zelimo da korisnici dodju nas sajt iz razlicitih razloga - da saznaju zanasu ponudu, da bismo zaradili od reklamiranja, ili da bismo imalimogucnost prodaje naseg proizvoda ili usluge. U najvecem broju slucajeva,korisnici dolaze do sajtova koriscenjem web pretrazivaca. Samim tim zelimo da se nas sajt nadje u rezultatima pretrage.</p><p>Posto je ponasanje korisnika opste poznato, vlasnici sajtova s pravom pocinju da razmisljaju o tome kako da svoj sajt &quot;doteraju&quot; na vrh pretrage. Svaka aktivnost koja vodi poboljsanju ranga sajta na stranici sa rezultatima, spada u SEO.</p><hr />";
const footer = document.createElement("footer");
footer.innerHTML =
  "<h3>Kontakt <sub>vazno</sub></h3><address>Nasa kompanija <br />Ime Ulica, br. 49 <br />Beograd, <br />Serbia.</address>";
body.appendChild(h1);
body.appendChild(p);
body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);
body.appendChild(footer);
div1.classList.add("my-class");
div2.classList.add("my-class");
div3.classList.add("my-class");
body.style.backgroundColor = "gray";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
