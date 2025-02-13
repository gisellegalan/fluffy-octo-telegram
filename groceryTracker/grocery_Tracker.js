let grocery1;
let grocery2;
let grocery3;

function groceryTracker() {
    grocery1 = parseFloat(documet.getElementById('grocery1').value);
    grocery2 = parseFloat(documet.getElementById('grocery2').value);
    grocery3 = parseFloat(documet.getElementById('grocery3').value);

    let totalAmount = grocery1 + grocery2 + grocery3;

    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}