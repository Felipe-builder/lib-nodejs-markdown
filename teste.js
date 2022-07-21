const linksBruto = [
  [
    {
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    },
    {
      '<input>': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input'
    },
    {
      DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer'
    },
    {
      HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement'
    },
    {
      'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes'
    }
  ]
]


function geraArrayDeURLs(arrayLinks) {
  console.log(arrayLinks)

  return arrayLinks
    .map(objetoLink =>
      Object
        .values(objetoLink).join()
    )
}

const links = geraArrayDeURLs(linksBruto)
console.log(links)
