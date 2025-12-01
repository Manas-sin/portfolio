import React from "react";
import Head from "../component/Head";
import LeftBar from "../component/LeftBar";
import RightBar from "../component/RightBar";
import MaskedCursor from "../component/MaskedCursor";
import MagnifiedText from "../component/MagnifiedText";

function Home() {
  return (
    <React.Fragment>
      <div className="page-wrapper home-1">
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <LeftBar />
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  <div className="section-wrapper bg-light-white-2 pt-50 pb-60 pl-40 pr-40">
                    <div className="section-wrapper pl-60 pr-60 pt-60">
                      <div className="bostami-page-title-wrap mb-5">
                        <h2 className="page-title mb-5">About</h2>
                      </div>
                    </div>
                    <div className="section-wrapper pl-60 pr-60 mb-5">
                      <div className="section-wrapper pl-60 pr-60 mb-5">

                        {/* --- Heading Magnifier --- */}
                        <MagnifiedText magnifyRadius={110} magnifyScale={1.4}>
                          <div style={{ display: "inline-block" }}>
                            <h2 className="h2-typewriter" style={{ textAlign: "center" }}>
                              Hi👋, I'm Manas Singh
                            </h2>
                          </div>
                        </MagnifiedText>

                        {/* --- Sub Heading Magnifier --- */}
                        <MagnifiedText magnifyRadius={140} magnifyScale={1.9}>
                          <div style={{ display: "inline-block" }}>
                            <h5 className="fade-in mt-5" style={{ textAlign: "center" }}>
                              Full Stack Developer | Tech Enthusiast | Lifelong Learner
                            </h5>
                          </div>
                        </MagnifiedText>

                      </div>
                    </div>

                  </div>
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
      </div>{" "}
    </React.Fragment>
  );
}

export default Home;
