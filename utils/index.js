export function upperFirstLetter(text) {
  try {
    return text[0].toUpperCase() + text.slice(1)
  } catch (error) {
    throw new Error('No text provided')
  }
}

export function isMobileDevice() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1
}
