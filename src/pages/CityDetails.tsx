import {Box, Container, Grid, GridItem, Heading, Image, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import {useQuery} from "@apollo/client";
import {useLocation, useParams} from "react-router-dom";
import GET_CITY_DETAILS from "../utils/queries/getCityDetails";
import React, {useCallback, useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async'
import {isMobile, useMobileOrientation} from "react-device-detect";
import Navigation from "../components/navigation/navigation";
import Query from "../components/query/Query";
import GET_COVER_IMAGE from "../utils/queries/getCoverImage";
import ReactMarkdown from 'react-markdown'
import HeaderImageMobile from "../components/Svg/HeaderImageMobile";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import CardNavigation from "../components/cardNavigation/CardNavigation";
import ResponsiveGallery from 'react-responsive-gallery'

type GalleryProps = {
    url: string,
    width: number,
    height: number
}

const CityDetails = () => {


    const [cityName, setCityName] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [cityImage, setCityImage] = useState('')
    const [cityPlaces, setCityPlaces] = useState([])
    const [chapters, setChapters] = useState([])

    const {isPortrait} = useMobileOrientation()

    const {city} = useParams()
    const {data} = useQuery(GET_CITY_DETAILS, {
        variables: {
            name: city
        }
    })

    const thingstodoimgs = [
        {
            src: 'https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg',
        },
        {
            src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'

        },
        {
            src: 'https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg'
        }
    ]

    useEffect(() => {

        if (data) {
            const {travelCities} = data
            const {
                id, attributes: {
                    name, text, country: countryName,
                    places, images,
                    chapter
                }
            } = travelCities.data[0]

            setCityName(name)
            setDescription(text)
            setCountry(countryName.data.attributes.name)
            setCityImage(images.data.attributes.url)
            setCityPlaces(places)
            setChapters(chapter)
        }

    }, [data])

    const renderMobileView = () => {
        return (
            <Box>
                        <Box >
                            <Box>
                                <Image src={cityImage}
                                       w={{base: '100vw'}}
                                       h={{base: '60vh', md: '100vh'}}
                                       clipPath={'url(#svgHeader)'}
                                       objectFit={{base: 'cover'}} m={'auto'}
                                       borderRadius={'0% 0% 60% 70% / 0% 0% 8% 20%'}
                                />
                                {/*<HeaderImageMobile id={'svgHeader'}/>*/}
                            </Box>
                            <Breadcrumb p={4} items={[{title: 'Home', pathname: '/'},{title: country, pathname: `/${country}`}, {title: cityName, pathname: `/${cityName}`}]}/>
                        </Box>


                <SimpleGrid columns={{sm: 1, md: 2, lg: 2, xl: 2}} position={'relative'}>
                        <Box p={{base: 0, sm: isMobile && !isPortrait ? 0 : 10}}>
                            <Container w={{base: '100%', lg: '60%'}}  pt={0}>
                                <VStack m={'auto'} w={'100%'} display={'block'}>
                                    {cityName && <Heading size={'xl'} fontFamily={'Marhey'} fontWeight={300} textAlign={'left'} color={"black"}>{cityName}</Heading>}
                                    {/*{cover.subtitle && <Heading size={'md'} textAlign={'left'} fontWeight={200}>{cover.subtitle}</Heading>}*/}
                                    {/*{cover.description && <Heading size={'md'} textAlign={'left'} variant={'secondary'}>{cover.description}</Heading>}*/}
                                    <Box fontFamily={'Handlee'} fontSize={'1.2rem'} textAlign={'justify'}>
                                        <ReactMarkdown>{description}</ReactMarkdown>
                                    </Box>
                                </VStack>
                            </Container>

                        </Box>
                    <Container p={'0 30px'}>
                        <CardNavigation />
                    </Container>
                    {/*<SimpleGrid columns={3} p={10}>*/}
                    {/*    {cityImages.map((img, index) => {*/}

                    {/*        return(*/}
                    {/*            <Image key={index} src={img.attributes.url} />*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</SimpleGrid>*/}
                    <Container>
                        <Heading id={'todo'} size={'lg'} fontFamily={'Marhey'} fontWeight={300} textAlign={'left'} color={"black"}>Thing to do in Amman</Heading>
                        <Text fontFamily={'Handlee'} fontSize={'1.2rem'} textAlign={'justify'}>
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                        </Text>
                        <ResponsiveGallery images={thingstodoimgs} />


                        <Heading mt={8} id={'transport'} size={'lg'} fontFamily={'Marhey'} fontWeight={300} textAlign={'left'} color={"black"}>Transportation tips</Heading>
                        <Text fontFamily={'Handlee'} fontSize={'1.2rem'} textAlign={'justify'}>
                            There are so many things that you can do in Amman, either during the day or at night, especially in the summer.
                        </Text>
                    </Container>
                </SimpleGrid>
            </Box>
        )
    }

    const renderDesktopView = () => {
        return (
            <Box>
                <Query query={GET_COVER_IMAGE} slug={undefined}>
                    {({data: {cityDetailsPage}}) => {
                        const {cover: { data: {
                            attributes: {url:imgUrl}}
                        }} = cityDetailsPage.data.attributes

                        return(
                            <Box sx={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100vw 100vh'}} h={{base: '70vh',sm: '70vh', md: '60vh', lg:'70vh'}}>
                                {/*{cover && <SimpleGrid columns={{md: 1, lg: 2}} m={'auto'} h={'100%'} p={5}>*/}
                                {/*    <VStack color={'white'} m={'auto'}>*/}
                                {/*        <Heading variant={'h2'} size={'4xl'} m={{sm: '1rem auto', md: '1rem auto'}}*/}
                                {/*                 textDecoration={'underline'}>{cityName.toUpperCase()}</Heading>*/}
                                {/*        <Heading sx={{fontSize: '1.5rem'}}>{cover.description}</Heading>*/}
                                {/*    </VStack>*/}
                                {/*</SimpleGrid>*/}
                                {/*}*/}
                            </Box>

                        )
                    }}


                </Query>

                <SimpleGrid columns={{sm: 1, md: 2, lg: 2, xl: 2}} position={'relative'}>
                    <Box>
                        <Box justifyContent={'center'} p={{sm: 10}}>
                            {description &&
                            <Container w={{lg: '60%'}} p={'20px 0px'}>
                                <VStack m={'auto'} textAlign={'justify'}>
                                    <ReactMarkdown children={description} />
                                </VStack>
                            </Container>
                            }
                        </Box>
                    </Box>
                    <SimpleGrid columns={3} p={10}>

                                <Image src={cityImage} />


                    </SimpleGrid>
                </SimpleGrid>
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
            <Navigation home={true} />
            <Box w={'100%'}>
                {isMobile ? renderMobileView() : renderDesktopView()}
            </Box>
            <Container>
                <Grid mt={8}
                      templateColumns={{
                          base: 'repeat(1, 1fr)',
                          sm:  'repeat(3, 1fr)',
                          md: 'repeat(4, 1fr)',
                          lg: 'repeat(6, 1fr)',
                      }}
                      gap={10}>
                    {cityPlaces && cityPlaces.map((place, index) => {
                        const {
                            name,
                            images: placeImages,
                            description: placeDescription
                        } = place

                        return (
                            <GridItem key={index}>
                                <Box border={'1.2px solid gray'} p={2}>
                                    <Box>
                                                <Image  w={'100%'} src={placeImages.data[0].attributes.url} />
                                    </Box>
                                    <Heading size={'md'} m={'10px 0'}>{name}</Heading>
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
