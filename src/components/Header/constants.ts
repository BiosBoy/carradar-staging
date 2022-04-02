export const BUTTONS_LANGUAGES = [
  {
    label: 'en',
    icon: 'english'
  },
  {
    label: 'ua',
    icon: 'ukrainian'
  },
  {
    label: 'ru',
    icon: 'russian'
  }
];

export const LANGUAGE_MAP = {
  [BUTTONS_LANGUAGES[0].label]: { label: 'en', dir: 'ltr', active: true },
  [BUTTONS_LANGUAGES[1].label]: { label: 'ua', dir: 'ltr', active: false },
  [BUTTONS_LANGUAGES[2].label]: { label: 'ru', dir: 'ltr', active: false }
};
