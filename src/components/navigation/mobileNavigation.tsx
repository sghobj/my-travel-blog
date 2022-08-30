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
            <Button variant={'text'} ref={btnRef} onClick={onOpen}>
                <HamburgerIcon color={'black'}/>
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={'left'}
                finalFocusRef={btnRef}
                closeOnEsc={true}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody alignItems="left">
                        {navLinks.map((item, i) => (
                            <Link key={i} href={item.link}>
                                <Text> {item.title} </Text>
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

