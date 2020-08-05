import ApolloClient from 'apollo-boost'
import { DataService } from './DataService'
import db from '../server/db.json'

jest.mock('apollo-boost')

describe('DataService', () => {
  beforeEach(() => {
    jest.spyOn(ApolloClient.prototype, 'query').mockResolvedValueOnce({ data: db })
  })
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('getJobsWithSearchTerm', async () => {
    const result = await DataService.getJobsWithSearchTerm('jobs')
    expect(result).toEqual(db.jobs)
  })

  it('getJobs', async () => {
    const result = await DataService.getJobs()
    expect(result).toEqual(db.jobs)
  })

  it('getActivities', async () => {
    const result = await DataService.getActivities()
    expect(result).toEqual(db.activities)
  })

  it('getResources', async () => {
    const result = await DataService.getResources()
    expect(result).toEqual(db.resources)
  })

  it('getActivityAllocations', async () => {
    const result = await DataService.getActivityAllocations()
    expect(result).toEqual(db.activityAllocations)
  })

  it('getJobAllocations', async () => {
    const result = await DataService.getJobAllocations()
    expect(result).toEqual(db.jobAllocations)
  })
})
