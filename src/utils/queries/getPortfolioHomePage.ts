import gql from "graphql-tag";

const GET_PORTFOLIO_HOMEPAGE = gql`
query {
      homePage {
    data {
      attributes {
        cover {
          title
          subtitle
          description
          coverImages {
            data {
              attributes {
                url
                caption
                alternativeText
              }
            }
          }
          coverImageMobile {
            data {
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
        }
      }
    }
  }
}`

export default GET_PORTFOLIO_HOMEPAGE
