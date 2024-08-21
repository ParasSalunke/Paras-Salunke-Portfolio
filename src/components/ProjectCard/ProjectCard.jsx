import './ProjectCard.css';
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import PropTypes from 'prop-types';

const ProjectCard = ({ image, title, description, liveDemoLink, sourceCodeLink, technologies = [] }) => {
    const renderTechnologyIcon = (tech) => {
        switch (tech) {
            case 'HTML':
                return <FaHtml5 />;
            case 'CSS':
                return <FaCss3Alt />;
            case 'JavaScript':
                return <FaJs />;
            case 'React':
                return <FaReact />;
            case 'Bootstrap':
                return <FaBootstrap />;
            case 'Tailwind':
                return <RiTailwindCssFill />;
            default:
                return null;
        }
    };

    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-card-image" />
            <div className="project-card-content">
                <p className="project-card-title">{title}</p>
                <p className="project-card-description">{description}</p>
                <div className="project-card-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="project-card-technology">
                            {renderTechnologyIcon(tech)}
                        </span>
                    ))}
                </div>
                <div className="button-container">
                    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-card-button">
                        <FaLink className="button-icon" size={20} /> Live Demo
                    </a>
                    <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="project-card-button secondary">
                        <FaGithub className="button-icon" size={20} /> Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveDemoLink: PropTypes.string.isRequired,
    sourceCodeLink: PropTypes.string.isRequired,
};

export default ProjectCard;