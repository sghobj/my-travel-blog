import {extendTheme, ThemeConfig} from "@chakra-ui/react";
import Heading from './components/heading'
import Container from "./components/container";
import colors from "./foundation/colors"
import fonts from "./foundation/fonts";
import fontSizes from "./foundation/fontSizes";
import textStyles from "./foundation/textStyles";


const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const overrides = {
    config,
    components: {
        Heading,
        Container
    },
    colors,
    fonts,
    fontSizes,
    textStyles
}

export default extendTheme(overrides)
