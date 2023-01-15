import {Box, Grid, GridItem, Heading, Icon, Link} from '@chakra-ui/react'
import {Card, CardBody} from '@chakra-ui/card'
import theme from "../../styles/theme";
import {FaClipboardList, FaTaxi} from 'react-icons/fa'
import {MdFastfood, MdAccessTimeFilled} from 'react-icons/md'

const CardNavigation = () => {
    return (
        <Box>
            <Box textStyle={'card-nav-header'}  p={1} w={'30%'} position={'relative'} left={5}
                 borderRadius={'10px 10px 0 0'} background={'rgba(206, 147, 124, 0.8)'} >
                 Sections
            </Box>
            <Card
                borderRadius={10}
                boxShadow={'2px 2px 2px rgb(0 0 0 / 5%), -2px 2px 2px rgb(0 0 0 / 4%), 2px 2px 2px rgb(0 0 0 / 5%), 0 0 2px rgb(0 0 0 / 8%)'}
            >
                <CardBody p={'10px'}>
                    <Link
                        textStyle={'card-nav-item'}
                        textAlign={'left'}
                        p={'16px 10px'}
                        display={'block'}
                        href={'#todo'}
                        _hover={{
                            background: theme.colors.beaublue,
                            borderRadius: '5px'
                        }}
                        borderBottom={'1px solid lightgray'}
                    >
                        <Grid templateColumns='repeat(12, 1fr)'>
                            <GridItem colSpan={1} display={'flex'}>
                                <Icon m={'auto 0'} as={FaClipboardList} color={theme.colors.antiquebrass}></Icon>
                            </GridItem>
                            <GridItem m={'auto 10px'} colSpan={11}>
                                THINGS TO DO
                            </GridItem>
                        </Grid>
                    </Link>
                    <Link
                        textStyle={'card-nav-item'}
                        textAlign={'left'}
                        p={'16px 10px'}
                        display={'block'}
                        href={'#transport'}
                        _hover={{
                            background: theme.colors.beaublue,
                            borderRadius: '5px'
                        }}
                        borderBottom={'1px solid lightgray'}
                    >
                        <Grid templateColumns='repeat(12, 1fr)'>
                            <GridItem colSpan={1} display={'flex'}>
                                <Icon m={'auto 0'} as={FaTaxi} color={theme.colors.antiquebrass}></Icon>
                            </GridItem>
                            <GridItem m={'auto 10px'} colSpan={11}>
                                TRANSPORT TIPS
                            </GridItem>
                        </Grid>
                    </Link>
                    <Link
                        textStyle={'card-nav-item'}
                        textAlign={'left'}
                        p={'16px 10px'}
                        display={'block'}
                        href={'#todo'}
                        _hover={{
                            background: theme.colors.beaublue,
                            borderRadius: '5px'
                        }}
                        borderBottom={'1px solid lightgray'}
                    >
                        <Grid templateColumns='repeat(12, 1fr)'>
                            <GridItem colSpan={1} display={'flex'}>
                                <Icon m={'auto 0'} as={MdFastfood} color={theme.colors.antiquebrass}></Icon>
                            </GridItem>
                            <GridItem m={'auto 10px'} colSpan={11}>
                                WHERE TO EAT
                            </GridItem>
                        </Grid>
                    </Link>
                    <Link
                        textStyle={'card-nav-item'}
                        textAlign={'left'}
                        p={'16px 10px'}
                        display={'block'}
                        href={'#todo'}
                        _hover={{
                            background: theme.colors.beaublue,
                            borderRadius: '5px'
                        }}
                    >
                        <Grid templateColumns='repeat(12, 1fr)'>
                            <GridItem colSpan={1} display={'flex'}>
                                <Icon m={'auto 0'} as={MdAccessTimeFilled} color={theme.colors.antiquebrass}></Icon>
                            </GridItem>
                            <GridItem m={'auto 10px'} colSpan={11}>
                                BEST TIME TO VISIT
                            </GridItem>
                        </Grid>
                    </Link>
                </CardBody>
            </Card>
        </Box>

    )
}

export default CardNavigation
