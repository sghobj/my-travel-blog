import {Box, Button, HStack, Link} from "@chakra-ui/react";

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

const Navigation = () => {

    return(
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
                <HStack sx={{margin: 'auto', backgroundColor: 'rgba(255,255,255,0.6)'}} as="nav" spacing="5">
                    {navLinks.map((item, i) => (
                        <Link href={item.link} key={i}>
                            <Button fontFamily={'Ubuntu'} fontWeight={'normal'} variant="nav" color={'black'} > {item.title} </Button>
                        </Link>
                    ))}
                </HStack>
            </Box>
        </Box>
    )
}

export default Navigation
