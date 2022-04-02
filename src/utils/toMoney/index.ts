/**
 *  @name toMoney
 *  @author info@carradar.com.ua
 *  @version 1.0.0
 *  @description converts regular money value to the more mathemetic-like style (with comma and etc).
 *
 *  @param {string | number} n='' - value of the money.
 *  @param {string} currency='' - type of the game currency.
 *  @param {number?} rounder='' - units after comma.
 *
 *  @return {string} number value with commas.
 *
 *  @copyright CarRadar (c)
 */

export interface IProps {
  value: number;
  currency?: string;
  rounder?: number;
}

export const toMoney = ({ value = null, currency = '', rounder = 0 }: IProps) => {
  if (isNaN(value)) {
    return 'undefined';
  }

  const moneyStringify = value.toFixed(rounder).toString();
  const moneyNormalized = moneyStringify.replace(/,/g, '');
  const money = `${currency} ${moneyNormalized.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`;

  return money;
};
