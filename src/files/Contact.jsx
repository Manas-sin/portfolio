import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { message } from 'antd'; // Import message and Space from Ant Design
import emailjs from "emailjs-com"; // Ensure this is imported
import React, { useEffect, useState } from "react";
import Head from "../component/Head";
import LeftBar from "../component/LeftBar";
import RightBar from "../component/RightBar";

function Contact() {
  // Initialize state with default values
  const [value, setValue] = useState({
    name: "",
    email: "",
    messages: "",
  });

  // Initialize Ant Design message API
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    emailjs.init("V93fNIcR5gK-PfQzz"); // Initialize with your user ID
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, messages } = value;

    // Check if all fields are filled
    if (!name || !email || !messages) {
      messageApi.warning('Please fill in all fields.');
      return;
    }

    try {
      const response = await emailjs.send("service_n12ui0j", "template_9ps3l28", {
        from_name: name,
        from_email: email,
        message: messages,
      });
      
      // Handle successful response
      if (response.status === 200) {
        messageApi.success('Message sent successfully!');
        setValue({ name: "", email: "", messages: "" }); // Clear form fields
      } else {
        // Handle failure response
        console.error("Failed to send email:", response);
        messageApi.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      // Handle errors
      messageApi.error(`An error occurred: ${error.text || error.message}`);
    }
  };

  return (
    <React.Fragment>
      <div className="page-wrapper home-1" style={{ backgroundImage: "url('/img/bg/page-bg-1.jpg')" }}>
        <Head />
        <div>
          <div className="container z-index-3">
            <div className="row">
              <LeftBar />
              <div className="col-xxl-8 col-xl-9">
                <div className="bostami-page-content-wrap">
                  <div className="section-wrapper pl-60 pr-60 pt-60">
                    <div className="bostami-page-title-wrap mb-15">
                      <h2 className="page-title">Contact</h2>
                    </div>
                  </div>
                  <div className="section-wrapper pr-60 pl-60 mb-30">
                    <div className="contact-area bg-light-white-2">
                      <h5 className="contact-title">I'm always open to discussing product</h5>
                      <h5 className="contact-title-b">design work or partnerships.</h5>
                      {/* Context holder for displaying Ant Design messages */}
                      {contextHolder}
                      <form className="contact-form" onSubmit={handleSubmit}>
                        <Box sx={{ "& > :not(style)": { m: 2, width: "100%" } }}>
                          <TextField
                            id="name"
                            value={value.name}
                            onChange={handleChange}
                            label="Name"
                            variant="standard"
                          />
                        </Box>
                        <Box sx={{ "& > :not(style)": { m: 2, width: "100%" } }}>
                          <TextField
                            id="email"
                            value={value.email}
                            onChange={handleChange}
                            label="Email"
                            variant="standard"
                          />
                        </Box>
                        <Box sx={{ "& > :not(style)": { m: 2, width: "100%" } }}>
                          <TextField
                            id="messages"
                            value={value.messages}
                            onChange={handleChange}
                            label="Message"
                            variant="standard"
                            multiline
                            rows={2}
                          />
                        </Box>
                        <Stack direction="row" spacing={1} className="mt-3 p-2 m-2">
                          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                          </Button>
                        </Stack>
                      </form>
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
      </div>
    </React.Fragment>
  );
}

export default Contact;
