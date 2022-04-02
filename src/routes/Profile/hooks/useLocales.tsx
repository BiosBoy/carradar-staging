import i18n from 'i18next';

const useLocales = () => {
  const SECTION_TITLE = i18n.t('pages.profile.title');

  return {
    SECTION_TITLE,
    ACCOUNT: {
      SUB_TITLE: i18n.t('pages.profile.form.account.sub_title'),
      FIRST_NAME: i18n.t('pages.profile.form.account.first_name'),
      LAST_NAME: i18n.t('pages.profile.form.account.last_name'),
      EMAIL: i18n.t('pages.profile.form.account.email'),
      MOBILE: i18n.t('pages.profile.form.account.mobile'),
      BIO: i18n.t('pages.profile.form.account.bio')
    },
    PASSWORD: {
      SUB_TITLE: i18n.t('pages.profile.form.password.sub_title'),
      OLD_PASSWORD: i18n.t('pages.profile.form.password.old_password'),
      NEW_PASSWORD: i18n.t('pages.profile.form.password.new_password'),
      CONFIRM_NEW_PASSWORD: i18n.t('pages.profile.form.password.confirm_new_password')
    },
    HISTORY: {
      SUB_TITLE: i18n.t('pages.profile.form.history.sub_title'),
      TEXT: i18n.t('pages.profile.form.history.text'),
      VIN: i18n.t('pages.profile.form.history.vin'),
      DATE: i18n.t('pages.profile.form.history.date')
    },
    SIDEBAR: {
      ACCOUNT_TITLE: i18n.t('pages.profile.sidebar.account'),
      PASSWORD_TITLE: i18n.t('pages.profile.sidebar.password'),
      HISTORY_TITLE: i18n.t('pages.profile.sidebar.history')
    },
    SUBMIT: i18n.t('pages.profile.submit')
  };
};

export default useLocales;
