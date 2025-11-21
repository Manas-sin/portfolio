import { Timeline } from "antd";
import React from "react";
import Head from "../component/Head";
import LeftBar from "../component/LeftBar";
import RightBar from "../component/RightBar";

function resume() {
  return (
    <React.Fragment>
      <div
        className="page-wrapper home-1"
        style={{ backgroundImage: "url('/img/bg/page-bg-1.jpg')" }}
      >
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <LeftBar />
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">resume</h2>
                    </div>
                  </div>
                  <div className="section-wrapper bg-light-white-2 pt-40 pb-40 pl-60 pr-60">
                    <div className="education-container">
                      <div className="bostami-section-title-wrap mb-20">
                        <h4 className="section-title">
                          <i className="fa-light fa-briefcase" />
                          Experience
                        </h4>
                        <p className="para">
                          Solving complex problems and delivering innovative
                          solutions in tech.
                        </p>
                      </div>
                      <Timeline
                        mode="alternate"
                        className="custom-timeline m-3"
                        items={[
                          {
                            children: (
                              <div className="timeline-item-content">
                                <b> Zupee </b> <br />
                                <strong className="m-2">Software Engineer(Backend)</strong>(
                                <i>Jun 2025 - October2025 </i>)
                              </div>
                            ),
                          },
                          {
                            children: (
                              <div className="timeline-item-content">
                                <b> Midas Consulting </b> <br />
                                <strong className="m-2">Software Engineer</strong>(
                                <i> Apr 2024 - Jun 2025</i>)
                              </div>
                            ),
                          },
                          {
                            children: (
                              <div className="timeline-item-content">
                                <b> Webloop infotec </b> <br />
                                <strong className="m-2">
                                  Web Developer intern
                                </strong>
                                (<i> March 2021 – June 2022</i>)
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                    <div className="education-container">
                      <div className="bostami-section-title-wrap mb-20">
                        <h4 className="section-title">
                          <i className="fa-light fa-school" />
                          Education
                        </h4>
                        <p className="para">
                          Constantly evolving and adapting,innovation and a
                          commitment to lifelong learning.
                        </p>
                      </div>
                      <Timeline
                        mode="alternate"
                        className="custom-timeline m-3"
                        items={[
                          {
                            children: (
                              <div className="timeline-item-content">
                                <b> Master in Computer Applications </b> <br />
                                <strong className="m-2">MCA</strong>(
                                <i> 2023 - 2025 </i>)
                              </div>
                            ),
                          },
                          {
                            children: (
                              <div className="timeline-item-content">
                                <b> Bachelor in Computer Applications </b>{" "}
                                <br />
                                <strong className="m-2">BCA</strong>(
                                <i> 2018 - 2021 </i>)
                              </div>
                            ),
                          },
                          {
                            children: (
                              <div className="timeline-item-content">
                                <b> Dashemsh Public School </b> <br />
                                <strong className="m-2">10 + 2</strong>(
                                <i> 2015 - 2018 </i>)
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="section-wrapper bg-light-white-2 pt-20 pb-60 pl-60 pr-60">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="bostami-section-title-wrap mb-20">
                          <h4 className="section-title">Skills</h4>
                          <p className="para">
                            I worked with these front-end frameworks back-end
                            and libraries.{" "}
                          </p>
                        </div>
                        <div className="knowledeges-item-wrap">
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                              alt="Html"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                              alt="Css"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                              alt="JavaScript"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
                              alt="Git & Github"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg"
                              alt="Npm"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://redux.js.org/img/redux-logo-landscape.png"
                              alt="Redux"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                              alt="Node.js"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
                              alt="Java"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                              alt="TypeScript"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                              alt="React.js"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="../img/skill/reactRoute.png"
                              alt="React Router"
                              className="knowledge-image"
                            />
                          </div>
                          <div className="gk-item">
                            <img
                              src="../img/skill/webpack.png"
                              alt="Webpack"
                              className="knowledge-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="copyright text-center bg-light-white-2 pt-25 pb-25">
                    <span>
                      © {new Date().getFullYear()} All Rights Reserved by Manas
                      Singh
                      <a target="_blank" rel="noopener noreferrer" href="#"></a>
                    </span>
                  </div>
                </div>
              </div>
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default resume;
