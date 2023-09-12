import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home"
import About from "./pages/About/About"
import Logement from "./pages/Logement/Logement";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element ={<About />} />
                <Route path="/Logement/:id" element ={<Logement />} />
                <Route path="*" element ={<NotFoundPage />} />
            </Routes>

        </Router>
    );
}

export default  App;