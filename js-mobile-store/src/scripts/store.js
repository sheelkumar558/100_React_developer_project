let main = document.getElementById("mobile_list");
let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
//console.log(data);

function showData(data) {
  main.innerHTML = "";
  data.forEach((el, index) => {
    // console.log(el.name);
    let div = document.createElement("div");
    div.setAttribute("class", "mobile");
    let image = document.createElement("img");
    image.src = el.image;
    let brand = document.createElement("p");
    brand.innerText = ` ${el.brand}`;
    let name = document.createElement("p");
    name.innerText = `${el.name}`;
    let price = document.createElement("p");
    price.innerText = el.price;
    let button = document.createElement("button");
    button.innerText = "remove";
    button.setAttribute("class", "remove");
    button.addEventListener("click", () => removeFun(index));
    div.append(image, brand, name, price, button);
    main.append(div);
  });
}
showData(data);
function removeFun(i) {
  data.splice(i, 1);
  localStorage.setItem("mobile_data", JSON.stringify(data));
  showData(data);
}
document.getElementById("sort_lth").addEventListener("click", ascFun);
function ascFun() {
  data.sort((a, b) => {
    return a.price - b.price;
  });
  showData(data);
}
document.getElementById("sort_htl").addEventListener("click", dascFun);
function dascFun() {
  data.sort((a, b) => {
    return b.price - a.price;
  });
  showData(data);
}
