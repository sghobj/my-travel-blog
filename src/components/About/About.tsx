import {Box, Container, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import StarRatings from 'react-star-ratings';
import {toREM} from "../../utils/helpers/toREM";
import {AddIcon} from "@chakra-ui/icons";



const About = ({description, skills}) => {

    return(
        <Box id={'about-me'}>

            <SectionHeading text={'About Me'} />

            <SimpleGrid columns={{base: 1, md: 2}} gap={20}>
                <Box p={5} textAlign={'justify'} fontFamily={'Droid Serif,Georgia,serif'} fontSize={20}>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </Box>
                <Box p={5}>
                    <Heading fontFamily={'Roboto'} textAlign={'left'} size={'md'} fontWeight={'600'}>TECHNICAL SKILLS:</Heading>
                    <Box mt={5} textAlign={'left'} w={{base: '90%', md: '50%'}}>
                        {skills.map(skill => {
                            return(
                                <SimpleGrid textAlign={'left'} columns={{base: 1, md: 2}} mb={{base: 4}}>
                                    <Box display={'flex'}>
                                        <AddIcon margin={'auto 0.8rem auto 0rem'} color={'#A15655'} />
                                        <Text fontSize={toREM(16)} color={'#A15655'}>{skill.name}</Text>
                                    </Box>
                                    <StarRatings
                                        rating={skill.rating}
                                        starRatedColor="#F2CF53"
                                        numberOfStars={5}
                                        starDimension={toREM(16)}
                                        name='rating'
                                    />
                                </SimpleGrid>
                            )
                        })}
                    </Box>


                </Box>
            </SimpleGrid>

        </Box>
    )
}

export default About
