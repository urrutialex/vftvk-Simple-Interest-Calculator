document.title = 'Web App – Simple Interest Calculator';
var yearing = new Date().getFullYear();
var drip = document.getElementById("years");
var slider = document.getElementById("rate");
var principal = document.getElementById("principal");
var output = document.getElementById("dum");
var percent = "%";
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = slider.value;
}
//Formula for Interest Rate is Final = Amount(1+Interest Rate*No. of Years)
function compute() {
  const p = principal.value;
  const r = slider.value / 100;
  const t = drip.value;
  const interest = p * r * t;
  const needed = slider.value;
  if (p <= 0) {
  alert('Please enter a positive number.')
  principal.focus();
  }
  if (p.length = 0) {
  alert('Please enter a positive number.')
  }
  yearee = parseInt(yearing) + parseInt(t);
  alert('If you deposit ' + p + ' at an interest rate of ' + needed + percent + ' you will recieve an amount of ' + interest + ' in the year ' + yearee + '.');
}
