/**
 *  @name isDev
 *  @author biosboy
 *  @version 1.0.0
 *  @description suitable way for checking current project's domain
 *
 *  @readonly
 */
const isLocalDev = () => {
  return {
    isLocalBackend: /^(localhost:3002)/i.test(window.location.host),
    isLocalFrontend: /^(localhost:3000)/i.test(window.location.host)
  }
}

export default isLocalDev
