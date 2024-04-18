var pathname = window.location.pathname
var educacionEmocional = require('./sections/educacion-emocional.js')

function main() {
  if (pathname === '/educacion-emocional') {
    educacionEmocional()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})

main()
