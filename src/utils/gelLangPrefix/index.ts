const gelLangPrefix = (locale: string) => {
  return ['/', '', ' '].includes(locale) ? '/' : `/${locale}/`
}

export default gelLangPrefix
