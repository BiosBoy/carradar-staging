import { TReturn } from './interfaces'

/**
 *  @name isLogged
 *  @author sviat
 *  @version 1.1.0
 *  @description tiny util that returns current session user ID value.
 *
 *  @return {string} ID - founded user ID from cookie.
 *
 *  @readonly
 */

const isLogged = (): TReturn => {
  const getCookie = (name: string): string => {
    const matchPrefix = '(?:^|; )'
    const matchSuffix = '=([^;]*)'
    const replacePattern = name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')

    const matches =
      typeof document !== 'undefined' &&
      document.cookie &&
      document.cookie.match(new RegExp(`${matchPrefix}${replacePattern}${matchSuffix}`))

    return matches && matches[1] ? decodeURIComponent(matches[1]) : undefined
  }

  return getCookie('isLogged') === 'true'
}

export default isLogged
