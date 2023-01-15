import { ThemeOverride} from "@chakra-ui/react";

// generate palettes using https://smart-swatch.netlify.app

const colors: ThemeOverride['colors'] = {
    transparent: 'transparent',
    black: '#333333',
    white: '#FFFFFF',
    border: '#F2D1CE',

    /**Pantone
     *
     */
    beaublue: '#ABC1CAff',
    ceruleanfrost: '#638CADff',
    platinum: '#E3E9EAff',
    burnishedbrown: '#927166ff',
    antiquebrass: '#CE937Cff',
    gainsboro: '#D3E0E4ff',

    /**
     * Pantone:
     * #262223
     * #A6807C
     * #D9B3B0
     * #F2D1CE
     * #F2F2F2
     */

    darkPink: {
            50: '#ffebeb',
            100: '#e9ccca',
            200: '#d6aca9',
            300: '#c48b87',
            400: '#b26b65',
            500: '#99514c',
            600: '#78403b',
            700: '#562d29',
            800: '#361a18',
            900: '#180603',
        },
    pink: {
            50: '#fdeaf2',
            100: '#ebc6d5',
            200: '#dca2ba',
            300: '#cd7d9d',
            400: '#bf5882',
            500: '#a64069',
            600: '#813251',
            700: '#5c233a',
            800: '#391423',
            900: '#17050d',
        },
    beige: {
            50: '#fdf4e8',
            100: '#f5debf',
            200: '#f0c994',
            300: '#ebb367',
            400: '#e59e3d',
            500: '#cc8527',
            600: '#9f671e',
            700: '#714a16',
            800: '#432d0d',
            900: '#170f02',
        }
}
export default colors
