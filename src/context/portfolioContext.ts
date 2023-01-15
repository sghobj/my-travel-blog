import {createContext, useContext} from "react";



export const MyPortfolioContext = createContext({
    title: '',
    subtitle: '',
    description: '',
    coverImage: {
        url: '',
        caption: '',
        altText: ''
    }
})

export const usePortfolioContext = () => useContext(MyPortfolioContext)
