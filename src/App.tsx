import React from 'react';
import "@fontsource/stint-ultra-condensed/400.css"
import "@fontsource/alumni-sans/400.css"
import "@fontsource/bad-script"
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage";
import CityDetails from "./pages/CityDetails";
import Navigation from "./components/navigation/navigation";


function App() {
  return (
    <div className="App">
        <Navigation />
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/:city'} element={<CityDetails />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
