type Translation = 'es' | 'en' | 'pt'

export const getLanguage = (): Translation => {
  if (typeof window !== 'undefined') {
    const storedLanguaje = localStorage.getItem('Lenguaje')
    const userLang = navigator.language
    const langNavigator = userLang.split('-')[0]

    let language: Translation
    if (storedLanguaje !== langNavigator) {
      switch (langNavigator) {
        case 'es':
          language = 'es'
          break
        case 'pt':
          language = 'pt'
          break
        default:
          language = 'en'
          break
      }

      localStorage.setItem('Lenguaje', language)
      return language
    }
    language = langNavigator as Translation
    return language
  }

  return 'en'
}
