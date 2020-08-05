import React from 'react'
import { render } from '@testing-library/react'
import { Swimlane } from './Swimlane'

describe('Swimlane', () => {
  it('renders', async () => {
    const lanes = [
      {
        title: "Sam Seaborn",
        cards: [
          {
            style: { backgroundColor: "palegreen", color: "darkgreen" },
            className: "cardContent",
            description: "Shield some wiring",
            start: new Date("2018-09-01T09:00:00.000Z"),
            end: new Date("2018-09-01T13:00:00.000Z"),
          },
        ],
      },
      {
        title: "Donna Moss",
        cards: [
          {
            style: { backgroundColor: "lightsalmon", color: "darkred" },
            className: "cardContent",
            description: "Meal Break",
            start: new Date("2018-09-01T12:15:00.000Z"),
            end: new Date("2018-09-01T13:10:00.000Z"),
          },
          {
            style: { backgroundColor: "palegreen", color: "darkgreen" },
            className: "cardContent",
            description: "Build a shed",
            start: new Date("2018-09-01T11:00:00.000Z"),
            end: new Date("2018-09-01T10:15:00.000Z"),
          },
        ],
      },
      {
        title: "Toby Ziegler",
        cards: [
          {
            description: "Meal Break",
            start: new Date("2018-09-01T12:15:00.000Z"),
            end: new Date("2018-09-01T13:10:00.000Z"),
          },
        ],
      },
    ]
    expect(render(
      <Swimlane 
        start={new Date('2018-09-01T00:00:00Z')}
        end={new Date('2018-09-01T24:00:00Z')}
        lanes={lanes}
      />
    )).toMatchSnapshot()
  })
});
