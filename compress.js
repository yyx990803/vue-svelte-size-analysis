const fs = require('fs')
const zlib = require('zlib')

function compress(fw) {
  const file = `todomvc.${fw}.min.js`
  fs.writeFileSync(
    `${file}.brotli`,
    zlib.brotliCompressSync(fs.readFileSync(file))
  )
}

compress('vue')
compress('svelte')