function compute()
{
     	var rate = document.getElementById("myRange").value;
    	var years = document.getElementById("years").value;
    	var interest = principal * years * rate/100;
   	var year = new Date().getFullYear();
	var byyear = Number(year) + Number(years);
	var principal = document.getElementById("principal").value;
	var result = document.getElementById("result");
	if principal <= 0 {
		alert("Please enter a positive value");
	} else {
		result.innerText =  "If you deposit " + principal + "\n at an interest rate of " + rate + "%. \nYou will receive an interest of " + interest + "\nin the year " + byyear;
}}

function updateRate(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    
    output.innerHTML = slider.value + "%";
	
}
       
