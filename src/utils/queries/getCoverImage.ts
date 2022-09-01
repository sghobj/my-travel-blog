import gql from "graphql-tag";

const GET_COVER_IMAGE = gql`
query {
    cityDetailsPage{
        data {
            attributes{
                cover {
                    data {
                        attributes {
                            url
                            caption
                            alternativeText
                            height
                            width
                        }
                    }
                }
            }
        }
    }
}`

export default GET_COVER_IMAGE
