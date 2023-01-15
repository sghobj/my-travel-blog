import {Box, Heading, Image, Link, SimpleGrid} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import GET_CITIES from "../../utils/queries/getCities";


type gridProps = {
    cities: []
}

const PhotoGrid = () => {

    const [cities, setCities] = useState([])
    const {data} = useQuery(GET_CITIES)


    useEffect(() => {
        if (data) {
            const {travelCities} = data
            setCities(travelCities.data)
            console.log(data)
        }

    }, [data])

    return (
        <>
            <Box width={'fit-content'} textAlign={'center'} m={'20px auto'}>
                <Heading mt={3} size={'2xl'} color={'#A15655'}>Gallery</Heading>
                <div style={{borderBottom: '2px solid', color: '#F2CF53'}}/>
            </Box>
            <SimpleGrid columns={2} alignItems={'center'} mt={4} mb={4}>
                <Heading size={'lg'} fontFamily={'Ubuntu'} textAlign={'left'}>Gallery</Heading>
                <Link variant={'h4'} textAlign={'right'} color={'#30D5C8'}>Check more <ArrowForwardIcon /> </Link>
            </SimpleGrid>
            <SimpleGrid m={'auto'} columns={{base: 1, sm: 2, md: 2, lg: 3, xl: 4}} spacing={4}>
                {cities?.map((city) => {
                    const {
                        id, attributes: {
                            name, images: cityImages, text, country
                        }
                    } = city;

                    const {
                        attributes: {
                            url
                        }
                    } = cityImages.data


                    return (
                        <Box
                            h={{base: 400, md: 450, xl: '90%'}}
                            // w={{base: '100%', sm:'100%', md: 350, lg: 350, xl: '100%'}}
                            key={id}
                        >
                            <Link href={`/${name}`}>
                                <Image h={'100%'} w={'100%'} objectFit={'fill'} src={url} />
                            </Link>
                        </Box>
                    );

                })}

            </SimpleGrid>
        </>
    )
}

export default PhotoGrid
