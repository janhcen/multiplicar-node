let fs = require('fs')
let colors = require('colors')

let listarTabla = (base, limite) => {
  console.log('==============================='.green);
  console.log(`Tabla del ${base}`.green);
  console.log('==============================='.green);
  for (let index = 1; index <= limite; index++) {
    console.log(`${base} x ${index} = ${index * base}`);
  }
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject('No es un numero')
      return
    }

    let content = ''
  
    for (let i = 1; i <= limite; i++) {
      content += `${i} x ${base} = ${i * base}\n`
    }
  
    fs.writeFile(`tablas/tabla-${base}.js`, content, (err) => {
      if (err)
        reject(err)
      else
        resolve(`tabla-${base}.txt`);
    })
  })
}

module.exports = {
  crearArchivo,
  listarTabla
}