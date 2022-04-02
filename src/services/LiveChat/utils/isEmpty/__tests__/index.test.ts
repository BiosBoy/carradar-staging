import isEmpty from '..';

describe('isStore()', () => {
  it('should return false if object thrown', () => {
    expect(isEmpty({})).toBeTruthy();
  });
  it('should return false if array thrown', () => {
    expect(isEmpty([])).toBeTruthy();
  });
  it('should return false if null thrown', () => {
    expect(isEmpty(null)).toBeTruthy();
  });
  it('should return false if undefined thrown', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });
  it('should return false if object is not empty', () => {
    expect(isEmpty({ ID: 1 as any })).toBeFalsy();
  });
  it('should return false if array is not empty', () => {
    expect(isEmpty([1])).toBeFalsy();
  });
});
