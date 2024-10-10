import './Footer.css';
import Logo from "../../assets/company_logo.png";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import linkedin_icon from "../../assets/linkedin.png";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
        <motion.div
      className="content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
    <footer className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='tomatologofooter' src={Logo} alt="Company Logo" />
            <p>This website is for Startup Helping Company</p>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook_icon} alt="Facebook" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter_icon} alt="Twitter" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={linkedin_icon} alt="LinkedIn" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>USS Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>0900-78601</li>
              <li>fast@nu.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 © SSA.com - All rights reserved.</p>
    </footer>
    </motion.div>
    </>
  );
}

export default Footer;
