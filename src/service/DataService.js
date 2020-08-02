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
}