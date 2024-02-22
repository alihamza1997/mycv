import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var work = this.props.resumeEducation.map(function (work, i) {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#333",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fa fa-university experience-icon"></i>}
            key={i}
          >

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.instituation}
            </h4>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="education" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "white" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#333",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
