import {Box, Button, Drawer, DrawerBody,
    DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Link, useDisclosure, VStack} from "@chakra-ui/react";
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
        <Flex>
            <Button ref={btnRef} onClick={onOpen}>
                <HamburgerIcon size="26px" />
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="left">
                    {navLinks.map((item, i) => (
                        <Link key={i} href={item.link}>
                            <Button variant='text' > {item.title} </Button>
                        </Link>
                    ))}
                </VStack>
            </Drawer>
        </Flex>
    )
}

export default MobileNav

