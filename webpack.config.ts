import {Configuration} from "webpack";

const config: Configuration = {
        module: {
            rules: [
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
    }

    export default config

