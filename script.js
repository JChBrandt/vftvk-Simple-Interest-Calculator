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
        var interest = principal * Math.pow(1 + rate / 100, 3.5) - principal;
        // calculate the year the investment ends
        var year = new Date().getFullYear()+parseInt(years);
        // parse the framing text for the output of the result in some variables
        var text1 = "If you deposit <mark>";
        var text2 = "</mark>,<br/>at an interest rate of <mark>";
        var text3 = "%</mark>.<br/>You will receive an amount of <mark>";
        var text4 = "</mark>,<br/>in the year <mark>";
        // push the results and text as output to the result element
        document.getElementById("result").innerText = text1 + principal + text2 + rate + text3 + interest + text4 + year + "</mark>.";
    }
    else
    {
        alert("Enter a positive number larger than zero for the amount.")
        document.getElementById("principal").focus()
    }
    
}

// updateRate function:
// reads the range input and displays the value as text onto the web page
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        