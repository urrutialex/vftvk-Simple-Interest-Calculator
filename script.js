function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear()+parseInt(years);
  var result = document.getElementById("result");

  result.innerHTML =
    "If you deposit" + principal + "," <br>
    "at an interest rate of" + rate + "," <br>
    "You will receive an amount of" + interest + " <br>
    "in the year" + year + "!"

  var principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    principal.focus();
    return false;
  }
}

function updateRate() {
  var rate = document.getElementById("rate").value;
  document.getElementById("rate_span").innerHTML = rate + "%";
}
