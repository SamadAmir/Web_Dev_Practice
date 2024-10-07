import { motion } from "framer-motion";
import "./Features.css";
import { useState } from "react";
import Mockup from '../../assets/Mockup.png';

const slides = [
  {
    title: "We Create Something New",
    description: "We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily."
  },
  {
    title: "Innovative Design Solutions",
    description: "Our platform provides cutting-edge design templates that can be customized to suit any brand, allowing businesses to launch beautiful websites with minimal effort."
  },
  {
    title: "Faster Development Process",
    description: "Our tools enable developers to streamline their workflow, offering pre-built components and integrations that reduce development time significantly."
  },
  {
    title: "Seamless User Experience",
    description: "We focus on creating user-friendly interfaces that enhance the customer journey, ensuring websites are intuitive, responsive, and engaging."
  },
  {
    title: "Scalable for Growing Businesses",
    description: "Our solution grows with your business. Easily scalable features and integrations help startups and large enterprises alike manage their online presence efficiently."
  }
];

const Features = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="features-container">
          <div className="image">
            <img src={Mockup} alt="Mockup" />
          </div>

          <div className="text">
            <p>{slides[activeSlide].title}</p>
            <h2>{slides[activeSlide].description}</h2>
          </div>
        </div>

        <div className="paginator">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Features;
