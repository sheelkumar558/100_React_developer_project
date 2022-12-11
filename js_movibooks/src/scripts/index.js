var sum;
var amount = localStorage.getItem("amount");
function amountFun() {
  amount = localStorage.getItem("amount");
  sum = Number(document.getElementById("amount").value);
  sum += Number(amount);
  localStorage.setItem("amount", sum);
  document.getElementById("wallet").innerHTML = sum;
}
document.getElementById("wallet").innerHTML = amount || 0;
