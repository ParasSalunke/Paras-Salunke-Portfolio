import { useState } from 'react';
import './Work.css';
import { FaArrowRight } from "react-icons/fa";
import work_data from '../../assets/work_data';
import GradientLine from '../GradientLine/GradientLine';

const Work = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id='work' className='work'>
      <div className="work-title">
        <h1>My Latest Works</h1>
        <a><GradientLine /></a>
      </div>
      <div className="work-container">
        {work_data.slice(0, showMore ? work_data.length : 6).map((work, index) => {
          return (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
              <img src={work.w_img} alt='projects' />
            </a>
          );
        })}
      </div>
      <div className="work-showmore" onClick={handleShowMore}>
        <p>Show {showMore ? "Less" : "More"}</p>
        <FaArrowRight className='showmore-right' />
      </div>
    </section>
  );
};

export default Work;