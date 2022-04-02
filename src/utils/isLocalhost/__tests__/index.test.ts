import isDev from '..';

describe('isDev()', () => {
  it('should return false', () => {
    delete window.location;

    window.location = {
      origin: 'http://localhost',
      host: 'localhost'
    } as any;

    expect(isDev()).toBeTruthy();
  });
  it('should return true', () => {
    delete window.location;

    window.location = {
      origin: 'http://localhost',
      host: 'localhost'
    } as any;

    expect(isDev()).toBeTruthy();
  });
});
