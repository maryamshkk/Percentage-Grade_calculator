// Interaction with DOM
// Marks Percentage Calculator 
function percentage(){
    // Essentials Input through DOM
    let name = document.getElementById("name").value;
    let obtmarks = document.getElementById("obtm").value;
    let totalmarks = document.getElementById("tm").value;
    // Percentage compilation
    let result = (obtmarks/totalmarks)*100;
    // Print Result 
    document.getElementById("perc").innerHTML = (name + " You have got " + result + "%");
}

// Zakat percentage Calculation 
function zakatcalc(){
    // Essential input through DOM
    let wealth = document.getElementById("welth").value;
    let zakatrate = 2.5;
    // Zakat Percentage
    let zakatperc = (wealth * zakatrate) / 100;
    // Print Result
    document.getElementById("zkat").innerHTML = "Total zakat percentage is " + zakatperc + "%";
}