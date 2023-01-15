import {Box, Heading} from "@chakra-ui/react";
import React from "react";


const SectionHeading = ({text}) => {

    return(
        <Box width={'fit-content'} textAlign={'center'} m={'20px auto'}>
            <Heading mt={3} size={'2xl'} color={'#A15655'}>{text}</Heading>
            <div style={{borderBottom: '2px solid', color: '#F2CF53'}}/>
        </Box>
    )
}

export default SectionHeading
