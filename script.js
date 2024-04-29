const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

const contentData = [
    { span: "movie-list-item-title", img: "movie-list-item-img", p: "movie-list-item-desc" },
    { span: "movie-list-item-title", img: "movie-list-item-img", p: "movie-list-item-desc" },
    { span: "movie-list-item-title", img: "movie-list-item-img", p: "movie-list-item-desc" },
    { span: "movie-list-item-title", img: "movie-list-item-img", p: "movie-list-item-desc" }
];

function searchContent() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");

    // Clear previous search results
    searchResults.innerHTML = "";

    // Filter content data based on search term
    const filteredData = contentData.filter(item => item.toLowerCase().includes(searchTerm));

    // Display search results
    filteredData.forEach(result => {
        const resultElement = document.createElement("p");
        resultElement.textContent = result;
        searchResults.appendChild(resultElement);
    });
}

// Attach event listener to search input
document.getElementById("searchInput").addEventListener("input", searchContent);