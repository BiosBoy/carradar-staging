import isArray from '..'

describe('isStore()', () => {
  it('should return false if object thrown', () => {
    expect(isArray({})).toBeFalsy()
  })
  it('should return false if array thrown', () => {
    expect(isArray([])).toBeTruthy()
  })
  it('should return false if null thrown', () => {
    expect(isArray(null)).toBeFalsy()
  })
  it('should return false if undefined thrown', () => {
    expect(isArray(undefined)).toBeFalsy()
  })
  it('should return false if number thrown', () => {
    expect(isArray(1)).toBeFalsy()
  })
  it('should return false if string thrown', () => {
    expect(isArray('test')).toBeFalsy()
  })
})
