var pathname = window.location.pathname
var educacionEmocional = require('./sections/educacion-emocional.js')
var coaching = require('./sections/coaching.js')
var empresasSaludables = require('./sections/empresas-saludables.js')

function main() {
  if (pathname === '/educacion-emocional') {
    educacionEmocional()
  }
  if (pathname === '/coaching') {
    coaching()
  }
  if (pathname === '/empresas-saludables') {
    empresasSaludables()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})

main()
