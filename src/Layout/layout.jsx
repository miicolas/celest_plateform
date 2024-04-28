import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Contact from "../pages/contact.jsx";


function Layout (){
    return (
        <div className="">
            Header 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            Footer
        </div>

    )
}

export default Layout;