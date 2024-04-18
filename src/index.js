const pathname = window.location.pathname

function main() {
  if (pathname === '/educacion-emocional') {
    var educacionEmocional = import('./sections/educacion-emocional.js')
    educacionEmocional()
  }
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})

main()
