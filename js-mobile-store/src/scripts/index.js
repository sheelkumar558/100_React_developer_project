// document.getElementById("submit").addEventListener("click", formFun);
let mobile_data = JSON.parse(localStorage.getItem("mobile_data")) || [];

function formFun(event) {
  event.preventDefault();
  let data = {
    name: document.getElementById("mobile_name").value,
    brand: document.getElementById("mobile_brand").value,
    price: Number(document.getElementById("mobile_price").value),
    image: document.getElementById("mobile_image").value,
  };
  mobile_data.push(data);
  localStorage.setItem("mobile_data", JSON.stringify(mobile_data));
}
