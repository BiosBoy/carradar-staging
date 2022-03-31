import i18n from 'i18next'

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.home.results_section.title')
  const IMAGE_ALT = i18n.t('pages.home.results_section.image_alt')
  const OWNER_LABEL = i18n.t('pages.home.results_section.main_data.owner')
  const VIN_LABEL = i18n.t('pages.home.results_section.main_data.vin')
  const BLACKLISTED_LABEL = i18n.t('pages.home.results_section.main_data.blacklisted')
  const INFO_LABEL = i18n.t('pages.home.results_section.main_data.info')

  const COLLECTED_DATA_TITLE = i18n.t('pages.home.results_section.collected_data.title')
  const MANUFACTURE_LABEL = i18n.t('pages.home.results_section.collected_data.manufacture')
  const MANUFACTURE_DATE_LABEL = i18n.t('pages.home.results_section.collected_data.manufactured_date')
  const COLOR_LABEL = i18n.t('pages.home.results_section.collected_data.color')
  const GAS_TYPE_LABEL = i18n.t('pages.home.results_section.collected_data.gasType')
  const PRICE_LABEL = i18n.t('pages.home.results_section.collected_data.price')
  const LAST_OPERATION_LABEL = i18n.t('pages.home.results_section.collected_data.last_operation')
  const LAST_OPERATION_TYPE_LABEL = i18n.t('pages.home.results_section.collected_data.last_operation_type')

  const COLLECTED_DATA_LABELS_ARRAY = [
    MANUFACTURE_LABEL,
    MANUFACTURE_DATE_LABEL,
    COLOR_LABEL,
    GAS_TYPE_LABEL,
    PRICE_LABEL,
    LAST_OPERATION_LABEL,
    LAST_OPERATION_TYPE_LABEL
  ]

  return {
    SECTION_TITLE,
    IMAGE_ALT,
    OWNER_LABEL,
    VIN_LABEL,
    BLACKLISTED_LABEL,
    INFO_LABEL,
    COLLECTED_DATA_TITLE,
    COLLECTED_DATA_LABELS_ARRAY
  }
}

export default useLocales
