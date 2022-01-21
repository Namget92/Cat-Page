const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const main = document.querySelector("main");
const p = document.querySelector(".p");
let pageNumber= 0;
p.textContent = `Page: ${pageNumber}`;



async function getNewCats() {
    const response = 
    await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&page=${pageNumber}&order=Asc`, {
        headers: {
          "x-api-key": "cf5a8e68-6696-417f-a27b-c1b3cc34d299",
        },
      });
      const data = await response.json();
      for (let index = 0; index < 12; index++) {
        const img = document.createElement("img");
        img.classList.add("cat");
        img.src = data[index].url;
        main.append(img);
      }
    }

let i = 0;
if (i === 0) {
    i++;
    getNewCats();
}

function removeCats () {
    main.textContent = "";
}

next.addEventListener("click", () => {
    pageNumber++;
    p.textContent = `Page: ${pageNumber}`;
    removeCats();
    getNewCats();
})

previous.addEventListener("click", () => {
    if (pageNumber === 0) {
    } else { 
        pageNumber--;
        p.textContent = `Page: ${pageNumber}`;
        removeCats();
        getNewCats();
    }
   
})