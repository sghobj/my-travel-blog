import {gql} from 'graphql-tag'

        const GET_CITIES =  gql`
            query {
  travelCities{
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
              }
            }
          }
        }
      }
    }
  }
}`
//     })
//     return data
// }
//
export default GET_CITIES
