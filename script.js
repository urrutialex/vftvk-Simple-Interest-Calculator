function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
    else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
        
        document.getElementById("result").innerHTML = "If you deposit " + principal + ", <br> at an interest rate of " + rate +"% <br> You will receive an amount of " + interest + ",<br>in the year " + year;
    }
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

        
