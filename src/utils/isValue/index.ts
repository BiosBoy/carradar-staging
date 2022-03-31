/**
 *  @name isValue
 *  @author 3p-sviat
 *  @version 1.1.0
 *  @description helps recognize is received value originally provided even with "0" or "false",
 *  @description rather than real "false" value.
 *
 *  @params {string | number | boolean | object} value - some unit to check on
 *
 *  @return {boolean} value - real unit condition
 *
 *
 *  @copyright Copyright (c) Carradar, LTD.
 */

import { TIsValue, TReturn } from './interfaces'

const isValue = (value: TIsValue): TReturn => {
  const isRealValue = ![undefined, null].includes(value)

  return isRealValue
}

export { TIsValue }
export default isValue
