import Router from 'next/router'

const defaultLanguage = (language?: string) => {
  let currentLanguage = 'en'
  if (typeof window !== 'undefined') {
    currentLanguage =
      window.localStorage.getItem('languageCode') || window.navigator.language.split('-')[0]
    if (language) {
      window.localStorage.setItem('languageCode', language)
      if (currentLanguage !== language) Router.reload()
      currentLanguage = language
    }
  }

  return currentLanguage
}

export { defaultLanguage }
