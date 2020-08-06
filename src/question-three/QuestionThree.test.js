import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { QuestionThree } from './QuestionThree'
import * as helpers from '../service/helpers'

jest.mock('./JobDetail', () => ({
  JobDetail: () => <div data-testid="job-detail" />,
}))

describe('QuestionThree', () => {
  let useEffect
  const mockUseEffectMount = () => useEffect.mockImplementation((f) => f())

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect')
    mockUseEffectMount()
    helpers.fetchDataForQuestionThree = jest.fn(() => Promise.resolve({ result: 'ok' }))
    helpers.joinDataSourceForQuestionThree = jest.fn(() => [{ id: 1}, {id: 2}])
  })

  it('renders', async () => {
    expect(render(<QuestionThree />)).toMatchSnapshot()
    await waitFor(() => screen.getAllByTestId('job-detail'))
  })
});
