import {gql} from 'graphql-tag'
import {client} from "../../apollo/client";

const getCityDetails = async (id) => {

    const {data} = await client.query({
        query: gql`
        query {
  travelCity(id: ${id}){
    data{
      id
      attributes{
        name
        text
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
    })
    return data
}

export default getCityDetails
