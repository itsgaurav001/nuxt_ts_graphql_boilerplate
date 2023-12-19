import { gql } from 'graphql-tag'

export const getPages = gql`
query getPages ($filters : PageFiltersInput!) {
  pages (filters: $filters) {
    data {
      id
      attributes {
        title
        slug
        blocks {
          ...on ComponentBlocksRichText {
            __typename
            text
          }
          ...on ComponentBlocksSingleImage {
            image {
              data {
                attributes {
                  url
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`