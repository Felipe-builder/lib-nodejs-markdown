const chalk = require('chalk');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]); 
    console.log(chalk.yellow('lista de links: '), resultado);
}

processaTexto(caminho);