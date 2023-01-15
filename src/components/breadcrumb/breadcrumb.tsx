import {
    Box,
    BoxProps,
    Breadcrumb as ChakraBreadcrumb,
    BreadcrumbItem as ChakraBreadcrumbItem,
    BreadcrumbLink,
    Container,
    Icon,
} from '@chakra-ui/react'
import React  from 'react'
import { CgChevronRight } from 'react-icons/cg'
import { MdOutlineHome } from 'react-icons/md'
import {Link, useParams, useLocation} from "react-router-dom";



const Breadcrumb = ({ items, ...rest }) => {
        const location = useLocation()

        return (
            <Box
                // bg="white"
                position="sticky"
                // top={{ base: `${48 - 30}px`, md: `${60 - 30}px` }}
                zIndex="sticky"
                {...rest}
            >
                <Box bg="surface">
                    <Container pt={0} pl={5} pb={0} textAlign={'left'}>
                        <ChakraBreadcrumb
                            spacing="12px"
                            separator={
                                <Icon as={CgChevronRight} color="gray.600" mt="-2px" />
                            }
                            variant="center"
                        >
                            {items && items.map((item, index) => {
                                const { title, pathname } = item
                                    return(
                                <ChakraBreadcrumbItem key={index}>
                                    {/*<Link to={pathname}>*/}
                                    <BreadcrumbLink
                                        isCurrentPage={location.pathname === pathname}
                                        textStyle="breadcrumb-link"
                                        href={pathname}
                                    >
                                        {pathname === '/' ? (
                                            <Icon
                                                title={title}
                                                as={MdOutlineHome}
                                                mt="-3px"
                                                mr="-2px"
                                                w={5}
                                                h={5}
                                            />
                                        ) : (
                                            title
                                        )}
                                    </BreadcrumbLink>
                                    {/*</Link>*/}
                                </ChakraBreadcrumbItem>
                                    )
                            })}
                        </ChakraBreadcrumb>
                    </Container>
                </Box>
            </Box>

        )
    }

export default Breadcrumb
