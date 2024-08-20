import './Portfolio.css';
import GradientLine from '../GradientLine/GradientLine';
import education_data from '../../assets/education_data';
// import { FaArrowRight } from "react-icons/fa"; 

const portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <div className="portfolio-title">
        <h1>My Portfolio</h1>
        <GradientLine />
      </div>
      <div className="portfolio-container">
        {education_data.map((education, index) => {
          return <div key={index} className='portfolio-format'>
            <h3>{education.s_no}</h3>
            <h2>{education.s_name}</h2>
            <p>{education.s_desc}</p>
            <p>{education.s_grade}</p>
            {/* <div className='portfolio-readmore'>
              <p>Read More</p>
              <FaArrowRight />
             </div> */}
          </div>
        })}
      </div>
    </section>
  )
}

export default portfolio
