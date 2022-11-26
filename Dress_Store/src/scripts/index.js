let bag = document.getElementById("main_items");
let prev = document.getElementById("previous");
let next = document.getElementById("next");
let page = 1;
let countP = 1;
prev.addEventListener("click", () => goPrev(countP--));
next.addEventListener("click", () => goNext(countP++));
let store = JSON.parse(localStorage.getItem("cart")) || [];
function goNext(val) {
  // console.log(page+val);
  fetchApi(page + val);
}

function goPrev(val) {
  // console.log(page-val);
  fetchApi(page - val);
  // console.log(page,"padf");
  if (page <= 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
}

let count = document.getElementById("cart_count");
fetchApi(page);
async function fetchApi(page) {
  // console.log(page,"p");
  let res = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`
  );
  let data = await res.json();
  // console.log(data.data);
  show(data.data);
}
// show()

function show(data) {
  bag.innerHTML = "";
  data?.map((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "img1");
    let name = document.createElement("h3");
    let image = document.createElement("img");
    let price = document.createElement("p");
    let category = document.createElement("p");
    let brand = document.createElement("p");
    let addTo = document.createElement("button");
    addTo.textContent = "Add to cart";
    addTo.addEventListener("click", () => addToCart(e));
    addTo.setAttribute("class", "add_to_cart");
    name.textContent = e.title;
    image.src = e.image;
    image.setAttribute("class", "photo");
    price.textContent = e.price;
    category.textContent = e.category;
    brand.textContent = e.brand;
    div1.append(image);

    div.append(div1, name, price, category, brand, addTo);
    bag.append(div);
  });
}

function addToCart(e) {
  store.push(e);
  cartCount(store);
  localStorage.setItem("cart", JSON.stringify(store));
}

function cartCount(store) {
  // console.log(store);
  count.innerHTML = store.length;
}

cartCount(store);
