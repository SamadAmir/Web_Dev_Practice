import { motion } from "framer-motion";
import "./Content.css";

const Content = () => {
    return (
        <motion.div
            className="content-container"
            initial={{ opacity: 0, y: 50 }} // Start hidden and down 50px
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view, only once
        >
            <p>Free Sample</p>
            <h1>Powerful Generator and Free Figma Sources</h1>
            <p>
                Startup Framework contains components and complex blocks which can be easily integrated into almost any design.<br/>
                All of the components are made in the same style, and can be easily integrated into projects, allowing you to 
                create hundreds of solutions.
            </p>
        </motion.div>
    );
};

export default Content;
