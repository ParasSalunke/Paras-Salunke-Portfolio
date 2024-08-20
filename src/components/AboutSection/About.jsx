import './About.css'
import profile from '../../assets/images/About/about.svg'
import GradientLine from '../GradientLine/GradientLine'
import Skills from '../SkillsComponent/Skills'

const About = () => {
    return (
        <section id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <GradientLine id='line' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt='Paras Salunke About' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Full Stack Developer from Pune, Maharashtra. I specialize in creating beautiful, responsive, and fast websites. With 1 years of experience in web development, I have worked on various projects ranging from small business websites to large-scale web applications.</p>
                        <p>I am passionate about technology and always striving to learn new technologies. I am a team player, always ready to collaborate and assist others. I am also a natural leader and motivator, inspiring others to follow my vision.</p>
                    </div>
                    <Skills />
                </div>
            </div>
            <div className="about-achievments">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPRIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>CLIENTS SERVED</p>
                </div>
            </div>
        </section>
    )
}

export default About
