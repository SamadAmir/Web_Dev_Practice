import { useState } from "react";
import { motion } from "framer-motion";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account created successfully!");
    setTimeout(()=>{
      navigate("home");
    },2000)
   
  };



  return (
    <motion.div
    className="content"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
      <div className="Form-container">
        <div className="form-text">
          <h1>We solve digital problems with an outstanding creative flare</h1>
          <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>

        <div className="form-section">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="create-account-button">
              Create an Account
            </button>
            <div className="or-divider">or</div>
            <button className="login-twitter-button">
              Login via Twitter
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </motion.div>
  );
};

export default Form;
