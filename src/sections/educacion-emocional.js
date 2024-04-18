module.exports = function () {
  var cssSelector = '.content .sqs-layout .col .sqs-block.html-block.sqs-block-html:first-of-type .sqs-html-content h2'
  var element = document.querySelector(cssSelector)

  if (element) {
    element.style.fontSize = '1.5em'
  }
}
