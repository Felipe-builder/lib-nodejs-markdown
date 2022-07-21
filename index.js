const chalk = require('chalk');
const fs = require('fs');
const path = require('path')


function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm

  const arrayResultados = []
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2]})
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados; 
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}


// 3º - Code
async function pegaArquivo(caminhoDoArquivo) {
  const caminhoAboluto = path.join("__dirname", '..', caminhoDoArquivo)
  const encoding = 'utf-8';
  try {
    const arquivos = await fs.promises.readdir(caminhoAboluto, { encoding })
    const result = await Promise.all(arquivos.map(async (arquivo) => {
      const localArquivo = `${caminhoAboluto}/${arquivo}`;
      const texto = await fs.promises.readFile(localArquivo, encoding)
      
      return extraiLinks(texto)
    }))
    return result[0]
  } catch(erro) {
    return trataErro(erro)
  }
  // try {
  //   const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
  //   return extraiLinks(texto);

  // } catch(erro) {
  //   trataErro(erro)
  // } finally {
  //   console.log(chalk.yellow('operação concluída'))
  // }
}

// 2º - Code
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro))
// }


// 1º - Code
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, data) => {
//     if (erro) {
//       trataErro(erro)
//     }
//     console.log(chalk.green(data))
//   })
// }

module.exports = pegaArquivo;