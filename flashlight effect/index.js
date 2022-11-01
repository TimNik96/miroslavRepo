const cardsWrapper = document.getElementById("cards");
const card = document.querySelectorAll(".card");

cardsWrapper.onmousemove = (e) => {
  card.forEach((element) => {
    const rect = element.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  });
};
