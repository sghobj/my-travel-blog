import {Box, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import React from "react";


const About = ({description}) => {

    return(
        <Box id={'about-me'}>
            <Box width={'fit-content'} textAlign={'center'} m={'20px auto'}>
                <Heading mt={3} size={'2xl'} color={'#A15655'}>About Me</Heading>
                <div style={{borderBottom: '2px solid', color: '#F2CF53'}}/>
            </Box>

            <SimpleGrid columns={{base: 1, md: 2}}>
                <Box p={5} textAlign={'justify'} fontFamily={'Droid Serif,Georgia,serif'} fontSize={20}>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </Box>
            </SimpleGrid>

        </Box>
    )
}

export default About
