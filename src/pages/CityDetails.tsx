import {Box, Container, Grid, GridItem, Heading, Image, ImageProps, Text} from "@chakra-ui/react";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import GET_CITY_DETAILS from "../utils/queries/getCityDetails";
import React, {useEffect, useState} from "react";
import {Helmet} from 'react-helmet'


const CityDetails = () => {

    const [cityName, setCityName] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState()
    const [cityImages, setCityImages] = useState([])
    const [cityPlaces, setCityPlaces] = useState([])

    const {city} = useParams()
    const {data} = useQuery(GET_CITY_DETAILS, {
        variables: {
            name: city
        }
    })

    useEffect(() => {
        if (data) {
            const {travelCities} = data
            const {
                id, attributes: {
                    name, text, country,
                    places, images
                }
            } = travelCities.data[0]


            setCityName(name)
            setDescription(text)
            setCountry(country)
            setCityImages(images.data)
            setCityPlaces(places)

        }

    }, [data])



    return (
        <Box>
            <Helmet>
                <title>`${cityName}, {country}`</title>
                <meta name="description" content="Sharing my travel experience and photos I take while exploring new places" />
            </Helmet>
            <Box>
                {cityImages?.map((image, index) => {

                    const {
                         attributes: {
                            url, alternativeText
                        }
                    } = image

                    return (
                        <Image key={index} src={url} h={{base: '50vh', md: '100vh'}} w={'100vw'} objectFit={'cover'} />
                    )
                })}
            </Box>
            <Container>
                <Heading size={'xl'} sx={{color: 'black'}}>{cityName}</Heading>
                <Box mt={4} textAlign={'justify'}>
                    <Text>{description}</Text>
                </Box>

                <Grid mt={8} templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)'}} gap={4}>
                    {cityPlaces && cityPlaces.map((place, index) => {
                        const {
                            name,
                            images: placeImages,
                            description: placeDescription
                        } = place

                        return (
                            <GridItem key={index}>
                                <Box>
                                    <Box>
                                        {placeImages.data && placeImages.data.map((img, i) => {
                                            const {id, attributes: {
                                                url
                                            }} = img
                                            return(
                                                <Image key={i} src={url} />

                                            )
                                        })
                                        }
                                    </Box>
                                    <Heading size={'md'}>{name}</Heading>
                                </Box>
                            </GridItem>

                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}
export default CityDetails
