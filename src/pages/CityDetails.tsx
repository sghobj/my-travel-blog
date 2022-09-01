import {Box, Container, Grid, GridItem, Heading, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import GET_CITY_DETAILS from "../utils/queries/getCityDetails";
import React, {useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async'
import {isMobile, useMobileOrientation} from "react-device-detect";
import Navigation from "../components/navigation/navigation";


const CityDetails = () => {

    const [cityName, setCityName] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [cityImages, setCityImages] = useState([])
    const [cityPlaces, setCityPlaces] = useState([])

    const {isPortrait} = useMobileOrientation()

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
            setCountry(country.data.attributes.name)
            setCityImages(images.data)
            setCityPlaces(places)
        }

    }, [data])

    const renderMobileView = () => {
        return (
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
            <Box>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 2, xl: 2}} position={'relative'}>
                    <Box display={'flex'} w={{lg: '30rem'}} h={{lg: '30rem'}} bg={'gray'} m={ 'auto'} borderRadius={'50%'}>
                        <Box display={'flex'} w={{lg: '80%'}} h={{lg: '80%'}} bg={'white'} m={ 'auto'} borderRadius={'50%'}>
                            <Heading variant={'h2'} size={'4xl'} m={{sm: '1rem auto', md: 'auto auto'}}>{cityName}</Heading>
                        </Box>
                    </Box>
                    <Box>
                        {cityImages?.map((image, index) => {
                            const {
                                attributes: {
                                    url, alternativeText
                                }
                            } = image

                            return (
                                <Box key={index} justifyContent={'center'} p={{sm: 10}}>
                                    <Image src={url} w={700}
                                           h={700}
                                           objectFit={'cover'} m={'auto'} />
                                </Box>
                            )
                        })}
                    </Box>
                </SimpleGrid>

                {description &&
                <Container w={{lg: '50%'}} p={'20px 40px'}>
                    <VStack m={'auto'}>
                        <Heading size={'xl'}>Description</Heading>
                        <Text textAlign={'justify'}>{description}</Text>
                    </VStack>
                </Container>
                }
            </Box>
        )
    }

    return (
        <Box>
            <Helmet>
                <title>{cityName}</title>
                <meta name="description"
                      content="Sharing my travel experience and photos I take while exploring new places" />
            </Helmet>
            <Navigation home={false} />
            <Box w={'100%'}>
                {isMobile ? renderMobileView() : renderDesktopView()}
            </Box>
            <Container>
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
