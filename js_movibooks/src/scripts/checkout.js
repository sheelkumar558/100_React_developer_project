var amount = localStorage.getItem("amount");
let container = document.getElementById("movie");
var amo = document.getElementById("wallet");
let movieDetailes = JSON.parse(localStorage.getItem("movieData")) ?? [];
showData(movieDetailes);
async function showData(data) {
  container.innerHTML = "";
  try {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = data.Poster;
    let name = document.createElement("h3");
    name.textContent = data.Title;
    div.append(img, name);
    container.append(div);
  } catch (error) {
    console.log(error);
  }
  amo.innerHTML = amount;
}

function checkoutFun() {
  amount = localStorage.getItem("amount");
  let seats = Number(document.getElementById("number_of_seats").value);
  let add = Math.floor(amount - 100 * seats);

  if (add >= 0) {
    localStorage.setItem("amount", Number(add));
    amo.innerHTML = add;
    document.getElementById("booking_status").innerText = "Booking Successful!";
  } else {
    document.getElementById("booking_status").innerText =
      "Insufficient Balance!";
  }
}
