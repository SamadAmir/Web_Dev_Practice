import { motion } from 'framer-motion';
import './Showcase.css';

const work = [
  {
    title: 'Food Ordering',
    description: 'MERN based food delivery app',
    image: 'https://via.placeholder.com/300', // Replace with actual project screenshot
  },
  {
    title: 'Movie Booking',
    description: 'React based movie booking application',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Convex Hull Visualizer',
    description: 'JAVA based convex hull algorithms visualizer',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Expense Splitter',
    description: 'JAVA based Expense splitter application',
    image: 'https://via.placeholder.com/300',
  },
];

const Showcase = () => {
  return (
    <div className="work-page">
      <a
        href="https://github.com/SamadAmir"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Visit My Work
      </a>
      <h1>My Projects</h1>
      <div className="work-cards">
        {work.map((project, index) => (
          <motion.div
            key={index}
            className="work-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
