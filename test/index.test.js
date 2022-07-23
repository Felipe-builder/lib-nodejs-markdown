const { pegaArquivoTs } = require('../index');

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivoTs::', () => {
  it('Deve ser uma função', () => {
    expect(typeof pegaArquivoTs).toBe('function'); //dever se o mesmo tipo de dado
  })
  it('Deve retornar array com resultados', async () => {
    const result = await pegaArquivoTs('/home/felipe/workspace/alura/javascript/lib-nodejs-markdown/test/arquivos/arquivos1.md');
    expect(result).toEqual(arrayResult) // deve ser igual ao dado simulado
  })
  it('Deve retornar mensagem "não há links"', async () => {
    const result = await pegaArquivoTs('/home/felipe/workspace/alura/javascript/lib-nodejs-markdown/test/arquivos/arquivos1_semlinks.md')
    expect(result).toBe('não há links');
  })
  it('Deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivoTs('/home/felipe/workspace/alura/javascript/lib-nodejs-markdown/test/arquivos')).rejects.toThrow(/não há arquivo no caminho/)
  })
})

