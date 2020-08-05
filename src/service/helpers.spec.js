import { 
  arrayToObject,
  joinDataSourceForQuestionTwo,
  fetchDataForQuestionTwo,
  decorateDataForSwimlane,
} from './helpers'
import { DataService } from "./DataService"
import { rawDataSource, dataSourceResult, decoratedDataSource } from "./fixtures"

describe('Helpers', () => {
  it('arrayToObject', () => {
    const keyField = 'id'
    expect(arrayToObject([
      { id: 'idOne', name: 'lorem' },
      { id: 'idTwo', name: 'ipsum' },
    ], keyField)).toEqual({
      idOne: { id: 'idOne', name: 'lorem' },
      idTwo: { id: 'idTwo', name: 'ipsum' },
    })
  })

  it('joinDataSourceForQuestionTwo', () => {
    expect(joinDataSourceForQuestionTwo(rawDataSource)).toEqual(dataSourceResult)
  })

  it('decorateDataForSwimlane', () => {
    expect(decorateDataForSwimlane(dataSourceResult)).toEqual(decoratedDataSource)
  })

  it('fetchDataForQuestionTwo', async () => {
    jest.spyOn(DataService, 'getResources').mockResolvedValueOnce('resources')
    jest.spyOn(DataService, 'getJobs').mockResolvedValueOnce('jobs')
    jest.spyOn(DataService, 'getActivities').mockResolvedValueOnce('activities')
    jest.spyOn(DataService, 'getJobAllocations').mockResolvedValueOnce('jobAllocations')
    jest.spyOn(DataService, 'getActivityAllocations').mockResolvedValueOnce('activityAllocations')
    const result = await fetchDataForQuestionTwo()
    expect(result).toEqual({
      resources: 'resources',
      activities: 'activities',
      jobs: 'jobs',
      activityAllocations: 'activityAllocations',
      jobAllocations: 'jobAllocations',
    })
  })
})
