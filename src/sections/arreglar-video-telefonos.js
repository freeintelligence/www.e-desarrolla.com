var alreadyExecuted = false

module.exports = function () {
  if (alreadyExecuted) {
    return
  }

  var urlVideo =
    'https://www.youtube.com/embed/kd99twk-iWM?autohide=1&autoplay=1&mute=1&controls=0&enablejsapi=1&iv_load_policy=3&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&wmode=opaque&origin=https%3A%2F%2Fwww.e-desarrolla.com&widgetid=1'
  var cssSelector = '.sqs-video-background iframe'
  var element = document.querySelector(cssSelector)

  if (element) {
    element.src = urlVideo
  }

  alreadyExecuted = true
}
