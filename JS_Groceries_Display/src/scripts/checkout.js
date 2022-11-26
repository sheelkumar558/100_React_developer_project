let order = document.getElementById("order-message");
order.style.visibility = "hidden"; // Hide

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let checkout = new Promise((resolve, reject) => {
    resolve("");
  });
  checkout.then(() => {
    setTimeout(() => {
      order.style.visibility = "visible";
      resolve();
    }, 1000);
    return;
  });
  localStorage.clear();
});
