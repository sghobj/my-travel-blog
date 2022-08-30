import React from 'react';
import "@fontsource/stint-ultra-condensed/400.css"
import "@fontsource/alumni-sans/400.css"
import "@fontsource/bad-script"
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage";
import CityDetails from "./pages/CityDetails";
import Navigation from "./components/navigation/navigation";
import Gallery from "./pages/Gallery";
import {Helmet} from 'react-helmet'


function App() {
  return (
    <div className="App">
        <Helmet>
            <title>Sarah Ghobj Travel Blog</title>
            <meta name="description" content="Sharing my travel experience and photos I take while exploring new places" />
        </Helmet>
        <Navigation />
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
