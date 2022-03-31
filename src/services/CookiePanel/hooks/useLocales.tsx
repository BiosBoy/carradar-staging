import i18n from 'i18next'

const useLocales = () => {
  const MAIN_TEXT = i18n.t('services.cookie.text')
  const TEXT_LINK = i18n.t('services.cookie.link')
  const TEXT_LABEL = i18n.t('services.cookie.label')

  return {
    MAIN_TEXT,
    TEXT_LINK,
    TEXT_LABEL
  }
}

export default useLocales
