let localData = JSON.parse(localStorage.getItem("items")) ?? [];
let items = document.getElementById("cart");

// cartShow();
// function cartShow() {
//   let t = document.getElementById("item_count");
//   t.innerText = localData.length;
//   // console.log("c", cartFood.length);
// }
async function showData(data) {
  items.innerHTML = "";
  try {
    data.forEach((el, index) => {
      //   console.log(el);
      let div = document.createElement("div");
      div.setAttribute("class", "item");
      let image = document.createElement("img");
      image.setAttribute("id", "img");
      image.src = el.image;
      let price = document.createElement("p");
      price.innerText = el.price;
      let name = document.createElement("p");
      name.innerText = el.name;
      let button = document.createElement("button");
      button.setAttribute("class", "remove");
      button.innerText = "Remove";
      button.addEventListener("click", () => {
        removeFun(index);
      });
      div.append(image, name, price, button);
      items.append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
showData(localData);
function removeFun(i) {
  localData.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(localData));
  showData(localData);
}
window.addEventListener("click", showTotal);
function showTotal() {
  let total = localData.reduce((t, e) => {
    return t + e.price;
  }, 0);

  document.getElementById("cart_total").innerText = total;
}
showTotal();
