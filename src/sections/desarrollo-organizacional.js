var alreadyExecuted = false

module.exports = function () {
  if (alreadyExecuted) {
    return
  }

  var titleCssSelector = 'p.titular'
  var titleElement = document.querySelector(titleCssSelector)

  if (titleElement) {
    titleElement.computedStyleMap.fontSize = '24px'
  }

  alreadyExecuted = true
}
