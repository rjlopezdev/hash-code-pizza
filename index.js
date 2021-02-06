const fs = require('fs')

fs.readFile('/Users/nachosizle/Documents/Development/JS/HashCode2021/hash-code-pizza/test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  
  const firstLine = /(?<nPizzas>[0-9]+) (?<g1>[0-9]+) (?<g2>[0-9]+) (?<g3>[0-9]+)\n/;
  //const regex = /(((\d)+ ?){4}\n(((\d)+( \w+)+)\n)+)/;
  const dataParsed = data.match(firstLine);
  console.debug(dataParsed);
})