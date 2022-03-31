/**
 *  @name isDev
 *  @author sviat
 *  @version 1.0.0
 *  @description suitable way for checking current project's domain
 *
 *  @readonly
 */
const isLocalhost = () => {
  if (typeof window === 'undefined') {
    return false
  }

  const { host } = window.location

  return host.includes('localhost')
}

export default isLocalhost
