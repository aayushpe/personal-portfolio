import { Container, Col, Row, Button } from "react-bootstrap";
import image from "../assets/img/about.jpg"

export const AboutMe = () => {
    return(
        <section className="project" id="about">
            <Container>
                <h2 className="mb-2">About Me</h2>
                <Row>
                <Col size={12} sm={12} md={12}>
                        <div className="text-center">
                            <p>I am a computer engineering student studying at the University of Texas at Dallas.
                                I am dedicated, open-minded and work well in teams. I want to create products and solutions
                                that both challenge me as a software developer and engineer. My greatest skill is the ability
                                to google information.
                            </p>
                        </div>
                </Col>
                </Row>
                
                <div className="text-center">
                    <a target="_blank" rel="noreferrer" href="https://github.com/aayushpe/Gas_Map"><Button variant="light">Download my Resume</Button>{' '}</a>
                </div>
            
            </Container>
        </section>
    )
}