
function form_setup()
{
	//purpose: add options to years selection control so that they don't clog up the HTML file
	var select_input = document.getElementById("years");
	var year_counter = 0;
        var innerHTML=select_input.innerHTML;
	
	for (year_counter = 2;year_counter<51;year_counter++)
	{
		innerHTML=innerHTML+"\r\n<option>" + year_counter + "</option>";
	}
	select_input.innerHTML=innerHTML;
	rate_change();
        return;
}

function rate_change()
{
	//purpose: update the selected interest rate display	

	var interest_rate = document.getElementById("rate");
	var parent_node = interest_rate.parentElement;
	var childNodes = parent_node.childNodes;
	var new_child = document.createElement("Text");
	var counter = 0;
	var nodeName = "none";

	//add the updated interest rate selection into the display
	new_child = document.createTextNode(" " + Number(interest_rate.value).toFixed(2) + "%");
        if (childNodes.length>1)
        {
              parent_node.replaceChild(new_child,childNodes[1]);
        }
        else
        {
             parent_node.appendChild(new_child);
        }

      return;        
}

function check_amount()
{
    //purpose: validate the principal input is a number greater than zero, return true if valid, otherwise false

    var number_valid = false;
    var principal = document.getElementById("principal").value;
    var amount = Number(principal);
    if (amount=="NaN")
    {
         alert("Principal must be a positive number");
         document.getElementById("outputRow").style.display="none";
         document.getElementById("principal").value = "";
	 document.getElementById("principal").focus();
	 return number_valid;
    }
    if (amount<=0)
    {
         alert("Principal must be a positive number");
         document.getElementById("outputRow").style.display="none";
         document.getElementById("principal").value = "";
	 document.getElementById("principal").focus();
	 return number_valid;        
    }
    number_valid = true;
    return number_valid;   
}
        

function compute_interest()
{

    //purpose: validate inputs, compute and display output
    var principal = 0;
    var interest_rate = 0;
    var years = 0;
    var rate = 0;
    var start = 0;
    var iRate = 0;
    var earnings = 0;
    var endYear = 0;
    

    //validate the inputs
    var principal_ok = check_amount();
    if (principal_ok == false)
    {
        return;
    }

    principal = Number(document.getElementById("principal").value);
    interest_rate = Number(document.getElementById("rate").value);
    years = Number(document.getElementById("years").value);
    start = document.getElementById("start");
    iRate = document.getElementById("iRate");
    earnings = document.getElementById("earnings");
    endYear = document.getElementById("endYear");


    start.innerHTML = principal;
    iRate.innerHTML = interest_rate.toFixed(2);
    earnings.innerHTML = Math.round(.01*interest_rate*years*principal).toString();
    endYear.innerHTML=new Date().getFullYear()+years;
    document.getElementById("outputRow").style.display="inline";


}
