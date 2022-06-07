import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";

const Routes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}>
                <Route path="Map" element={<Map />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Routes;
