module.exports = function () {
  var cssSelector = '.content .sqs-layout .col .sqs-block.html-block.sqs-block-html:first-of-type .sqs-html-content h2'
  var element = document.querySelector(cssSelector)

  console.log('se ejecuta dentro de educacion emocional')

  if (element) {
    element.style.fontSize = '1.6em'
    element.style.color = 'red'
  }
}
