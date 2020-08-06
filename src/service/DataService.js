import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const graphClient = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

export const DataService = {
  getJobsWithSearchTerm: (searchTerm) => {
    return graphClient.query({
      query: gql`
      query ($searchTerm: String){
        jobs(name: $searchTerm) {
          name,
          start,
          end,
          contact {
            id
            name
          }
        }
      }
      `,
      variables: {
        searchTerm: searchTerm
      }
    })
      .then(result => result.data)
      .then(data => data.jobs)
  },

  getJobs: async () => {
    const result = await graphClient.query({
      query: gql`
      query {
        jobs {
          id, name, start, end, location,
        }
      }
      `})
    return result.data.jobs
  },

  getActivities: async () => {
    const result = await graphClient.query({
      query: gql`
      query {
        activities {
          id, name, start, end
        }
      }
      `})
    return result.data.activities
  },

  getResources: async () => {
    const result = await graphClient.query({
      query: gql`
      query {
        resources {
          id, name
        }
      }
      `})
    return result.data.resources
  },

  getJobAllocations: async () => {
    const result = await graphClient.query({
      query: gql`
      query {
        jobAllocations {
          id,
          resource {
            id, name
          },
          job {
            id, name
          }
        }
      }
      `})
    return result.data.jobAllocations
  },

  getActivityAllocations: async () => {
    const result = await graphClient.query({
      query: gql`
      query {
        activityAllocations {
          id,
          resource {
            id, name
          },
          activity {
            id, name
          }
        }
      }
      `})
    return result.data.activityAllocations
  },
}