import './Portfolio.css';
import GradientLine from '../GradientLine/GradientLine';
import education_data from '../../assets/education_data';
import EducationCard from '../EducationCard/EducationCard';

const portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <div className="portfolio-title">
        <h1>My Portfolio</h1>
        <GradientLine />
      </div>
      <div className="education-title">
        <h2>My Education & Courses :</h2>
      </div>
      <div className="portfolio-container">
        {education_data.map((education, index) => (
          <div key={index} className=''>
            <EducationCard
              key={index}
              year={education.e_year}
              title={education.e_title}
              description={education.e_description}
              grade={education.e_grade}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default portfolio;









{/* <h3>{education.e_year}</h3>
            <h2>{education.e_title}</h2>
            <p>{education.e_description}</p>
            <p>{education.e_grade}</p> */}