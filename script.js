function compute()
{
    principal = document.getElementById("principal").value;
    
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years * rate /100;
    year = new Date().getFullYear()+parseInt(years);
        
    document.getElementById("result").value;
    }
}

function updateRate() 
{
    document.getElementById("rate").innerText=rate;
}

function valid()
{
    amount = document.getElementById("principal").value;

    if (amount <= 0) {
        alert('Enter a positive number!')
        document.getElementById("principal").focus()
        return false
    }

        
