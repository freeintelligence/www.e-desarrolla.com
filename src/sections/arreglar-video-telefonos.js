var alreadyExecuted = false

module.exports = function () {
  if (alreadyExecuted) {
    return
  }

  var isFirefoxMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && /Firefox/i.test(navigator.userAgent)

  if (!isFirefoxMobile) {
    return
  }

  var cssSelector = '.sqs-video-background'
  var element = document.querySelector(cssSelector)

  var iFrame = `<iframe id="player" style="position: absolute; inset: 0px 0px 0px -234.222px; width: 1324.44px; height: 745px;" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="e desarrolla" width="640" height="360" src="https://www.youtube.com/embed/kd99twk-iWM?autohide=1&amp;autoplay=1&mute=1&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fwww.e-desarrolla.com&amp;widgetid=1" class="background-video ready"></iframe>`

  if (element) {
    element.innerHTML = iFrame
  }

  alreadyExecuted = true
}
