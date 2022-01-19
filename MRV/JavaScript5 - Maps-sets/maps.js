const usuarios = new Map();

function getAdmins(grup) {
  usuarios.set("Luis", "Adm");
  usuarios.set("Pedro", "Adm");
  usuarios.set("João", "Usuario");

  let adm = [];

  for ([key, value] of grup) {
    if (value === "Adm") {
      adm.push(key);
    }
  }
  console.log(adm);
}

getAdmins(usuarios);
