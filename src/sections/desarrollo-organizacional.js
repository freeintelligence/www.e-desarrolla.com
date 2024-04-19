module.exports = function (alwaysExecute = false) {
  var titleCssSelector = 'p.titular'
  var titleElement = document.querySelector(titleCssSelector)

  if (titleElement) {
    titleElement.computedStyleMap.fontSize = '24px'
  }
}
