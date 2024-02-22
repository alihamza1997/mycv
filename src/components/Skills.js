import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
    if (this.props.sharedExpertis && this.props.resumeBasicInfo) {
      var sectionName2 = this.props.resumeBasicInfo.section_name.expertis;
      var expertis = this.props.sharedExpertis.icons.map(function (expertis, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile w-auto p-3">
                  <p
                    className="text-center"
                    style={{ margin: "0" }}
                  >
                    {expertis.name}
                  </p>
              </div>
            </span>
          </li>
        );
      });
    }
    if (this.props.sharedPskills && this.props.resumeBasicInfo) {
      var sectionName3 = this.props.resumeBasicInfo.section_name.pskills;
      var pskills = this.props.sharedPskills.icons.map(function (pskills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile w-auto p-3">
                  <p
                    className="text-center"
                    style={{ margin: "0" }}
                  >
                    {pskills.name}
                  </p>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
        <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName2}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto mt-5 skill-icon">{expertis}</ul>
        </div>
      </div>
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="text-white">{sectionName3}</span>
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto mt-5 skill-icon">{pskills}</ul>
        </div>
      </div>
      </section>
    );
  }
}

export default Skills;
