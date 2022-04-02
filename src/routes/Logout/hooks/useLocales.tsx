import i18n from 'i18next';

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.sign_out.title');
  const TEXT = i18n.t('pages.sign_out.text');
  const SUBMIT = i18n.t('pages.sign_out.submit');

  return {
    SECTION_TITLE,
    TEXT,
    SUBMIT
  };
};

export default useLocales;
