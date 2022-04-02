import React from 'react';
import { mount } from 'enzyme';

import ProgressiveImage from '../index';

describe('ProgressiveImage', () => {
  it('should return common preloader', () => {
    const Component = mount(<ProgressiveImage image={{ path: '960/localStorage.png', alt: 'test' }} />);

    expect(Component.find('div').at(0).prop('className')).toBe('progressiveImagePreloader');
    expect(Component).toMatchSnapshot();
  });
});
