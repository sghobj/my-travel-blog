import {Box, Image} from "@chakra-ui/react";
import React from "react";


const HeaderImageMobile = ({id}) => {

    return(
        // <svg height="0" width="0">
        //     <defs>
        //         <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
        //             <image href="https://en.wikipedia.org/wiki/Petra#/media/File:Treasury_petra_crop.jpeg" x="0" y="0" width="100" height="100" />
        //         </pattern>
        //         <clipPath id="svgPath">
        //             <path fill="url(#img1)" stroke="#000000" strokeWidth="1.5794" strokeMiterlimit="10" d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6
        // c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
        // c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z"/>
        //         </clipPath>
        //     </defs>
        // </svg>
        // <svg
        //     viewBox="0 0 24 24"
        //     xmlns="<http://www.w3.org/2000/svg>"
        // >
        //     <circle
        //         cx="12"
        //         cy="12"
        //         r="8"
        //         strokeLinecap="round"
        //         stroke="#000000" strokeWidth="1.5794"
        //         fill="red"
        //     />
        // </svg>
        // <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        //     <path fill="#FF0066" d="M44.8,-23.4C58.1,-2.9,68.8,21.5,60.9,38.1C53,54.6,26.5,63.3,3.6,61.2C-19.2,59.1,-38.5,46.2,-49.6,27.8C-60.7,9.4,-63.6,-14.5,-54,-33C-44.4,-51.4,-22.2,-64.3,-3.2,-62.4C15.8,-60.6,31.5,-43.9,44.8,-23.4Z" transform="translate(130 80)" />
        // </svg>
    <svg height="0" width="0" >
        <defs>
            <clipPath id={id}>
                <path fill="#FFFFFF" stroke="#000000" stroke-width="1.5794" stroke-miterlimit="10" d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6
        c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
        c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z" transform={'scale(0.9)'}/>
            </clipPath>
        </defs>

    </svg>

    )
};

export default HeaderImageMobile
