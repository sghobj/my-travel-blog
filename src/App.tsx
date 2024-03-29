import React from 'react';
import "@fontsource/stint-ultra-condensed/400.css"
import "@fontsource/alumni-sans/400.css"
import "@fontsource/bad-script"
import "@fontsource/permanent-marker"
import "@fontsource/marhey"
import "@fontsource/handlee"
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Portfolio/homepage";
import CityDetails from "./pages/CityDetails";
import Gallery from "./pages/Gallery";
import {Helmet} from 'react-helmet-async'
import {toREM} from "./utils/helpers/toREM";


function App() {
  return (
    <div className="App">
        <Helmet>
            <title>Sarah Ghobj Travel Blog</title>
            <link rel="canonical" href="https://my-travel-blog.vercel.app" />
            <meta name="description" content="Sharing my travel experience and photos I take while exploring new places" />
            <meta
                name="keywords"
                content="Travel, Sarah Ghobj, Blog, Tourism, Visit Germany"
            />
        </Helmet>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/photos'} element={<Gallery />} />
                <Route path={'/:city'} element={<CityDetails />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
