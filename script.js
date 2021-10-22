function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var dueyear = new Date().getFullYear();
	var myyr = Number(dueyear) + Number(years);

    var result = document.getElementById("result");
    result.innerText =  "If you deposit " + principal + "\n at an interest rate of " + rate + "%. \nYou will receive an interest of " + interest + "\nin the year " + myyr;
}

function updateRate(){
    var rate = document.getElementById("rate");
    var output = document.getElementById("demo");
    
    output.innerHTML = rate.value + "%";
	
}
   
