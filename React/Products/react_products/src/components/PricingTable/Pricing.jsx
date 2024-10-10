import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pricing.css";

const Prices = [
  {
    type: "Starter",
    price: 9.99,
    features: {
      "2 GB of space": true,
      "14 days of backups": true,
      "Social integrations": true,
      "Client billing": true,
      "Remote access": false,
      "Custom domain": false,
      "24 hours support": false,
      "Admin tools": false,
      "Collaboration tools": false,
      "User management": false,
    }
  },
  {
    type: "Professional",
    price: 19.99,
    features: {
      "2 GB of space": true,
      "14 days of backups": true,
      "Social integrations": true,
      "Client billing": true,
      "Remote access": true,
      "Custom domain": true,
      "24 hours support": true,
      "Admin tools": false,
      "Collaboration tools": false,
      "User management": false,
    }
  },
  {
    type: "Team",
    price: 29.99,
    features: {
      "2 GB of space": true,
      "14 days of backups": true,
      "Social integrations": true,
      "Client billing": true,
      "Remote access": true,
      "Custom domain": true,
      "24 hours support": true,
      "Admin tools": true,
      "Collaboration tools": true,
      "User management": true,
    }
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/Form"); // Navigate to the /Form route when the button is clicked
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
        <div className="Pricing-Container">
          <h1>Plans and Pricing</h1>
          <p>Startup Framework is free forever. You only pay for custom domain hosting or to export your site.</p>
          <div className="Prices">
            {Prices.map((plan, index) => (
              <div key={index} className="Plan">
                <h3>{plan.type}</h3>
                <h2>${plan.price}</h2>
                <ul>
                  {Object.entries(plan.features).map(([feature, available], idx) => (
                    <li key={idx} className={available ? 'included' : 'not-included'}>
                      {available && <span className="checkmark">✔</span>} {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={getStarted}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Pricing;
