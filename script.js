function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var result = document.getElementById('result');
    // Reset result
    result.innerHTML = '';
    // Validate values first
    if (!principal || principal <= 0) {
        alert('Enter a positive number');
        // Return focus as indicated in instructions
        document.getElementById('principal').focus()
        return;
    }
    // Calculate interest and year based on values
    var interest = parseInt(principal) * parseInt(years) * parseFloat(rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // Don't calculate if either is not a number
    if (isNaN(interest) || isNaN(year)) {
        return
    }
    // Update result
    result.innerHTML = 'If you deposit <div class="highlight">' +  principal + '</div>,<br>' + 
        ' at an interest rate of <div class="highlight">' + rate + '%</div>. <br>' 
        + 'You will receive an amount of <div class="highlight">' + interest + '</div>, <br>' 
        + 'in the year <div class="highlight">' + year + '</div><br>';
}

function updateRate()
{
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rateval + '%';
}        
