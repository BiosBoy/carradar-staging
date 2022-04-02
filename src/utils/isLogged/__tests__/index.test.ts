import getUserID from '..';

const COOKIE_HOLDER = {
  uid: null
};

describe('getUserID()', () => {
  beforeAll(() => {
    COOKIE_HOLDER.uid = '1212123';

    // set fake cookie for node window scope
    if (!Object.prototype.hasOwnProperty.call(window, 'getCookie')) {
      Object.defineProperty(window, 'getCookie', {
        enumerable: true,
        writable: true,
        configurable: true,
        value: (key: string | number): string => COOKIE_HOLDER[String(key)]
      });
    }
  });

  it('getKeyByValue should "null" in case of missing user ID between cookie data', () => {
    delete COOKIE_HOLDER.uid;

    expect(getUserID()).toBe(false);
  });
});
