import { removeCats, removeLoading, loading, main, section, h2 } from "./functions";

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const p = document.querySelector(".p");
let pageNumber = 0;
p.textContent = `Page: ${pageNumber}`;

function disableOrNot() {
  if (pageNumber === 0) {
    document.querySelector(".previous").disabled = true;
  } else {
    document.querySelector(".previous").disabled = false;
  }
}

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
  document.querySelector(".previous").disabled = true;
  document.querySelector(".next").disabled = true;
  removeCats();
  loading();
  getNewCats();
}
});

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

getNewCats();

export { main, pageNumber, h2, section };
