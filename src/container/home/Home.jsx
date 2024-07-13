import { useNavigate } from 'react-router-dom';
import './style.scss'
import { Animate } from 'react-simple-animate';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const navigate = useNavigate();
    const handleNavigateToContactPage = () =>{
        navigate('/contact');
    }

    return (
        <div>
            <section id="home" className="home">
                <div className="home__text-wrapper">
                    <h1>
                        Hello, I,m Md Rocky Islam
                        <br />
                        <Typewriter
                            words={['Frontend Developer', 'Web Developer', 'MERN Stack Developer', 'FullStack Developer']}
                            loop= {false}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                            cursor
                        ></Typewriter>
                    </h1>
                </div>
                <Animate
                play
                duration={1}
                delay={1}
                start={{
                    transform : 'translateY(300px)'
                }}
                end={{
                    transform : 'translateX(0px)'
                }}
                >
                <div className='home__contact-me'>
                    <button onClick={handleNavigateToContactPage}>Hire Me</button>
                </div>
                </Animate>
                
            </section>
        </div>
    );
};

export default Home;