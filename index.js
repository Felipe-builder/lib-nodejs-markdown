const chalk = require('chalk');
const fs = require('fs');

const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm

  const arrayResultados = []
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2]})
  }
  const linksExtraidos = regex.exec(texto);
  console.log(arrayResultados)
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}


// 3º - Code
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
  } catch(erro) {
    trataErro(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'))
  }
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

// pegaArquivo('./arquivos/texto1.md');
extraiLinks(texto)


//      \[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)