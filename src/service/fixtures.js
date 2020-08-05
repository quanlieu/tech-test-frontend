export const rawDataSource = {
  resources: [
    { id: '0', name: 'Sam Seaborn' },
    { id: '1', name: 'Donna Moss' },
    { id: '2', name: 'Toby Ziegler' },
  ],
  activities: [
    {
      id: '0',
      name: 'Attend Training',
      start: '2018-09-01T15:00:00Z',
      end: '2018-09-01T17:30:00Z',
    },
    {
      id: '1',
      name: 'Meal Break',
      start: '2018-09-01T12:15:00Z',
      end: '2018-09-01T13:10:00Z',
    },
  ],
  jobs: [
    {
      id: '0',
      name: 'Build a fence',
      start: '2018-09-01T10:00:00Z',
      end: '2018-09-01T11:00:00Z',
    },
    {
      id: '1',
      name: 'Build a shed',
      start: '2018-09-01T10:15:00Z',
      end: '2018-09-01T11:00:00Z',
    },
    {
      id: '2',
      name: 'Shield some wiring',
      start: '2018-09-01T09:00:00Z',
      end: '2018-09-01T13:00:00Z',
    },
    {
      id: '3',
      name: 'Pick up a trailer',
      start: '2018-09-01T13:00:00Z',
      end: '2018-09-01T13:15:00Z',
    },
  ],
  activityAllocations: [
    {
      id: '0',
      resource: { id: '1', name: 'Donna Moss' },
      activity: { id: '1', name: 'Meal Break' },
    },
    {
      id: '1',
      resource: { id: '2', name: 'Toby Ziegler' },
      activity: { id: '1', name: 'Meal Break' },
    },
  ],
  jobAllocations: [
    {
      id: '0',
      resource: { id: '1', name: 'Donna Moss' },
      job: { id: '1', name: 'Build a shed' },
    },
    {
      id: '1',
      resource: { id: '0', name: 'Sam Seaborn' },
      job: { id: '2', name: 'Shield some wiring' },
    },
  ],
}

export const dataSourceResult = [
  {
    id: '0',
    name: 'Sam Seaborn',
    activities: [],
    jobs: [
      {
        id: '2',
        name: 'Shield some wiring',
        start: '2018-09-01T09:00:00Z',
        end: '2018-09-01T13:00:00Z',
      },
    ],
  },
  {
    id: '1',
    name: 'Donna Moss',
    activities: [
      {
        id: '1',
        name: 'Meal Break',
        start: '2018-09-01T12:15:00Z',
        end: '2018-09-01T13:10:00Z',
      },
    ],
    jobs: [
      {
        id: '1',
        name: 'Build a shed',
        start: '2018-09-01T10:15:00Z',
        end: '2018-09-01T11:00:00Z',
      },
    ],
  },
  {
    id: '2',
    name: 'Toby Ziegler',
    activities: [
      {
        id: '1',
        name: 'Meal Break',
        start: '2018-09-01T12:15:00Z',
        end: '2018-09-01T13:10:00Z',
      },
    ],
    jobs: [],
  },
]

export const decoratedDataSource = [
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
        start: new Date("2018-09-01T10:15:00.000Z"),
        end: new Date("2018-09-01T11:00:00.000Z"),
      },
    ],
  },
  {
    title: "Toby Ziegler",
    cards: [
      {
        style: { backgroundColor: "lightsalmon", color: "darkred" },
        className: "cardContent",
        description: "Meal Break",
        start: new Date("2018-09-01T12:15:00.000Z"),
        end: new Date("2018-09-01T13:10:00.000Z"),
      },
    ],
  },
]
