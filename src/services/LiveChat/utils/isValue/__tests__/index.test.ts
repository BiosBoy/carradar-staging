import isValue from '../'

import { zero, bool, undef, nulled } from '../mocks'

describe('isValue', () => {
  it('isValue should return true in case of 0', () => {
    expect(isValue(zero)).toBeTruthy()
  })
  it('isValue should return true in case of false ', () => {
    expect(isValue(bool)).toBeTruthy()
  })
  it('isValue should return false in case of undefined', () => {
    expect(isValue(undef)).toBeFalsy()
  })
  it('isValue should return false in case of null', () => {
    expect(isValue(nulled)).toBeFalsy()
  })
})
