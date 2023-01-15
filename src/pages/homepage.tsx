import {Box, Button, Center, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text} from '@chakra-ui/react'
import '../styles/css/home.css'
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import About from "../components/About/About";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";
import Navigation from "../components/navigation/navigation";
import GET_PORTFOLIO_HOMEPAGE from "../utils/queries/getPortfolioHomePage";



type ImageProps = {
    url: string,
    alternativeText: string
}

const HomePage = () => {

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [aboutMe, setAboutMe] = useState('')


    const {data} = useQuery(GET_PORTFOLIO_HOMEPAGE)

    useEffect(() => {
        if (data) {
            const {homePage} = data

            const {cover: {
                title, subtitle,
                description,
                coverImages,
                coverImageMobile
            }} = homePage.data.attributes

            setAboutMe(description)
            setTitle(title)
            setSubTitle(subtitle)
            setUrl(coverImages.data.attributes.url)
        }
    }, [data])

    return (
        <Box position={'relative'}>
            <Navigation home={true} />
            <Center top={0} zIndex={-1}>
                <Flex>
                    <Image
                        // boxSize={'100vw'}
                        w={'100vw'}
                        h={'100vh'}
                        opacity={'80%'}
                        objectFit={'cover'}
                        zIndex={-1}
                        src={url} />
                </Flex>
            </Center>
            <Box position={'absolute'} top={'50vh'} left={'50vw'} textAlign={'left'} w={'30%'} fontFamily={'Droid Serif,Georgia,serif'} color={'white'}>
                <Heading>{title}</Heading>
                <Button colorScheme={'whiteAlpha'} color={'black'} className={'coverBtns'}>About Me</Button>
                <Button colorScheme={'whiteAlpha'} color={'black'} className={'coverBtns'}>Contact Me</Button>
            </Box>

            <Container>
                <About description={aboutMe}/>

                <PhotoGrid/>
            </Container>

        </Box>
    )
}

export default HomePage
