import i18n from 'i18next'

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.home.search_section.title')
  const SECTION_TEXT = i18n.t('pages.home.search_section.text')
  const FETCH_BTN_LABEL = i18n.t('pages.home.search_section.button')
  const FETCH_BTN_LABEL_SHORT = i18n.t('pages.home.search_section.button_short')
  const BAD_PATTERN_ERROR = i18n.t('pages.home.search_section.bad_pattern_error')
  const INPUT_PLACEHOLDER = i18n.t('pages.home.search_section.input_placeholder')
  const INPUT_PLACEHOLDER_SHORT = i18n.t('pages.home.search_section.input_placeholder_short')
  const CYRILLIC_ALPHABET = i18n.t('pages.home.search_section.cyrillic_alphabet')
  const NOT_EMPTY_ERROR = i18n.t('pages.home.search_section.not_empty_error')
  const NOT_SPECIAL_SYMBOLS = i18n.t('pages.home.search_section.not_special_symbols')

  return {
    SECTION_TITLE,
    SECTION_TEXT,
    FETCH_BTN_LABEL,
    FETCH_BTN_LABEL_SHORT,
    BAD_PATTERN_ERROR,
    INPUT_PLACEHOLDER,
    INPUT_PLACEHOLDER_SHORT,
    CYRILLIC_ALPHABET,
    NOT_EMPTY_ERROR,
    NOT_SPECIAL_SYMBOLS
  }
}

export default useLocales
