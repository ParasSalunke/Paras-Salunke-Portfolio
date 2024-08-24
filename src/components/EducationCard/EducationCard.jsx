import PropTypes from 'prop-types';
import './EducationCard.css';

const EducationCard = ({ year, title, description, grade }) => {
    return (
        <div className="education-card">
            <h1 className="education-card-year">{year}</h1>
            <span className="education-card-title">{title}</span>
            <p className="education-card-description">{description}</p>
            <span className="education-card-grade">{grade}</span>
        </div>
    );
};

EducationCard.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
};

export default EducationCard;
