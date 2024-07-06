import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './style.scss';
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="Resume"
          icon={<BsInfoCircleFill size={40}></BsInfoCircleFill>}
        ></PageHeaderContent>
        {/* <h1>This is Resume Page</h1> */}

        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
            >
                {
                    data.experience.map((item, i)=>(
                        <VerticalTimelineElement 
                        key={i}
                        className="timeline__experience__vertical-timeline-element"
                        contentStyle={{
                            background: 'none',
                            color: 'var(--yellow-theme-sub-text-color)',
                            border: '1.5px solid var(--yellow-theme-main-color)'
                        }}
                        date="2024 - Present"
                        icon={<MdWork></MdWork>}
                        iconStyle={{
                            background: '#181818',
                            color: 'var(--yellow-theme-main-color)'
                        }}
                        >
                            <div className="vertical-timeline-element-title-wrapper">
                            <h3>{item.title}</h3>
                            <h4>
                                {item.subTitle}
                            </h4>
                            <p>{item.description}</p>

                            </div>

                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
            >
                {
                    data.education.map((item, i)=>(
                        <VerticalTimelineElement 
                        key={i}
                        className="timeline__experience__vertical-timeline-element"
                        contentStyle={{
                            background: 'none',
                            color: 'var(--yellow-theme-sub-text-color)',
                            border: '1.5px solid var(--yellow-theme-main-color)'
                        }}
                        date="2018 - 2022"
                        icon={<MdWork></MdWork>}
                        iconStyle={{
                            background: '#181818',
                            color: 'var(--yellow-theme-main-color)'
                        }}
                        >
                            <div className="vertical-timeline-element-title-wrapper">
                            <h3>{item.title}</h3>
                            <h4>
                                {item.subTitle}
                            </h4>
                            <p>{item.description}</p>

                            </div>

                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
