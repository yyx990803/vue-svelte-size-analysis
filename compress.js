const fs = require('fs')
const zlib = require('zlib')

function compress(fw) {
  const file = `todomvc.${fw}.min.js`
  const src = fs.readFileSync(file)
  fs.writeFileSync(`${file}.brotli`, zlib.brotliCompressSync(src))
  fs.writeFileSync(`${file}.gz`, zlib.gzipSync(src))
}

compress('vue')
compress('svelte')
