import { ComponentStyleConfig } from "@chakra-ui/theme";
import {toREM} from "../../utils/helpers/toREM";

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
        homePagePrimary: {
            fontFamily: "kalam",
            fontSize: toREM(48)

        },
        secondary: {
          fontFamily:  'Caveat ,cursive',
            fontWeight: 300,
            color: "gray"
        }
    }
}

export default Heading
