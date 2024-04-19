module.exports = function () {
  var titleCssSelector = '.header-menu-nav-item a'

  var style = document.createElement('style')
  style.innerHTML = `
    ${titleCssSelector} {
      font-size: 5.5vmin !important;
    }
  `

  document.head.appendChild(style)
}
