import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../';

test('test Icon component', () => {
    const component = renderer.create(<Icon />);
    const icon = component.toJSON();

    expect(icon).toMatchSnapshot();
});
