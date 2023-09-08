import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/about";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element ={<About />} />
                <Route path="*" element ={<NotFoundPage />} />
            </Routes>

        </Router>
    );
}

export default  App;