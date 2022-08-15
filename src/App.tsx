import React from 'react';
import "@fontsource/stint-ultra-condensed/400.css"
import "@fontsource/alumni-sans/400.css"
import "@fontsource/bad-script"
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
