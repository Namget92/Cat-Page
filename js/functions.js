import { main, pageNumber, h2, section } from "./index";

function disableOrNot() {
  if (pageNumber === 0) {
    document.querySelector(".previous").disabled = true;
  } else {
    document.querySelector(".previous").disabled = false;
  }
}

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

export { disableOrNot, removeCats, removeLoading, loading };
