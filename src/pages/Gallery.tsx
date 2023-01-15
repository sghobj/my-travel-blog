import {Box} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import Gallery from 'react-photo-gallery'


const PhotoGallery = () => {

    const [cityImages, setCityImages] = useState([])
    const photos = []

    useEffect(() => {
        {
            cityImages?.map((image, index) => {
                const {attributes} = image
                let photoObject = {
                    src: attributes.url,
                    width: attributes.width,
                    height: attributes.height
                }
                photos.push(photoObject)
            })
        }
    }, [cityImages])


    return(
        <Box justifyContent={'center'} p={{sm: 10}}>
            <Gallery photos={photos} />
        </Box>
    )
}

export default PhotoGallery
