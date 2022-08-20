import {gql} from 'graphql-tag'
import {client} from "../../apollo/client";

// const getCities = async () => {
//
//     const {data} = await client.query({
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
