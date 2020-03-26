
// Paragrafi con i relativi link
const book = {
  1:  [16, 3],
  16: [8, 5],
  3:  [13, 11],
  8:  [4, 13],
  5:  [19, 14],
  13: [4, 17, 18],
  11: [18, 17],
  4:  [12, 19],
  18: [12, 10],
  14: [17, 3],
  17: [10, 13],
  12: [7, 6],
  19: [6, 2],
  10: [8, 11],
  7:  [3, 5],
  6:  [2, 10],
  2:  [14, 7],
}

// Prima lettera di ogni paragrafo
const letters = {
  1:  'v',
  16: 'i',
  3:  'i',
  8:  'o',
  5:  'n',
  13: 'n',
  11: 'a',
  4:  'n',
  18: 'u',
  14: 'c',
  17: 'l',
  12: 'm',
  19: 'o',
  10: 'r',
  7:  'e',
  6:  'e',
  2:  'v',
}


// Memorizza qui tutti i percorsi possibili
// Un percorso è dato dalla lista dei paragrafi visitati
// Es: [1, 16, 8, ...]
const paths = []

// Esplora a partire da un percorso
const explore = (path) => {
  if(path.length === 17){
    paths.push(path)
    return
  }
  const last = path[path.length - 1]
  book[last].forEach( (link) => {
    if(path.includes(link)) return
    explore([...path, link])
  })
}

// Esplora a partire da 1
explore([1])
console.log(paths.length)
// Trasforma i percorsi nella frase corrispondente
console.log(paths.map( path => [path, path.map(link => letters[link]).join('')]))
