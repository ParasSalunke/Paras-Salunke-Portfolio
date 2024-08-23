import GradientLine from '../GradientLine/GradientLine';
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import certificate_data from '../../assets/certificate_data';
import CertificateCard from '../CertificateCard/CertificateCard';
import './Certificate.css';

const Certificate = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section id="certificate" className="certificate">
            <div className="certificate-title">
                <h1>My Certificates</h1>
                <a><GradientLine /></a>
            </div>

            <div className="certificate-container">
                {certificate_data.slice(0, showMore ? certificate_data.length : 6).map((certificate, index) => {
                    return (
                        <CertificateCard
                            key={index}
                            image={certificate.c_img}
                            title={certificate.c_title}
                            description={certificate.c_desc}
                            linkedinLink={certificate.c_linkedin}
                        />
                    );
                })}
            </div>

            <div className="certificate-showmore" onClick={handleShowMore}>
                <p>Show {showMore ? "Less" : "More"}</p>
                <FaArrowRight className='showmore-right' />
            </div>
        </section>
    );
}

export default Certificate;