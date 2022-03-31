import i18n from 'i18next'

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.contact.title')
  const FIRST_TITLE = i18n.t('footer.blocks.first_block.title')
  const ZIP = i18n.t('footer.blocks.first_block.content.line_1')
  const ADDRESS = i18n.t('footer.blocks.first_block.content.line_2')
  const CITY = i18n.t('footer.blocks.first_block.content.line_3')
  const COUTRY = i18n.t('footer.blocks.first_block.content.line_4')
  const SECOND_TITLE = i18n.t('footer.blocks.second_block.title')

  return {
    SECTION_TITLE,
    FIRST_TITLE,
    ZIP,
    ADDRESS,
    CITY,
    COUTRY,
    SECOND_TITLE
  }
}

export default useLocales
