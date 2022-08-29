import {Box, Heading, Image, Link, SimpleGrid} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
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
        }
    }, [data])

    return (
        <>
            <SimpleGrid columns={2} alignItems={'center'} mt={4} mb={4}>
                <Heading size={'lg'} fontFamily={'Ubuntu'} textAlign={'left'}>Gallery</Heading>
                <Link variant={'h4'} textAlign={'right'} color={'#30D5C8'}>Check more <ArrowForwardIcon /> </Link>
            </SimpleGrid>
            <SimpleGrid m={'auto'} columns={{base: 1, sm: 2, md: 2, lg: 3, xl: 4}} spacing={6}>
                {cities?.map((city) => {
                    const {
                        id, attributes: {
                            name, images: cityImages, text, country
                        }
                    } = city;

                    const {data} = cityImages;

                    const {
                        attributes: {
                            url, alternativeText
                        }
                    } = data[0];

                    return (
                        <Box
                            h={{base: 400, md: 450, xl: '100%'}}
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
