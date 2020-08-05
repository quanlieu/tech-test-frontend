import { DataService } from "./DataService"

export const arrayToObject = (array, keyField) => array.reduce((obj, item) => {
  obj[item[keyField]] = item
  return obj
}, {})

export const joinDataSourceForQuestionTwo = ({ resources, activities, jobs, activityAllocations, jobAllocations }) => {
  const activitiesObj = arrayToObject(activities, 'id')
  const jobsObj = arrayToObject(jobs, 'id')
  const resourcesObj = arrayToObject(resources.map(r => ({ ...r, activities: [], jobs: [] })), 'id')
  activityAllocations.forEach(ele => {
    resourcesObj[ele.resource.id].activities.push(activitiesObj[ele.activity.id])
  });
  jobAllocations.forEach(ele => {
    resourcesObj[ele.resource.id].jobs.push(jobsObj[ele.job.id])
  });
  return Object.values(resourcesObj)
}

export const fetchDataForQuestionTwo = async () => {
  const {
    getResources, getActivities, getJobs, getActivityAllocations, getJobAllocations,
  } = DataService
  const [
    resources, activities, jobs, activityAllocations, jobAllocations
  ] = await Promise.all([
    getResources(), getActivities(), getJobs(), getActivityAllocations(), getJobAllocations(),
  ])
  return { resources, activities, jobs, activityAllocations, jobAllocations }
}

export const decorateDataForSwimlane = (dataSource) => {
  return dataSource.map(record => ({
    title: record.name,
    cards: [
      ...record.activities.map(activity => ({
        style: {
          backgroundColor: 'lightsalmon',
          color: 'darkred',
        },
        className: 'cardContent',
        description: activity.name,
        start: new Date(activity.start),
        end: new Date(activity.end),
      })),
      ...record.jobs.map(job => ({
        style: {
          backgroundColor: 'palegreen',
          color: 'darkgreen',
        },
        className: 'cardContent',
        description: job.name,
        start: new Date(job.start),
        end: new Date(job.end),
      })),
    ]
  }))
}
