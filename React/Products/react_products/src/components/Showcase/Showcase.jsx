import { motion } from 'framer-motion';
import './Showcase.css';
import Food_Order from "../../assets/Food_Ordering.jpg";
import Movie from "../../assets/Movie_project.png"
import ConvexHull from "../../assets/Convex_hull.png"
import Expense_Splitter from "../../assets/Expense_Splitter.png"


const work = [
  {
    title: 'Food Ordering',
    description: 'MERN based food delivery app',
    image: Food_Order,
    link: 'https://github.com/SamadAmir/Food_Ordering',
  },
  {
    title: 'Movie Booking',
    description: 'React based movie booking application',
    image: Movie,
    link: 'https://github.com/SamadAmir/react_movie_app',
  },
  {
    title: 'Convex Hull Visualizer',
    description: 'JAVA based convex hull algorithms visualizer',
    image: ConvexHull,
    link: 'https://github.com/SamadAmir/ConvexHull_Visualization',
  },
  {
    title: 'Expense Splitter',
    description: 'JAVA based Expense splitter application',
    image: Expense_Splitter,
    link: 'https://github.com/SamadAmir/Expense_Splitter',
  },
];
;

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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fa fa-github" aria-hidden="true"></i> View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
