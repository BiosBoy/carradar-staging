/**
 *  @name isObject
 *  @author info@carradar.com.ua
 *  @version 1.1.0
 *  @description return true or false based on provided value type,
 *
 *  @params {string | number | boolean | object} value - some unit to check on
 *
 *  @return {boolean} value - real unit condition
 *
 *
 */
import isArray from '../isArray';
import isValue from '../isValue';

import { TData, TReturn } from './interfaces';

const isObject = (val: TData): TReturn => isValue(val) && !isArray(val) && val instanceof Object;

export default isObject;
