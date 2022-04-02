import validateEmail from '..';

import { validEmail, nonValidNameEmail, nonValidDomainEmail, nonValidPrefixEmail } from './mocks';

describe('validateEmail()', () => {
  it('should return true in case the email is valid', () => {
    expect(validateEmail(validEmail)).toBeTruthy();
  });
  it('should return false in case the email is non-valid by name', () => {
    expect(validateEmail(nonValidNameEmail)).toBeFalsy();
  });
  it('should return false in case the email is non-valid by domain', () => {
    expect(validateEmail(nonValidDomainEmail)).toBeFalsy();
  });
  it('should return false in case the email is non-valid by prefix', () => {
    expect(validateEmail(nonValidPrefixEmail)).toBeFalsy();
  });
});
