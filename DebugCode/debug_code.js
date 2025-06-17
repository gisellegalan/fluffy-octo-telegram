function performOperation() {
    // Get user input from input fields
    //      parseInt(string, radix): parses the string from left to right until it encounters a character that is not a valid digit for the specified radix.
    //      If the first character cannot be converted to a number, parseInt() returns NaN. 
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);
        // Display the result
        displayResult(result);
    } else {
        displayResult("Please enter valid numbers");
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    // The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
    debugger;

    // Multiply the numbers
    return a * b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}