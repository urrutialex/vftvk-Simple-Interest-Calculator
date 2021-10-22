function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var future_year = year + Number(years)
    
    document.getElementById("principal").value;
    document.getElementById("result").innerHTML =
    "If you deposit <mark>" + principal + "</mark>,<br />" +
    "at an interest rate of <mark>" + rate + "</mark>.<br />" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br />" +
    "in the year <mark>" + future_year + "</mark>"
    
}

function updateRate() 
{
    var rate_val = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function valid()
{
    amount = document.getElementById("principal").value;

    if (amount <= 0) {
        alert('Enter a positive number!')
        document.getElementById("principal").focus()
        return false
    }

        
