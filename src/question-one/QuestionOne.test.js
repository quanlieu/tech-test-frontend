import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { renderItem, QuestionOne } from './QuestionOne';

jest.mock('antd', () => ({
  Input: {
    Search: ({ onChange }) => <input type='text' data-testid='search' onChange={onChange} />,
  },
  Skeleton: () => <div data-testid="job-list" />,
  List: ({ renderItem }) => <div data-testid='list' onChange={renderItem} />,
  Divider: () => <hr />,
}))
jest.mock('lodash/debounce', () => jest.fn(fn => fn))

describe('QuestionOne', () => {
  let props
  beforeEach(() => {
    props = {
      service: {
        getJobsWithSearchTerm: jest.fn(),
      },
    }
  })

  it('renders', () => {
    expect(render(<QuestionOne {...props} />)).toMatchSnapshot()
    expect(renderItem('item')).toMatchSnapshot()
  })
  

  it('Job list should be in screen when user input at least 3 characters', async () => {
    render(<QuestionOne {...props} />)
    fireEvent.change(screen.getByTestId('search'), { target: { value: 'TEST VALUE' } })
    expect(props.service.getJobsWithSearchTerm).toHaveBeenCalledWith('TEST VALUE')
    await waitFor(() => screen.getByTestId('job-list'))
    fireEvent.change(screen.getByTestId('search'), { target: { value: '' } })
    expect(screen.queryByTestId('job-list')).toBe(null)
  })

  it('Should not call service if input is less than 3 characters', async () => {
    render(<QuestionOne {...props} />)
    fireEvent.change(screen.getByTestId('search'), { target: { value: '12' } })
    expect(props.service.getJobsWithSearchTerm).not.toHaveBeenCalled()
  })
})
