import  { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import address from "../../assets/address.png"

const details=[
    {
        image:phone,
        details:"+92 335 3803515"
    },
    {
        image:email,
        details:"samadaamir145@gmail.com"
    },
    {
        image:address,
        details:"B-145 Block H North Nazimabad"
    }
]

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    budget: "",  // Keep this as a string for compatibility with input handling
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", contactData);
    toast.success("Form submitted successfully!");
  };

  return (
    <motion.div
      className="content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="Contact-container">
        <div className="contact-text">
          <h1>Let us Keep in Touch</h1>
          <p>We have created a new product that will help designers, developers, and companies create websites quickly and easily for their startups.</p>
          <div className="details">
          {details.map((detail, index) => (
              <div key={index} className="detail-item">
                <img src={detail.image} alt="Contact Detail" className="detail-icon"/>
                <p>{detail.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="budget">Your Budget ($)</label>
              <input
                type="number"
                id="budget"
                name="budget"
                value={contactData.budget}
                onChange={handleChange}
                placeholder="Enter your budget"
                min="0" // Optional: Set a minimum value
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                required
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="create-account-button">Send</button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </motion.div>
  );
};

export default Contact;
