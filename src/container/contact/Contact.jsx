import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss'

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <PageHeaderContent
          headerText="Contact Me"
          icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
        ></PageHeaderContent>
        <div className="contact__content">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="contact__content__header-text">{`Let's Talk`}</h3>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact__content__form">
              <div className="contact__content__form__controlsWrapper">
                <div className="nameWrapper">
                  <input type="text" name="name" className="inputName" required />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div className="emailWrapper">
                  <input type="email" name="email" className="inputEmail" required/>
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div className="descWrapper">
                  <textarea type="text" name="desc" className="desc" rows='5' required/>
                  <label htmlFor="desc" className="descLabel">
                    Message
                  </label>
                </div>
              </div>
              <button>Submit Now</button>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
};

export default Contact;
