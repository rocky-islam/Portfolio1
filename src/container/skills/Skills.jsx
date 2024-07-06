import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './style.scss';

const Skills = () => {
  return (
    <>
      <section id="skill" className="skill">
        <PageHeaderContent
          headerText="My Skills"
          icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
        ></PageHeaderContent>

        <div className="skill__content-wrapper">
          {skillsData.map((item, i) => (
            <div key={i} className="skill__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skill__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div>
                  {item.data.map((skillItem, i) => (
                    <AnimateKeyframes
                      key={i}
                      play
                      duration={1}
                      keyframes={["opacity : 1", "opacity : 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={i}>
                        <p>{skillItem.skillName}</p>
                        <Line
                        percent={skillItem.percentage}
                        strokeWidth='2'
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={"2"}
                        strokeLinecap="square"
                        ></Line>
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
