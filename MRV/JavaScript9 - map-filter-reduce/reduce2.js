const lista = [
  {
    name: "sabao",
    value: 10,
  },
  {
    name: "ceral",
    value: 12,
  },
  {
    name: "toalha",
    value: 15,
  },
];

const SALDO = 100;

function calculaSaldo(SALDO, lista) {
  return lista.reduce(function (prev, current) {
    return prev - current.value;
  }, SALDO);
}

console.log(calculaSaldo(SALDO, lista));
