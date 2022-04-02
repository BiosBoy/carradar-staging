import keyDownHandler, { KEY_TYPES, KEY_CODES } from '..';
import { IKeyDown } from '../interfaces';

describe('keyDownHandler()', () => {
  // @ts-ignore
  const event = new KeyboardEvent('keydown', { keyCode: KEY_CODES.enter }) as KeyboardEvent<HTMLInputElement>;

  it('should fire single keyDownEvent by Enter key', () => {
    const fakeCallback = jest.fn();

    const config: IKeyDown = {
      event,
      keysConfig: [
        {
          type: KEY_TYPES.enter,
          onEvent: fakeCallback
        }
      ]
    };

    keyDownHandler(config);

    expect(fakeCallback.mock.calls.length).toBe(1);
  });
  it("should not fire Event in case if we don't need this", () => {
    const fakeCallback = jest.fn();

    const config = {
      event,
      keysConfig: [
        {
          type: KEY_TYPES.enter,
          onEvent: fakeCallback,
          isDisabled: true
        }
      ]
    };

    keyDownHandler(config);

    expect(fakeCallback.mock.calls.length).toBe(0);
  });
  it('should not fire if wrong key provided', () => {
    const fakeCallback = jest.fn();

    const config = {
      event,
      keysConfig: [
        {
          type: 'fakeKey',
          onEvent: fakeCallback
        }
      ]
    };

    // @ts-ignore
    keyDownHandler(config);

    expect(fakeCallback.mock.calls.length).toBe(0);
  });
  it('should prevent Events bubbling', () => {
    const fakeCallback = jest.fn();

    jest.spyOn(event, 'preventDefault');
    jest.spyOn(event, 'stopPropagation');

    const config = {
      event,
      keysConfig: [
        {
          type: KEY_TYPES.enter,
          onEvent: fakeCallback,
          isPreventBubbling: true
        }
      ]
    };

    // @ts-ignore
    keyDownHandler(config);

    expect(event.preventDefault).toBeCalled();
    expect(event.stopPropagation).toBeCalled();
    expect(fakeCallback.mock.calls.length).toBe(1);
  });
});
