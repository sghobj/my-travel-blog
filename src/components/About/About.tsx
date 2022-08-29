import {Box, Heading, Text} from "@chakra-ui/react";


const About = () => {

    return(
        <Box id={'about-me'}
             sx={{
                 width: {md: '100%', lg: '75%'},
                 margin: 'auto',
                 border: '1px solid black',
                 backgroundColor: '#FBF8F1'}}>
            <Heading mt={2}>About Me</Heading>
            <Box p={5}>
                <Text textAlign={'justify'}>My name is Sarah Ghobj, a passionate frontend developer, athletic
                                            and artist. Travelling is one of my other hobbies,
                                            I love exploring new places and share my experience with others
                                            maybe it can inspire others when planning next holiday
                                            destinations.</Text>
            </Box>
        </Box>
    )
}

export default About
