// The items should be stored in local storage with key :- “items”
let localData = JSON.parse(localStorage.getItem("items")) ?? [];
fetchApi();
async function fetchApi() {
  try {
    let fetch_data = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries"
    )
      .then((d) => d.json())
      .then((data) => {
        return data.data;
      });

    showData(fetch_data);
  } catch (error) {
    console.log(error);
  }
}

let items = document.getElementById("items");

async function showData(data) {
  items.innerHTML = "";
  try {
    data.forEach((el) => {
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
      button.setAttribute("class", "add_to_cart");
      button.innerText = "Add To Cart";
      button.addEventListener("click", () => {
        localData.push(el);
        localStorage.setItem("items", JSON.stringify(localData));
        cartAdd(localData);
      });
      div.append(image, name, price, button);
      items.append(div);
    });
  } catch (error) {
    console.log(error);
  }
}
let cart = document.getElementById("item_count");
function cartAdd(data) {
  cart.innerText = data.length;
}
cartAdd(localData);
