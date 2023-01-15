import gql from "graphql-tag";

const GET_CITY_COVER = gql`
query($name: String!) {
      travelCities(filters: {name: {eq: $name}}){
        data{
    id
      attributes{
        cover{
          title
          subtitle
          description
          coverImages{
            data {
              attributes {
                url
              }
            }
          }
          coverImageMobile {
            data {
              attributes {
                url
              }
            }
          }
        }
        
      }
    }
  }
}`

export default GET_CITY_COVER
