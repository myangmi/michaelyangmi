import React from 'react';
import '../../App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBaby, FaUserGraduate } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';

const TimeLine = () => (
  <VerticalTimeline lineColor='#C0C0C0'>
    <VerticalTimelineElement
      className="timeLineBirth"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: 'white' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="November 8, 1995"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<FaBaby />}
    >
      <h3 className="vertical-timeline-element-title">Birth</h3>
      <h4 className="vertical-timeline-element-subtitle">
        Overland Park, Kansas
      </h4>
      <p>
        Born at Overland Park Regional Medical Center.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="timeLineGraduation"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="Spring 2014"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
      icon={<FaUserGraduate />}
    >
      <h3 className="vertical-timeline-element-title">
        Graduated Highschool
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Stilwell, Kansas</h4>
      <p>
        Graduated from Blue Valley Highschool
        <br />
        <br />
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="timeLineCernerInternship"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="May 2019 - August 2019"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white', 'box-shadow': '0 0 0 4px #cbcbcb inset 0 2px 0 rgb(0 0 0 / 8%) 0 3px 0 4px rgb(0 0 0 / 5%)' }}
      iconClassName={'test'}
      icon={<IoIosWater />}
    >
      <h3 className="vertical-timeline-element-title">
        Summer Internship at Cerner
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Kansas City, Missouri</h4>
      <p>
        Participated in a summer internship at Cerner where
        I obtained my first real-world experience in the software engineering industry.
        <br />
        <br />
        Click to read more...
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="timeLineKstate"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="2019"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white', 'box-shadow': '0 0 0 4px #cbcbcb inset 0 2px 0 rgb(0 0 0 / 8%) 0 3px 0 4px rgb(0 0 0 / 5%)' }}
      iconClassName={'test'}
      icon={<IoIosWater />}
    >
      <h3 className="vertical-timeline-element-title">
        Graduated University
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Manhattan, Kansas</h4>
      <p>
        Graduated from Kansas State University with a B.S. in Computer Science
        <br />
        <br />
        Click to read more...
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="timeLineCerner"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="February 2020 - Present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: 'white', 'box-shadow': '0 0 0 4px #cbcbcb inset 0 2px 0 rgb(0 0 0 / 8%) 0 3px 0 4px rgb(0 0 0 / 5%)' }}
      iconClassName={'test'}
      icon={<IoIosWater />}
    >
      <h3 className="vertical-timeline-element-title">
        Software Engineer at Cerner
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Kansas City, Missouri</h4>
      <p>
        Fulltime Software Engineer with variety of responsibilites and projects
        <br />
        <br />
        Click to read more...
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default TimeLine;
