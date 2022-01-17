var a = Number(window.prompt("Primeiro valor: "));
var b = Number(window.prompt("Segundo valor: "));

function checar(a, b) {
  let soma = a + b;

  a !== b
    ? console.log("Os números ", a, " e ", b, "não são iguais. ")
    : console.log("Os números ", a, " e ", b, " são iguais. ");
  console.log("Sua soma é: ", soma, ", ");
  soma < 10
    ? console.log("que é menor que 10.")
    : console.log("que é maior que 10.");
  soma > 20
    ? console.log("que é maior que 20.")
    : console.log("que é menor que 20.");
}

checar(a, b);
