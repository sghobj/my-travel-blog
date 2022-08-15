import { ComponentStyleConfig } from "@chakra-ui/theme";

const Heading: ComponentStyleConfig = {
    sizes: {
        '5xl': {
            fontSize: { base: '4xl', xl: '5xl'},
            fontWeight: 'light',
            lineHeight: 'none'
        },
        '4xl': {
            fontSize: { base: '3xl', xl: '4xl'},
            fontWeight: 'light',
            lineHeight: 'none'
        },
        '3xl': {
            fontSize: { base: '2xl', xl: '3xl'},
            fontWeight: 'light',
            lineHeight: 1.5,
        },
        '2xl': {
            fontSize: { base: 'xl', md: '10px', xl: '2xl'},
            fontWeight: 'light',
            lineHeight: 1.5,
        },
    },
    variants: {
        primary: {
            // fontFamily: "Stint Ultra Condensed"
        }
    }
}

export default Heading
