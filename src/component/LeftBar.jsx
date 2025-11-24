import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";



function LeftBar() {
  return (
    <>
      {/* parsonal-info-start */}
      <div className="col-xxl-3 col-xl-3">
        <div className="bostami-parsonal-info-area">
          <div className="bostami-parsonal-info-wrap">
            {/* img */}
              <div className="bostami-parsonal-info-img">
                <img
                  src="img/parsonal-info/parson-img-1.png"
                  alt="avatar"
                />
              
              </div>
             
            {/* name */}
            <h4 className="bostami-parsonal-info-name">
              <a href="#">Manas Singh</a>
            </h4>
            <span className="bostami-parsonal-info-bio mb-15">
              Software Developer
            </span>
            {/* socail link */}
            <ul className="bostami-parsonal-info-social-link mb-30">
              <li>
              <a href="https://github.com/Manas-sin" className="github">
  <i className="fa-brands fa-github" />
</a>

              </li>
              <li>
                <a href="https://x.com/manassi63116169" className="twitter">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/manas_singh_rajput1/" className="instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/manassinghcoder/"
                  className="linkedin"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
            {/* contact */}
            <div className="bostami-parsonal-info-contact mb-30">
              <div className="bostami-parsonal-info-contact-item phone">
                <div className="icon">
                  <i className="fa-solid fa-mobile-screen-button" />
                </div>
                <div className="text">
                  <span>Phone</span>
                  <p>+918130577549</p>
                </div>
              </div>
            
                <div className="bostami-parsonal-info-contact-item email">
                  <div className="icon">
                    <i className="fa-regular fa-envelope-open-text" />
                  </div>
                
                  <div className="text">
                    <span>Email</span>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    <p className="email">manassingh910@gmail.com</p>
                    </a>
                  </div>

                </div>

              <a href="https://www.google.com/maps/place/RC-1145,+Shiv+Park,+Khora+Colony,+Sector+62A,+Noida,+Uttar+Pradesh+201020/@28.6161555,77.3438563,19.03z/data=!4m14!1m7!3m6!1s0x390ce516eb0c96d5:0xd4f0fef184d586fd!2sS+S+D+Public+School!8m2!3d28.6162255!4d77.3445446!16s%2Fg%2F11k3x34t08!3m5!1s0x390ce53ccf4b6dff:0xe3a765c2ea499838!8m2!3d28.6164259!4d77.3445676!16s%2Fg%2F11k446tj6p?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                <div className="bostami-parsonal-info-contact-item location">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="text">
                    <span>Location</span>
                    <p>Delhi</p>
                  </div>
                </div>
              </a>
              <div className="bostami-parsonal-info-contact-item calendar">
                <div className="icon">
                  <i className="fa-light fa-calendar-days" />
                </div>
                <div className="text">
                  <span>Birthday</span>
                  <p>August 23, 2000</p>
                </div>
              </div>
            </div>
            {/* cv button */}
            <Stack className="">
              <a
                href="./cv/ManasResumeI.pdf"
                download="Resume-Manas.pdf"
                style={{
                  textDecoration: "italic",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                
                <Button
                  variant="outlined"
                  startIcon={<i className="fa-regular fa-download" />} // Ensure Font Awesome is included in your project
                >
                  Download CV
                </Button>
              </a>
            </Stack>
          </div>
        </div>
      </div>
      {/* personal-info-end */}
    </>
  );
}

export default LeftBar;
