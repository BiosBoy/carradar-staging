import i18n from 'i18next';

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.login.title');
  const EMAIL = i18n.t('pages.login.form.email');
  const PASSWORD = i18n.t('pages.login.form.password');
  const SUBMIT = i18n.t('pages.login.form.submit');

  return {
    SECTION_TITLE,
    EMAIL,
    PASSWORD,
    SUBMIT
  };
};

export default useLocales;
