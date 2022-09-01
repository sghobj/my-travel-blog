import {Box, Container, Grid, GridItem, Heading, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import GET_CITY_DETAILS from "../utils/queries/getCityDetails";
import React, {useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async'
import GET_COVER_IMAGE from "../utils/queries/getCoverImage";
import {isMobile, useMobileOrientation} from "react-device-detect";


const CityDetails = () => {

    const [cityName, setCityName] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [cityImages, setCityImages] = useState([])
    const [cityPlaces, setCityPlaces] = useState([])

    const {isPortrait} = useMobileOrientation()

    const {city} = useParams()
    const {data: media} = useQuery(GET_COVER_IMAGE)
    const {data} = useQuery(GET_CITY_DETAILS, {
        variables: {
            name: city
        }
    })

    useEffect(() => {
        if (media) {
            console.log(media)
        }

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
            setCountry(country.data.attributes.name)
            setCityImages(images.data)
            setCityPlaces(places)
        }

    }, [data, media])

    const renderMobileView = () => {
        return(
            <Box>
                {cityImages?.map((image, index) => {
                    const {
                        attributes: {
                            url, alternativeText
                        }
                    } = image

                    return (
                        <Box key={index} justifyContent={'center'}>
                            <Image src={url} w={{base: '100vw'}}
                                   h={{base: '50vh', md: '100vh'}}
                                   objectFit={{base: 'cover'}} m={'auto'} />
                        </Box>
                    )
                })}
            </Box>
        )
    }

    const renderDesktopView = () => {
        return (
            <SimpleGrid columns={{sm: 12, md: 6, lg: 6, xl: 6}} spacing={6}>
                <VStack>

                </VStack>
                <Box>
                    {cityImages?.map((image, index) => {
                        const {
                            attributes: {
                                url, alternativeText
                            }
                        } = image

                        return (
                            <Box key={index} justifyContent={'center'}>
                                <Image src={url} w={{base: '100vw'}}
                                       h={{base: '50vh', md: '100vh'}}
                                       objectFit={{base: 'cover'}} m={'auto'} />
                            </Box>
                        )
                    })}
                </Box>
            </SimpleGrid>

        )
    }


    return (
        <Box>
            <Helmet>
                <title>{cityName}</title>
                <meta name="description"
                      content="Sharing my travel experience and photos I take while exploring new places" />
            </Helmet>
            <Box>
                {isMobile ? renderMobileView() : renderDesktopView()}
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
                                            const {
                                                id, attributes: {
                                                    url
                                                }
                                            } = img
                                            return (
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
