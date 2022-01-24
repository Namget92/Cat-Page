import { disableOrNot, removeCats, removeLoading, loading } from "./functions";

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const main = document.querySelector("main");
const section = document.querySelector("section");
const p = document.querySelector(".p");
const h2 = document.querySelector("h2");
let pageNumber = 0;
p.textContent = `Page: ${pageNumber}`;

next.addEventListener("click", () => {
  pageNumber++;
  p.textContent = `Page: ${pageNumber}`;
  document.querySelector(".previous").disabled = true;
  document.querySelector(".next").disabled = true;
  removeCats();
  loading();
  getNewCats();
});

previous.addEventListener("click", () => {
  if (pageNumber === 0) {
  } else {
  pageNumber--;
  p.textContent = `Page: ${pageNumber}`;
  removeCats();
  loading();
  getNewCats();
}
});

let i = 0;
if (i === 0) {
  i++;
  getNewCats();
}

async function getNewCats() {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=12&page=${pageNumber}&order=Asc`,
      {
        headers: {
          "x-api-key": "cf5a8e68-6696-417f-a27b-c1b3cc34d299",
        },
      }
    );

    const data = await response.json();
    document.querySelector(".previous").disabled = false;
    document.querySelector(".next").disabled = false;

    if (!response.ok) {
      h2.textContent = "Something went wrong while trying to fetch data...";
    }

    removeLoading();

    h2.textContent = "";

    disableOrNot();

    for (let index = 0; index < 12; index++) {
      const img = document.createElement("img");
      img.classList.add("cat");
      img.src = data[index].url;
      main.append(img);
    }
  } catch (error) {
    h2.textContent = "Something went wrong while trying to fetch data...";
    document.querySelector(".previous").disabled = false;
    document.querySelector(".next").disabled = false;
    removeLoading();
  }
}

export { main, pageNumber, h2, section };
