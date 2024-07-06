import { useNavigate } from 'react-router-dom';
import './style.scss'
import { Animate } from 'react-simple-animate';

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
                        FullStack Web Developer
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