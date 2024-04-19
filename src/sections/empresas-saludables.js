var alreadyExecuted = false

module.exports = function () {
  if (alreadyExecuted) {
    return
  }

  var videoCssSelector = '.section-border'
  var videoElement = document.querySelector(videoCssSelector)

  var contentWrapperCssSelector = '.content-wrapper'
  var contentWrapperElement = document.querySelector(contentWrapperCssSelector)

  var pageSectionCssSelector = '.page-section'
  var pageSectionElement = document.querySelector(pageSectionCssSelector)

  if (videoElement) {
    videoElement.remove()
  }

  if (contentWrapperElement) {
    contentWrapperElement.remove()
  }

  if (pageSectionElement) {
    pageSectionElement.style.minHeight = 'auto'
  }

  var style = document.createElement('style')
  style.innerHTML = `
    @media (max-width: 520px) {
      .page-section.layout-engine-section {
        min-height: auto !important;
      }
    }
`

  document.head.appendChild(style)

  alreadyExecuted = true
}
