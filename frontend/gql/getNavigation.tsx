import { gql } from 'graphql-tag'

export const getNavigation = gql`
query getNavigation {
  navigation(publicationState: LIVE) {
    data {
      attributes {
        navItems {
          title
          url
        }
      }
    }
  }
}
`