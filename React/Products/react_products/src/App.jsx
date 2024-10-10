import Features from "./components/Features/Features";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Testimonial from "./components/Testimonial/Testimonial";
import Showcase from "./components/Showcase/Showcase";
import Pricing from "./components/PricingTable/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    const location = useLocation();
    const isFormRoute = location.pathname === "/Form";

    return (
        <>
            {/* Render the main website only if not on the /Form route */}
            {!isFormRoute && (
                <>
                    <div id="home">
                        <Navbar />
                    </div>
                    <div id="blog">
                        <Content />
                    </div>
                    <div id="features">
                        <Features />
                    </div>
                    <Testimonial/>
                    <Showcase/>
                    <div id ="pricing">
                        <Pricing/>
                    </div>
                    <div id="contact">
                        <Contact/>
                    </div>
                    <Footer/>
                </>
            )}

            {/* Form Route */}
            <Routes>
                <Route path="Form" element={<Form />} />
            </Routes>
        </>
    );
}

export default App;
