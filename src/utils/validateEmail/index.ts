/* eslint-disable max-len */

/**
 *  @name validateEmail
 *  @author info@carradar.com
 *  @version 1.0.0
 *  @description check if the email is valid or not based on the pattern "*@*.*".
 *
 *  @params {string} value - any string value.
 *
 *  @return {boolean} value - is email valid or not.
 *
 *
 *  @copyright Copyright (c) Carradar.
 */

const validateEmail = (email: string): boolean => {
  // @ts-ignore
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

export default validateEmail;
