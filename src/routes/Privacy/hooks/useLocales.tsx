import i18n from 'i18next';

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.privacy.title');
  const TEXT_FIRST = i18n.t('pages.privacy.text1');
  const TEXT_SECOND = i18n.t('pages.privacy.text2');
  const TEXT_THIRD = i18n.t('pages.privacy.text3');
  const TEXT_FOURTH = i18n.t('pages.privacy.text4');

  return {
    SECTION_TITLE,
    TEXT_FIRST,
    TEXT_SECOND,
    TEXT_THIRD,
    TEXT_FOURTH
  };
};

export default useLocales;
