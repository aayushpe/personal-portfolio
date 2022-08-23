import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
                <img src={contactImg} alt="Laptop"/>
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
                <div>
                  <h2>About Me</h2>
                </div>

                <p>I am a dedicated, and open-minded computer engineering student studying at the University of Texas at Dallas.
                                I enjoy creating products and solutions
                                that both challenge me as a software developer and an engineer.
                </p>
                <div>
                  <p>Want to get in touch? Please contact aayushpe@gmail.com.</p>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
