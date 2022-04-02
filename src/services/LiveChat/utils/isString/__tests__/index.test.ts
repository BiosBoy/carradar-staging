import isString from '..';

describe('isStore()', () => {
  it('should return false if object thrown', () => {
    expect(isString({})).toBeFalsy();
  });
  it('should return false if array thrown', () => {
    expect(isString([])).toBeFalsy();
  });
  it('should return false if null thrown', () => {
    expect(isString(null)).toBeFalsy();
  });
  it('should return false if undefined thrown', () => {
    expect(isString(undefined)).toBeFalsy();
  });
  it('should return false if number thrown', () => {
    expect(isString(1)).toBeFalsy();
  });
  it('should return false if string thrown', () => {
    expect(isString('test')).toBeTruthy();
  });
});
