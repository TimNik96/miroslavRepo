const Loader = () => {
  const divLoader = document.createElement("div");
  divLoader.classList.add("loader");
  divLoader.innerHTML = `
  <div class="rocket">
            <img src="../assets/images/rocket-svgrepo-com.svg" alt="" />
          </div>`;
  return divLoader;
};
export default Loader;
