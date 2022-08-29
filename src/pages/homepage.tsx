import {Box, Button, Center, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text} from '@chakra-ui/react'
import '../styles/css/home.css'
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import GET_CITIES from "../utils/queries/getCities";
import {useQuery} from "@apollo/client";
import About from "../components/About/About";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";



type ImageProps = {
    url: string,
    alternativeText: string
}

const HomePage = () => {

    return (
        <Box position={'relative'}>
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
                <About/>

                <PhotoGrid/>
            </Container>

        </Box>
    )
}

export default HomePage
