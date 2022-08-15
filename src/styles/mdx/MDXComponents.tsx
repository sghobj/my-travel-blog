import {ListItem, OrderedList, UnorderedList, Table, Text, Tbody, Td, Th, Tr, Thead, LinkProps, Link} from "@chakra-ui/react";
import {ReactNode} from "react";
import {AddIcon} from "@chakra-ui/icons";

export type mdxListProps = {
    id?: string,
    children?: ReactNode,
}

const MDXComponent  = {
    a: ({ href }: LinkProps, {children}: mdxListProps) => <Link href={href}>{children}</Link>,
    li: ({ id, children }: mdxListProps) => (
        <ListItem
            id={id}
            listStyleType={'none'}
            mb={3}
            sx={{ '> p': { my: 0 }, 'ul,ol': { my: 0 } }}
        >
            <AddIcon color={'pink.200'} mr={5}/>
            {children}
        </ListItem>
    ),
    ol: ({ id, children }: mdxListProps) => (
        <OrderedList
            id={id}
            // start={start}
            my="1em"
        >
            {children}
        </OrderedList>
    ),
    p: ({ id, children }: mdxListProps) => (
        <Text
            id={id}
            my="1em"
        >
            {children}
        </Text>
    ),
    table: ({ id, children }: mdxListProps) => (
        <Table
            id={id}
            my="1em"
        >
            {children}
        </Table>
    ),
    tbody: ({ id, children }: mdxListProps) => <Tbody id={id}>{children}</Tbody>,
    td: ({ id, children }: mdxListProps) => <Td id={id}>{children}</Td>,
    th: ({ id, children }: mdxListProps) => <Th id={id}>{children}</Th>,
    thead: ({ id, children }: mdxListProps) => <Thead id={id}>{children}</Thead>,
    tr: ({ id, children }: mdxListProps) => <Tr id={id}>{children}</Tr>,
    ul: ({ id, children }: mdxListProps) => (
        <UnorderedList
            id={id}
            my="1em"
        >
            {children}
        </UnorderedList>
    ),
}

export default MDXComponent
