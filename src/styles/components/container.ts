import {ComponentStyleConfig} from "@chakra-ui/theme";

const Container: ComponentStyleConfig = {
    baseStyle: {
        padding: 10
    },
    sizes: {
        lg: {
            maxWidth: '1650px'
        },
        md: {
            maxWidth: '1440px'
        },
        sm: {
            maxW: '1250px'
        },
        xs: {
            maxW: '900px'
        }
    },
// The default size values
    defaultProps: {
        size: 'lg',
    },
}

export default Container
