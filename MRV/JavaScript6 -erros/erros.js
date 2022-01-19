function erro(arr, numb) {
  try {
    if (!arr && !numb) throw new ReferenceError("Envie os parâmetros");

    if (typeof arr !== "object") throw new TypeError("Envie um array");

    if (typeof numb !== "number") throw new TypeError("Envie um number");

    if (arr.length !== numb)
      throw new RangeError("Envie uma array to tamanho do number");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError");
      console.log(e.name);
      console.log(e.stack);
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError");
      console.log(e.menssage);
      console.log(e);
    } else {
      console.log("Tipo de erro não esperado:" + e);
    }
  }
}

let a = "[1, 2, 3]";
let b = 2;

console.log(erro([1, 2, 3, 4, 5], 4));
