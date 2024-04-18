const pathname = window.location.pathname

function main() {
  if (pathname === '/educacion-emocional') {
    import('./sections/educacion-emocional.js')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  main()
})

main()
