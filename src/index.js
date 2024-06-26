var pathname = window.location.pathname
var educacionEmocional = require('./sections/educacion-emocional.js')
var coaching = require('./sections/coaching.js')
var empresasSaludables = require('./sections/empresas-saludables.js')
var desarrolloOrganizacional = require('./sections/desarrollo-organizacional.js')
var arreglarVideoTelefonos = require('./sections/arreglar-video-telefonos.js')
var arreglarNavegacion = require('./sections/arreglar-navegacion.js')

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

  if (pathname === '/desarrollo-organizacional') {
    desarrolloOrganizacional()
  }

  arreglarVideoTelefonos()
  arreglarNavegacion()
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})

main()
