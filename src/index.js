var pathname = window.location.pathname
var educacionEmocional = require('./sections/educacion-emocional.js')

console.log('pathname', pathname)

function main() {
  console.log('main')

  if (pathname === '/educacion-emocional') {
    console.log('educacionl emodioncla;')

    educacionEmocional()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})

main()
