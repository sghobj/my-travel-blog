import {Box, Button, HStack, Link} from "@chakra-ui/react";
import {isMobile} from 'react-device-detect'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import MobileNav from "./mobileNavigation";

const navLinks = [
    {
        title: 'Home',
        link: '/'
    },
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

const Navigation = ({home}) => {

    useEffect(() => {

    }, [isMobile])

    return(
        <Box position={'relative'} >
            {isMobile ? <MobileNav /> :
                <Box
                    w={'100%'}
                    m={'auto'}
                    px="6"
                    py="5"
                    bg={'transparent'}
                    display={'flex'}
                    position={home ? 'absolute' : 'relative'}
                    zIndex={1}
                >
                    <HStack sx={{margin: 'auto', backgroundColor: 'rgba(255,255,255,0.6)'}} as="nav" spacing="5">
                        {navLinks.map((item, i) => (
                            <Link href={item.link} key={i}>
                                <Button fontFamily={'Ubuntu'} fontWeight={'normal'} variant="nav"
                                        color={'black'}> {item.title} </Button>
                            </Link>
                        ))}
                    </HStack>
                </Box>
            }
    </Box>
    )
}

export default Navigation
