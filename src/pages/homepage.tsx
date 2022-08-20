import {Box, Button, Center, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text} from '@chakra-ui/react'
import '../styles/css/home.css'
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import GET_CITIES from "../utils/queries/getCities";
import {useQuery} from "@apollo/client";

const navLinks = [
    {
        title: 'About Me',
        link: '#about-me'
    },
    {
        title: 'Photos',
        link: '/photos'
    },
    {
        title: 'Contact Me',
        link: '/contact'
    },
]

type ImageProps = {
    url: string,
    alternativeText: string
}

const HomePage = () => {

    const [cities, setCities] = useState([])
    const {data} = useQuery(GET_CITIES)


    useEffect(() => {
        if (data) {
            const {travelCities} = data
            setCities(travelCities.data)
        }
    }, [data])

    return (
        <Box position={'relative'}>
            <Box
                w={'100%'}
                px="6"
                py="5"
                bg={'transparent'}
                display={'block'}
                position={'absolute'}
                zIndex={1}
            >
                <HStack sx={{margin: 'auto'}} as="nav" spacing="5">
                    {navLinks.map((item, i) => (
                        <Link href={item.link} key={i}>
                            <Button fontFamily={'Ubuntu'} fontWeight={'normal'} variant="nav"> {item.title} </Button>
                        </Link>
                    ))}
                </HStack>
            </Box>
            <Center top={0} zIndex={-1}>
                <Flex>
                    <Image
                        // boxSize={'100vw'}
                        w={'100vw'}
                        h={'100vh'}
                        opacity={'80%'}
                        objectFit={'cover'}
                        zIndex={-1}
                        src={'https://res.cloudinary.com/dsyxohckg/image/upload/v1660096238/IMG_20210731_161530_66258ba27f.jpg'} />
                </Flex>
            </Center>

            <Container>
                <Box id={'about-me'}
                     sx={{width: '75%', margin: 'auto', border: '1px solid black', backgroundColor: '#FBF8F1'}}>
                    <Heading mt={2}>About Me</Heading>
                    <Box p={5}>
                        <Text textAlign={'justify'}>My name is Sarah Ghobj, a passionate frontend developer, athletic
                                                    and artist. Travelling is one of my other hobbies,
                                                    I love exploring new places and share my experience with others
                                                    maybe it can inspire others when planning next holiday
                                                    destinations.</Text>
                    </Box>
                </Box>

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
                        } = city

                        const {data} = cityImages

                        const {
                            attributes: {
                                url, alternativeText
                            }
                        } = data[0]

                        return (
                            <Box
                                h={{base: 400, md: 450, xl: '100%'}}
                                // w={{base: '100%', sm:'100%', md: 350, lg: 350, xl: '100%'}}
                                key={id}
                            >
                                <Image h={'100%'} w={'100%'} objectFit={'fill'} src={url} />
                            </Box>
                        )

                    })}

                </SimpleGrid>
            </Container>

        </Box>
    )
}

export default HomePage
