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
        
        document.getElementById("result").innerHTML = "If you deposit ";
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateval").innerText=rateval;
}

function valid()
{
    amount = document.getElementById("principal").value;

    if (amount <= 0) {
        alert('Enter a positive number!')
        document.getElementById("principal").focus()
        return false
    }

        
