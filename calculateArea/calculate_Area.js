// Declare size variables
let length;
let width;

// Calculate area from variables
function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
}

// Declare area variable
function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
}

// Display result
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;