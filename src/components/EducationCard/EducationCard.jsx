import PropTypes from 'prop-types';
import './EducationCard.css';

const EducationCard = ({ year, title, description, grade }) => {
    return (
        <div className="education-container">
            <div className="education-card">
                <div className="education-content">
                    <div className="name">{title}</div>
                    <div className="handle">{year}</div>
                    <div className="title">
                        <span>{description}</span><br />
                        <br />
                        <span>{grade}</span>
                    </div>
                </div>
                <div className="dots orange-dots"></div>
                <div className="dots pink-dots"></div>
            </div>
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







// <div className="education-card">
//     <h1 className="education-card-year">{year}</h1>
//     <span className="education-card-title">{title}</span>
//     <p className="education-card-description">{description}</p>
//     <span className="education-card-grade">{grade}</span>
// </div>