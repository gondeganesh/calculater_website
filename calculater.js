
// Append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // If there's an error, display "Error"
    }
}
// Delete the last character from the display
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}
