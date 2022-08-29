import gql from "graphql-tag";

const GET_CITY_DETAILS = gql`
  query($name: String!) {
      travelCities(filters: {name: {eq: $name}}){
        data{
            id
            attributes{
             name
             text
             images {
                data {
                    attributes {
                        url
                        alternativeText
                        height
                        width
                    }
                }
             }
             country {
                data{
                    attributes{
                        name
                    }
                }
            }
        places{
          name
          description
          images{
            data{
              attributes{
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}`


export default GET_CITY_DETAILS
