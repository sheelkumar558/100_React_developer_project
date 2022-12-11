var amount = localStorage.getItem("amount");
document.getElementById("wallet").innerHTML = amount || 0;
let container = document.getElementById("movies");

async function searchMovie() {
  try {
    let search = document.getElementById("search");
    let res = await fetch(
      `https://www.omdbapi.com/?s=${search.value}&page=1&apikey=7e63d685`
    );

    let data = await res.json();

    console.log(data);
    return data.Search;
  } catch (error) {
    console.log(error);
  }
}
async function main() {
  let data = await searchMovie();
  if (data === undefined) {
    return false;
  }
  showData(data);
}
async function showData(data) {
  container.innerHTML = "";
  try {
    data.forEach((el) => {
      let div = document.createElement("div");
      div.setAttribute("class", "movie_tab");
      let img = document.createElement("img");
      img.src = el.Poster;
      let name = document.createElement("h3");
      name.textContent = el.Title;
      let btn = document.createElement("button");
      btn.setAttribute("class", "book_now");
      btn.textContent = "Book Now";
      btn.addEventListener("click", () => {
        localStorage.setItem("movieData", JSON.stringify(el));
        location.href = "/checkout.html";
      });
      div.append(img, name, btn);
      container.append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
var timerId;
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    func();
  }, delay);
}
