import React from 'react';
import { render } from '@testing-library/react';
import { HeaderComponent } from './HeaderComponent';

test('renders HeaderComponent', () => {
  expect(render(<HeaderComponent />)).toMatchSnapshot()
})
