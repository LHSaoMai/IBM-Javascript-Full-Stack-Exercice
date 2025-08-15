let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length*width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }

let grocery1;
let grocery2;
let grocery3;

function add(){
    grocery1=parseFloat(document.getElementById('groc1').value);
    grocery2=parseFloat(document.getElementById('groc2').value);
    grocery3=parseFloat(document.getElementById('groc3').value);

    let sumation= grocery1+grocery2+grocery3;

    document.getElementById("groc_result").innerText = `The area amount is: $${sumation}`;
}