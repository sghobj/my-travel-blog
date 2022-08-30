import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Link,
    Text,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import {useRef} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";

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

const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return(
        <Flex position={'absolute'} zIndex={1}>
            <Button variant={'text'} ref={btnRef} onClick={onOpen} sx={{ m: 5, borderRadius: 0, backgroundColor: 'rgba(0,0,0,0.4)'}}>
                <HamburgerIcon color={'white'} fontSize={'2xl'}/>
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={'left'}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton fontSize={'2xl'}/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        {navLinks.map((item, i) => (
                            <Link key={i} href={item.link}>
                                <Text mb={2}> {item.title} </Text>
                            </Link>
                        ))}
                    </DrawerBody>
                    <DrawerFooter m={8} justifyContent={'center'}>
                        <Text textAlign={'left'}>Sarah Ghobj</Text>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default MobileNav

