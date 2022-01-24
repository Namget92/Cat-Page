const main = document.querySelector("main");
const section = document.querySelector("section");
const h2 = document.querySelector("h2");

function removeCats() {
  main.textContent = "";
}

function loading() {
  if (
    !h2.textContent.includes(
      "Something went wrong while trying to fetch data..."
    )
  ) {
    const img = document.createElement("img");
    img.src = "assets/loading.gif";
    img.classList.add("loading");
    section.append(img);
  }
}

function removeLoading() {
  section.textContent = "";
}

export { removeCats, removeLoading, loading, main, section, h2 };
