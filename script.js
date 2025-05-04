// const footerParagraph = document.querySelector('footer p')
// footerParagraph.append('| ... JS is coming next')

// this seems like the more appropriate way to do it
document.addEventListener('DOMContentLoaded', function () {
  const footerParagraph = document.querySelector('footer p')
  footerParagraph.append(' | ... JS is coming next')
})
