// 1. Napisati JS funkciju koja za prosleđeni string ispisuje 5 najčešće korišćenih karaktera kao i njihov
// broj ponavljanja:
// Izgled funkcije

// function printCount(str) {
//   let saveCaractersandCounts = [];

//   for (let i = 0; i < str.length; i++) {
//     let count = 0;

//     for (let j = 0; j < str.length; j++) {
//       if (str[i] == str[j] && i > j) {
//         break;
//       }
//       if (str[i] == str[j]) {
//         count++;
//       }
//     }
//     if (count > 0) {
//       let b = { caracter: str[i], counts: count };
//       saveCaractersandCounts.push(b);
//     }
//   }
//   saveCaractersandCounts.sort((a, b) => {
//     return b.counts - a.counts;
//   });

//   console.log(saveCaractersandCounts.slice(0, 5));
// }

// let test = "gfhghellolllaaassssffaffaa";
// printCount(test);

// Primer ispisa za string xxxyyoopc
// x: 3
// y: 3
// o: 2
// p: 1
// c: 1

// 2. Na klik elementa sa klasom swtf-task dodati mu kalsu selected ukoliko je već ne poseduje. U
// selektovanom elementu pronaći atribut(element sa klasom swtf-task-attr) pod nazivom
// IsActive i ukoliko postoji postaviti mu vrednost na true.

// let task = document.querySelectorAll(".swtf-task");
// task.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     item.classList.add("selected");
//     if (item.textContent.includes("IsActive")) {
//       item.querySelector(".attr-value").innerHTML = "true";
//     }
//   });
// });

/* 3. Na hover dugmeta dodati klasu mu hovered, kada se izađe iz stanja haver-a obrisati klasu
hovered. Na klik dugmeta izmeniti boju pozadine elementa sa klasom my-cnt na orange.

<div class="my-cnt">
 <button class="my-btn">
</div> */

// let dugme = document.querySelector(".my-btn");
// let pozadinaDugmeta = document.querySelector(".my-cnt");
// dugme.addEventListener("mouseover", mOver, false);
// dugme.addEventListener("mouseout", mOut, false);

// function mOver() {
//   dugme.classList.add("hovered");
// }
// function mOut() {
//   dugme.classList.remove("hovered");
// }

// let index = 0;

// const colors = ["salmon", "green", "blue", "purple"];

// dugme.addEventListener("click", (event) => {
//   pozadinaDugmeta.style.backgroundColor = colors[index];
//   pozadinaDugmeta.style.color = "white";
//   index = index >= colors.length - 1 ? 0 : index + 1;
// });
