// Write all the JS Code related to Home Page Here
let main = document.getElementsByTagName("tbody");
let storeData = JSON.parse(localStorage.getItem("hireData")) || [];
// console.log(main);
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    name: document.getElementById("name").value,
    job: document.getElementById("job").value,
    department: document.getElementById("department").value,
    salary: Number(document.getElementById("salary").value),
    experience: document.getElementById("experience").value,
    email: document.getElementById("email").value,
  };

  storeData.push(formData);

  localStorage.setItem("hireData", JSON.stringify(storeData));
  showData(storeData);
  totalSalary();
});
showData(storeData);

function showData(storeData) {
  main[0].innerHTML = "";
  storeData.forEach((e, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("button");
    let td8 = document.createElement("td");
    if (e.experience > 5) {
      td8.innerText = "Senior";
    } else {
      td8.innerText = "Junior";
    }
    td1.textContent = e.name;
    td2.textContent = e.job;
    td3.textContent = e.department;
    td4.textContent = e.experience;
    td5.textContent = e.salary;
    td6.textContent = e.email;
    td7.textContent = "Delete";
    td7.setAttribute("class", "remove");
    td7.addEventListener("click", () => {
      removeData(index);
    });
    document.getElementById("total-employee").innerHTML = storeData.length;
    tr.append(td1, td2, td3, td5, td6, td4, td8, td7);
    main[0].append(tr);
  });
}
document.getElementById("total-employee").innerHTML = storeData.length;
function removeData(i) {
  storeData.splice(i, 1);
  localStorage.setItem("hireData", JSON.stringify(storeData));
  showData(storeData);
  totalSalary();
}

function totalSalary() {
  let total = storeData.reduce((a, c) => {
    return a + c.salary;
  }, 0);
  document.getElementById("total-salary").innerHTML = total;
}
totalSalary();
