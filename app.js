var buttonClickCount = 0;

function increment() {
    var counterElement = document.getElementById('counter');
    var counterValue = parseInt(counterElement.innerText);

    buttonClickCount++;

    if (buttonClickCount === 100) {
        alert("Nossa, você deve ser bem desocupado pra apertar esse botão 100 vezes...");
        buttonClickCount = 0;
    }
    
    counterElement.innerText = counterValue + 1;
}