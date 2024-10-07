import Features from "./components/Features/Features";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

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
