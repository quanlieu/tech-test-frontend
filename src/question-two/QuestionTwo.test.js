import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { QuestionTwo } from './QuestionTwo'
import * as helpers from '../service/helpers'

jest.mock('../components/swimlane/Swimlane', () => ({
  Swimlane: () => <div data-testid="swimlane" />,
}))

describe('QuestionTwo', () => {
  let useEffect
  const mockUseEffectMount = () => useEffect.mockImplementation((f) => f())

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect')
    mockUseEffectMount()
    helpers.fetchDataForQuestionTwo = jest.fn(() => Promise.resolve({ result: 'ok' }))
    helpers.joinDataSourceForQuestionTwo = jest.fn()
    helpers.decorateDataForSwimlane = jest.fn()
  })

  it('renders', async () => {
    expect(render(<QuestionTwo />)).toMatchSnapshot()
    await waitFor(() => screen.getByTestId('swimlane'))
  })
});
