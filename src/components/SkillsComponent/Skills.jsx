import './Skills.css'

const Skills = () => {
    return (
        <div>
            <div className="skill-container">
                <div className="skill-box">
                    <span className="title">HTML CSS</span>

                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">JavaScript</span>

                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">React JS</span>

                    <div className="skill-bar">
                        <span className="skill-per reactjs">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">Node JS</span>

                    <div className="skill-bar">
                        <span className="skill-per nodejs">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">Express</span>

                    <div className="skill-bar">
                        <span className="skill-per express">
                            <span className="tooltip">40%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title">Mongo DB</span>

                    <div className="skill-bar">
                        <span className="skill-per mongodb">
                            <span className="tooltip">30%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
