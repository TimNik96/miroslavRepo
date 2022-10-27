const body = document.body;

const Loader = () => {
  const divLoader = document.createElement("div");
  divLoader.classList.add("loader");

  divLoader.innerHTML = `"<div class="iks"></div>
      <div class="iksTop"></div>
      <svg
        width="300"
        height="200"
        viewBox="0 0 814 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="left-to-right">
            <stop offset="0" stop-color="#A7A9AC">
              <animate
                repeatCount="indefinite"
                dur="2.5s"
                attributeName="offset"
                fill="freeze"
                from="0"
                to="1"
              />
            </stop>
            <stop offset="0" stop-color="#f0f8ff00">
              <animate
                dur="2.5s"
                attributeName="offset"
                fill="freeze"
                from="0"
                to="1"
                repeatCount="indefinite"
                timing="ease"
              />
            </stop>
          </linearGradient>
        </defs>

        <path
          d="M85.8494 307.246H6.77895L0 296.702C53.4683 244.743 292.939 23.3447 813.301 0C813.302 0 377.282 15.0602 85.8494 307.246Z"
          fill="url(#left-to-right)"
        />
      </svg>"`;

  return divLoader;
};

let loader = Loader();
body.appendChild(loader);
