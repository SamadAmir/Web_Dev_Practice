import { motion } from "framer-motion";
import "./Features.css"
const Features = () => {
  return (
    <>
            <motion.div
            className="content"
            initial={{ opacity: 0, y: 50 }} // Start hidden and down 50px
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view, only once
        >
    <div className="features-container">
      <p>Features</p>

    </div>
    </motion.div>
    </>
  )
}

export default Features