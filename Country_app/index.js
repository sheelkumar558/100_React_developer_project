var form = document.querySelector("form").addEventListener("submit", postData);

async function postData(event) {
  event.preventDefault();
  console.log("hello");
  var country = document.getElementById("country").value;
  var city = document.getElementById("city").value;
  var population = document.getElementById("population").value;

  let res = await fetch(
    "https://json-server-mock-5-masai.herokuapp.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: country,
        city: city,
        population: population,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
}
getData();
async function getData() {
  let res = await fetch("https://json-server-mock-5-masai.herokuapp.com/posts");
  let data = await res.json();
  console.log(data);
  display(data);
  return data;
}

function display(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((item) => {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = item.id;
    var td2 = document.createElement("td");
    td2.textContent = item.country;
    var td3 = document.createElement("td");
    td3.textContent = item.city;
    var td4 = document.createElement("td");
    td4.textContent = item.population;
    var td5 = document.createElement("td");
    td5.textContent = "Edit";
    td5.setAttribute("class", "edit");
    td5.addEventListener("click", function () {
      edit(item);
    });
    var td6 = document.createElement("td");
    td6.setAttribute("class", "delete");
    td6.textContent = "Delete";
    td6.addEventListener("click", deleteData);
    row.append(td1, td2, td3, td4, td5, td6);
    var tbody = document.querySelector("tbody");
    tbody.append(row);
    function deleteData(event) {
      event.target.parentNode.remove();
      deleteFromDB(item.id);
    }
  });
}

async function deleteFromDB(id) {
  let res = await fetch(
    "https://json-server-mock-5-masai.herokuapp.com/posts/" + id,
    {
      method: "DELETE",
    }
  );
  let data = await res.json();
  console.log(data);
}
async function edit(item) {
  document.getElementById("inputC").value = item.country;
  document.getElementById("inputCity").value = item.city;
  document.getElementById("inputP").value = item.population;
  document.getElementById("idd").value = item.id;
  document.querySelector(".editForm").style.display = "block";
}
function update() {
  let id = document.getElementById("idd").value;
  let cont = document.getElementById("inputC").value;
  let city = document.getElementById("inputCity").value;
  let pop = document.getElementById("inputP").value;

  let res = fetch(
    "https://json-server-mock-5-masai.herokuapp.com/posts/" + id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: cont,
        city: city,
        population: pop,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
  document.querySelector(".editForm").style.display = "none";
}

async function sort() {
  let val = document.getElementById("sort").value;
  let res = await fetch("https://json-server-mock-5-masai.herokuapp.com/posts");
  let data = await res.json();

  if (val == "asc") {
    data.sort(function (a, b) {
      return a.population - b.population;
    });
  } else {
    data.sort(function (a, b) {
      return b.population - a.population;
    });
  }
  console.log(data);
  display(data);
}
function filter() {
  let val = document.getElementById("filter").value;
  let res = fetch("https://json-server-mock-5-masai.herokuapp.com/posts");
  res
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let filtered = data
        .filter((item) => {
          return item.country.includes(val);
        })
        .sort(function (a, b) {
          return a.population - b.population;
        })
        .reverse();
      console.log(filtered);
      display(filtered);
    })
    .catch((err) => {
      console.log(err);
    });
}