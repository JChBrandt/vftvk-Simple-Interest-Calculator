// compute function: 
// reads the values from input elements, 
// validates the eligibility of some input,
// calculates the year the investment period ends,
// pushes calculated results to the web page
function compute()
{
    // read the
    var principal = document.getElementById("principal").value;
    if (principal > 0)
    {
        // read the other input elements and store them into variables
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        // read the rate input and calculate correctly (! in contrast to the instructions) 
        // the interest for the amount of years
        var interest = Math.round((principal * Math.pow(1 + rate / 100, years) - principal) * 100)/100;
        // calculate the year the investment ends
        var year = new Date().getFullYear()+parseInt(years);
        // parse the framing text for the output of the result in some variables
        var text1 = "If you deposit ";
        var text2 = "at an interest rate of ";
        var text3 = "You will receive an amount of ";
        var text4 = "in the year ";
        // push the results and text as output to the result element
        document.getElementById("text1").innerText = text1;
        document.getElementById("result1").innerText = numberWithCommas(principal); 
        document.getElementById("result1").style.background = "powderblue";
        document.getElementById("text2").innerText = text2; 
        document.getElementById("result2").innerText = rate + "%";
        document.getElementById("result2").style.background = "powderblue";
        document.getElementById("text3").innerText = text3; 
        document.getElementById("result3").innerText = numberWithCommas(interest); 
        document.getElementById("result3").style.background = "powderblue";
        document.getElementById("text4").innerText = text4;
        document.getElementById("result4").innerText = year;
        document.getElementById("result4").style.background = "powderblue";
    }
    else
    {
        alert("Enter a positive number larger than zero for the amount.");
        document.getElementById("principal").focus();
    }
    
}

// updateRate function:
// reads the range input and displays the value as text onto the web page
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
 
// reused code snippet from here: https://stackoverflow.com/a/2901298
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
