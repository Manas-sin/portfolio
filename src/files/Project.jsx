import { Card } from "antd";
import React from "react";
import Head from "../component/Head";
import LeftBar from "../component/LeftBar";
import RightBar from "../component/RightBar";
const { Meta } = Card;

function blog() {
  return (
    <React.Fragment>
      <div
        className="page-wrapper home-1 "
        style={{ backgroundImage: "url('/img/bg/page-bg-1.jpg')" }}
      >
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <LeftBar />
              {/* blog */}
              {/* blog-page-start */}
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  {/* page title */}
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Project</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pr-60 pl-60 mb-60">
                    <div className="swiper-slide">
                      <div className="row">
                        {/* single blog */}
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                          <div
                            className="blog-slider-single bg-white shadow-lg rounded"
                            style={{ transition: "transform 0.3s" }}
                          >
                            <Card
                              hoverable
                              style={{
                                maxWidth: 350,
                                borderRadius: "10px",
                                textAlign: "center",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow effect
                              }}
                              cover={
                                <a
                                  href="https://portal.midastech.org/applicants"
                                  className="cover-link"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#f9f9f9", // Light background behind image
                                    height: 160, // Larger height for more spacing
                                    padding: "10px",
                                  }}
                                >
                                  <img
                                    alt="Midas Logo"
                                    src="../img/blog/midaslogo.png"
                                    style={{
                                      maxHeight: "100%",
                                      maxWidth: "100%",
                                      objectFit: "contain",
                                    }}
                                  />
                                </a>
                              }
                            >
                              <Meta
                                title="Resume Parsing"
                                description="This is Resume Parsing (ATS) it parse the and populate the data dynamicaly "
                                style={{
                                  fontSize: 16, // Slightly larger font size for readability
                                  margin: "15px 0",
                                }}
                              />
                              {/* <p style={{ fontSize: 12, color: "#6c757d" }}>
                              
                              </p> */}
                            </Card>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                          <div
                            className="blog-slider-single bg-white shadow-lg rounded"
                            style={{ transition: "transform 0.3s" }}
                          >
                            <Card
                              hoverable
                              style={{
                                maxWidth: 350,
                                borderRadius: "10px",
                                textAlign: "center",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow effect
                              }}
                              cover={
                                <a
                                  href="https://portal.midastech.org/applicants/search"
                                  className="cover-link"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#f9f9f9", // Light background behind image
                                    height: 160, // Larger height for more spacing
                                    padding: "10px",
                                  }}
                                >
                                  <img
                                    alt="Midas Logo"
                                    src="../img/blog/midaslogo.png"
                                    style={{
                                      maxHeight: "100%",
                                      maxWidth: "100%",
                                      objectFit: "contain",
                                    }}
                                    onError={(e) => {
                                      e.target.src = "../img/default-image.png";
                                    }} // Fallback image
                                  />
                                </a>
                              }
                            >
                              <Meta
                                title="Boolean Search"
                                description="I have Created a Boolean search feature which search the user on the basis of the conditions"
                                style={{
                                  fontSize: 16, // Slightly larger font size for readability
                                  margin: "15px 0",
                                }}
                              />
                              {/* <p style={{ fontSize: 12, color: "#6c757d" }}>
                                Learn more about our services
                              </p> */}
                            </Card>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                          <div
                            className="blog-slider-single bg-white shadow-lg rounded"
                            style={{ transition: "transform 0.3s" }}
                          >
                            <Card
                              hoverable
                              style={{
                                maxWidth: 350,
                                borderRadius: "10px",
                                textAlign: "center",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow effect
                              }}
                              cover={
                                <a
                                  href="https://kgs.capitall.io/"
                                  className="cover-link"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#f9f9f9", // Light background behind image
                                    height: 160, // Larger height for more spacing
                                    padding: "10px",
                                  }}
                                >
                                  <img
                                    alt="Midas Logo"
                                    src="../img/blog/kgsomanillp.png"
                                    style={{
                                      maxHeight: "100%",
                                      maxWidth: "100%",
                                      objectFit: "contain",
                                    }}
                                  />
                                </a>
                              }
                            >

                              <Meta
                                title="K.G. Somani"
                                description="I have created this website for the K.G. Somani's Employees for their Goods"
                                style={{
                                  fontSize: 16, // Slightly larger font size for readability
                                  margin: "15px 0",
                                }}
                              />
                              {/* <p style={{ fontSize: 12, color: "#6c757d" }}>
                                Learn more about our services
                              </p> */}
                            </Card>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                          <div
                            className="blog-slider-single bg-white shadow-lg rounded"
                            style={{ transition: "transform 0.3s" }}
                          >
                            <Card
                              hoverable
                              style={{
                                maxWidth: 350,
                                borderRadius: "10px",
                                textAlign: "center",
                                overflow: "hidden",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow effect
                              }}
                              cover={
                                <a
                                  href="https://www.gyanshetra.com/"
                                  className="cover-link"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#f9f9f9", // Light background behind image
                                    height: 160, // Larger height for more spacing
                                    padding: "10px",
                                  }}
                                >
                                  <img
                                    alt="Midas Logo"
                                    src="../img/blog/gyanshetra.jpeg"
                                    style={{
                                      maxHeight: "100%",
                                      maxWidth: "100%",
                                      objectFit: "contain",
                                    }}
                                    onError={(e) => {
                                      e.target.src = "../img/default-image.png";
                                    }} // Fallback image
                                  />
                                </a>
                              }
                            >
                              <Meta
                                title="Gyanshetra"
                                description="I have created this website for an education management consulting firm that serves for the students"
                                style={{
                                  fontSize: 16, // Slightly larger font size for readability
                                  margin: "15px 0",
                                }}
                              />
                              {/* <p style={{ fontSize: 12, color: "#6c757d" }}>
                                Learn more about our services
                              </p> */}
                            </Card>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  {/* footer copyright */}
                  <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
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

export default blog;
