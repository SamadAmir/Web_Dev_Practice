import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";

const slides = [
    {
        title: "Innovative Solutions",
        subtitle: "Powerful and Efficient",
        description: "We provide cutting-edge tools to simplify your workflow and increase productivity.",
    },
    {
        title: "Creative Designs",
        subtitle: "Beautifully Crafted Interfaces",
        description: "Our designs focus on both aesthetics and usability to deliver a seamless experience.",
    },
    {
        title: "Seamless Integration",
        subtitle: "Plug and Play",
        description: "Integrate with your favorite tools and systems effortlessly with our solutions.",
    },
    {
        title: "Advanced Analytics",
        subtitle: "Real-Time Insights",
        description: "Make data-driven decisions with our advanced analytics platform.",
    },
];

const Navbar = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    const handleCreateAccountClick = () => {
        navigate("/Form"); // Navigate to the /Form route when the button is clicked
    };

    return (
        <>
            <div className="Menu-container">
                <div className="content-menu">
                    <ul className="menu">
                        <img src={Logo} alt="Logo" />
                        <li>
                            <ScrollLink to="home" smooth={true} duration={100}>
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="blog" smooth={true} duration={100}>
                                Blog
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="features" smooth={true} duration={100}>
                                Features
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="pricing" smooth={true} duration={100}>
                                Pricing
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" smooth={true} duration={100}>
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>

                {/* Slideshow Content */}
                <div className="slideshow-container">
                    <div className={`slide fade`}>
                        <div className="slide-text">
                            <h3>{slides[activeSlide].title}</h3>
                            <h1>{slides[activeSlide].subtitle}</h1>
                            <p>{slides[activeSlide].description}</p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button className="prev" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="next" onClick={nextSlide}>
                        &#10095;
                    </button>

                    {/* Paginator */}
                    <div className="paginator">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${activeSlide === index ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <button className="button-40" role="button" onClick={handleCreateAccountClick}>
                    Create Account
                </button>
            </div>
        </>
    );
};

export default Navbar;
