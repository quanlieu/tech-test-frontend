import React from 'react';
import { render } from '@testing-library/react';
import { JobDetail } from './JobDetail';

test('renders JobDetail', () => {
  const job = {
    id: "0",
    name: "Build a fence",
    start: "2018-09-01T10:00:00Z",
    end: "2018-09-01T11:00:00Z",
    location: "Brisbane",
    allocationCount: 1,
  }
  expect(render(<JobDetail job={job} />)).toMatchSnapshot()
})

