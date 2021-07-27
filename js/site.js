// Get the values from the Page
// start or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // We need to validate our input
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generate Numbers
        let numbers = generateNumbers(startValue, endValue);

        // call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers")
    }
}

// Generate numbers from startValue to endValue
// logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    // we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }
    
    return numbers;
}

// Display the numbers and mark even numbers in bold
// display or view function(s)
function displayNumbers(numbers) {    
    templateRows = "";
    numbers.forEach(element => {
        if (element % 2 === 0) {
            templateRows += `<tr><td><strong>${element}</strong></td></tr>`
        } else {
            templateRows += `<tr><td>${element}</td></tr>`
        }
    });
    
    document.getElementById("results").innerHTML = templateRows;
}