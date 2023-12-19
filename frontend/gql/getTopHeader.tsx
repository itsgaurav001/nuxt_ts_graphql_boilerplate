import { gql } from 'graphql-tag'

export const getTopHeader = gql`
query getTopHeader {
  topHeader {
    data {
      attributes {
        logoTitle
        logoSubtitle
        leftLinks {
          title
          url
        }
      }
    }
  }
}
`