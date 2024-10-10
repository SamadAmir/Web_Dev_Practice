import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch 4 user profiles from the API
    axios
      .get("https://randomuser.me/api/?results=4")
      .then((response) => {
        setTestimonials(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="Testimonial-container">
        <h1>Our Happy Clients</h1>
        <div className="Testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="Testimonial" key={index}>
              <img
                src={testimonial.picture.large}
                alt={`${testimonial.name.first} ${testimonial.name.last}`}
                className="Testimonial-image"
              />
              <div className="Testimonial-text">
                <h2>
                  {testimonial.name.first} {testimonial.name.last}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
