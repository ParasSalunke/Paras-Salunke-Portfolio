import PropTypes from 'prop-types';
import './CertificateCard.css';
import { FaLinkedin, FaEye, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Certificate = ({ title, description, image, linkedinLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="certificate-card">
                <img src={image} alt={title} className="certificate-card-image" />
                <div className="certificate-card-content">
                    <p className="certificate-card-title">{title}</p>
                    <p className="certificate-card-description">{description}</p>

                    <div className='certificate-card-button-container'>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="certificate-linkedin-button">
                            <FaLinkedin size={20} /> Linkedin
                        </a>
                        <button onClick={handleViewClick} className="certificate-view-button">
                            <FaEye size={20} className='icon' /> View
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span onClick={handleCloseModal} className="modal-close-button right">
                            <FaTimes color='white' size={30} />
                        </span>
                        <img src={image} alt={title} className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

Certificate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    linkedinLink: PropTypes.string,
};

export default Certificate;