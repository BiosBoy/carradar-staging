import isObject from '../isObject'

/**
 *  @name isEmpty
 *  @author 3p-sviat
 *  @version 1.1.0
 *  @description return true or false based on child length inside the array,
 *
 *  @params {string[] | number[] | boolean[] | object & object[]} value - some unit to check on
 *
 *  @return {boolean} value - real unit condition
 *
 */
import { TData, TReturn } from './interfaces'

const isEmpty = (val: TData): TReturn => {
  if (isObject(val)) {
    return !val || Object.keys(val).length === 0
  }

  return !val || (Object.prototype.hasOwnProperty.call(val, 'length') && (val as any[]).length === 0)
}

export default isEmpty
