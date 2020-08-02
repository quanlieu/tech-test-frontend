import React from 'react';
import { render } from '@testing-library/react';
import { JobCard } from './JobCard';

test('renders JobCard', () => {
  expect(render(
    <JobCard
        item={{
        name: 'Build a fence',
        start: '2018-09-01T10:00:00Z',
        end: '2018-09-01T11:00:00Z',
        contact: { id: '0', name: 'John Smith', __typename: 'Contact' },
      }}
    />
  )).toMatchSnapshot()
})
