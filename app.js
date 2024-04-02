var buttonClickCount = 0;
var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var rainbowIndex = 0;
var rainbowInterval;

function increment() {
    var counterElement = document.getElementById('counter');
    var counterValue = parseInt(counterElement.innerText);

    buttonClickCount++;
    counterElement.innerText = counterValue + 1;

    if (buttonClickCount === 100) {
        startRainbowAnimation();
    }
}

function startRainbowAnimation() {
    rainbowInterval = setInterval(function() {
        var counterElement = document.getElementById('counter');
        counterElement.style.color = rainbowColors[rainbowIndex];
        rainbowIndex = (rainbowIndex + 1) % rainbowColors.length;
    }, 100);
}

// Evento de clique para o botão de dica
const tipButton = document.querySelector('.tip');
tipButton.addEventListener('click', function() {
    alert("Clique 100 vezes no botão e veja algo incrível acontecer.");
});
