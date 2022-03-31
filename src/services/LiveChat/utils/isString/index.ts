/**
 *  @name isString
 *  @author 3p-sviat
 *  @version 1.1.0
 *  @description return true or false based on provided value type,
 *
 *  @params {string | number | boolean | object} value - some unit to check on
 *
 *  @return {boolean} value - real unit condition
 *
 */
import isValue from '../isValue'

import { TData, TReturn } from './interfaces'

const isString = (val: TData): TReturn => isValue(val) && typeof val === 'string'

export default isString
