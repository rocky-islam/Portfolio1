import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss'
import { FaDatabase, FaDev } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";

const About = () => {
    const jobSummary = "As a dedicated and passionate React.js Web Developer with 1 year of experience, I aim to leverage my skills in building dynamic and responsive web applications to contribute to an innovative development team. My objective is to continuously enhance my technical expertise, collaborate effectively with cross-functional teams, and deliver high-quality user experiences. I am eager to take on challenging projects that push the boundaries of web development, drive company success, and foster my professional growth within a forward-thinking organization. In my next role, I seek to: Advance Technical Skills: Deepen my understanding and proficiency in React.js and related technologies, such as Redux, TypeScript, and modern front-end development tools. I aim to stay current with the latest industry trends and best practices to ensure that my work is always cutting-edge and efficient. Collaborate and Innovate: Work alongside talented professionals in a collaborative environment where ideas and creativity are encouraged. I strive to contribute to innovative solutions that address complex problems, enhancing the overall functionality and user experience of web applications. Contribute to High-Impact Projects: Engage in projects that have a significant impact on the business and its users. I am driven to build applications that are not only";

    const personalDetails = [
        {
            label: 'Name:- ',
            value: 'Md Rocky Islam'
        },
        {
            label: 'Address:- ',
            value: 'Rajshahi, Bangladesh'
        },
        {
            label: 'Email:- ',
            value: 'mdrockyislam.p@gmail.com'
        },
        {
            label: 'Github:- ',
            value: 'github.com/rocky-islam'
        },
        {
            label: 'Linkedin:- ',
            value: 'www.linkedin.com/in/mdrockyislam/'
        },
        {
            label: 'Phone:- ',
            value: '+8801765349871'
        }
    ]

    return (
        <>
        <section id="about" className="about">
            <PageHeaderContent
            headerText = "About Me"
            icon ={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
            ></PageHeaderContent>
            {/* <h1>This is about Page</h1> */}

            <div className="about__content">
                <div className="about__content__personalWrapper">
                <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateX(-900px)',
                }}
                end={{
                    transform: 'translateX(0px)',
                }}
                >
                    <h3>Web Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>

                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateX(500px)',
                }}
                end={{
                    transform: 'translateX(0px)',
                }}
                >
                <h3 className="personalInformationHeaderText">Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item, i)=>(
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
                </Animate>
                </div>
                
                <div className="about__content__servicesWrapper">
                    
                    <div className="about__content__servicesWrapper__innerContent">
                    <div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)"></FaDev>
                    </div>
                    <div>
                        <DiAndroid size={60} color="var(--yellow-theme-main-color)"></DiAndroid>
                    </div>
                    <div>
                        <FaDatabase size={60} color="var(--yellow-theme-main-color)"></FaDatabase>
                    </div>
                    <div>
                        <DiApple size={60} color="var(--yellow-theme-main-color)"></DiApple>
                    </div>
                    </div>
                    
                </div>
                
                
            </div>
        </section>
        </>
    );
};

export default About;