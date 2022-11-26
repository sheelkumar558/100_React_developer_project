let item = document.getElementById("items");
let data = JSON.parse(localStorage.getItem("cart")) || [];
let count = document.getElementById("cart_count");
showData(data);
function showData(data) {
  item.innerHTML = "";
  data?.map((e, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    let div1 = document.createElement("div");

    let name = document.createElement("h3");
    let image = document.createElement("img");
    let price = document.createElement("p");
    let category = document.createElement("p");
    let brand = document.createElement("p");
    let addTo = document.createElement("button");
    addTo.textContent = "Remove";
    addTo.setAttribute("class", "remove");
    addTo.addEventListener("click", () => remove(i));
    name.textContent = e.title;
    image.src = e.image;
    price.textContent = e.price;
    category.textContent = e.category;
    brand.textContent = e.brand;
    div1.append(image);

    div.append(div1, name, price, category, brand, addTo);
    item.append(div);
  });
}

function remove(i) {
  data.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  showData(data);
  cartCount(data);
}

function cartCount(data) {
  console.log(data);
  localStorage.setItem("cart", JSON.stringify(data));
  count.innerHTML = data.length;
}

cartCount(data);

function checkout() {
  let name = document.getElementById("name").value;
  alert(`${name}, your order is successful!`);
}
