const alunos = [
  {
    nome: "João",
    nota: 5,
  },

  {
    nome: "Sofia",
    nota: 9,
  },

  {
    nome: "Paulo",
    nota: 6,
  },
];

function aprovados(alunos, med) {
  let alunosAprovados = [];

  for (i = 0; i < alunos.length; i++) {
    const { nome, nota } = alunos[i];
    if (nota >= med) {
      alunosAprovados.push(nome);
    }
  }
  console.log(alunosAprovados);
}

aprovados(alunos, 3);
