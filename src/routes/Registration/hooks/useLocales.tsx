import i18n from 'i18next';

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.registration.title');

  return {
    SECTION_TITLE,
    FORM: {
      EMAIL: i18n.t('pages.registration.form.email'),
      EMAIL_TIP: i18n.t('pages.registration.form.email_tip'),
      PASSWORD: i18n.t('pages.registration.form.password'),
      CONFIRM_PASSWORD: i18n.t('pages.registration.form.confirm_password'),
      NAME: i18n.t('pages.registration.form.name'),
      SUBMIT: i18n.t('pages.registration.form.submit'),
      PASSWORD_TIP: i18n.t('pages.registration.form.password_tip'),
      PASSWORDS_MATCH: i18n.t('pages.registration.form.passwords_match')
    }
  };
};

export default useLocales;
