import isObject from '..';

describe('isStore()', () => {
  it('should return false if object thrown', () => {
    expect(isObject({})).toBeTruthy();
  });
  it('should return false if array thrown', () => {
    expect(isObject([])).toBeFalsy();
  });
  it('should return false if null thrown', () => {
    expect(isObject(null)).toBeFalsy();
  });
  it('should return false if undefined thrown', () => {
    expect(isObject(undefined)).toBeFalsy();
  });
  it('should return false if number thrown', () => {
    expect(isObject(1)).toBeFalsy();
  });
  it('should return false if string thrown', () => {
    expect(isObject('test')).toBeFalsy();
  });
});
