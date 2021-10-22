
   
function compute()
{
    let principal = document.getElementById("principal").value;
   if (principal<=0){window.alert("Enter a positive number");}
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let actual_year = years + 2021;
    document.getElementById("result").innerHTML =  "If you deposit <mark>" + principal + "</mark>,<br />" +
        "at an interest rate of <mark>" + rate + "</mark>.<br />" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br />" +
        "in the year <mark>" + actual_year + "</mark>";
}
function range_display()
{
    let rate = document.getElementById("rate").value;
    document.getElementById("range").innerText = rate;
}    
