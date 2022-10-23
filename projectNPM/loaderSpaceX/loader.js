const body = document.body;

const Loader = () => {
  const divLoader = document.createElement("div");
  divLoader.classList.add("loader");

  const divIks = document.createElement("div");
  divIks.classList.add("iks");
  const divIksTop = document.createElement("div");
  divIksTop.classList.add("iksTop");
  const img = document.createElement("img");
  img.src = "./spaceX.svg";

  divLoader.append(img, divIks, divIksTop);
  return divLoader;
};
let loader = Loader();
body.appendChild(loader);
