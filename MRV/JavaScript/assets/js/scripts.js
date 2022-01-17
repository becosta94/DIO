var currentNumberWrapper = document.getElementById("currentNumber");
let buttonMenos = document.getElementById("buttonMenos");
let buttonMais = document.getElementById("buttonMais");
var currentNumber = 0;

buttonMais.addEventListener("click", increment);
buttonMenos.addEventListener("click", decrement);

function increment() {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}

function decrement() {
  if (currentNumber > 0) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
}
