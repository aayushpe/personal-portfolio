import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button';

export const Projects = () => {

  const projects1 = [
    {
      title: "Gas-Map",
      description: "MongoDB, Express, Nodejs",
      imgUrl: projImg1,
    },
  ];
  const projects2 = [
    {
      title: "Score Keeper",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg2,
    },
  ];
  const projects3 = [
    {
      title: "Springboot REST api",
      description: "Docker, Springboot",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <p>This Project uses MongoDB, Nodejs and Express to create an app that displays Gas Prices, 
                        similar to Gas buddy. The app uses a CRUD system in order to store new gas station
                        location data and prices, which is then is stored in MongoDb.
                        In addition to this, there is a feature to extract and autofill the gas station price and
                        name using the Google Vision API. The application also uses a REST api protocol to send and
                        retrieve data from MongoDB.<br></br><br></br>
                        <a target="_blank" rel="noreferrer" href="https://github.com/aayushpe/Gas_Map"><Button variant="light">Click to go to Project</Button>{' '}</a></p>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <p>An application that utilizes javascript and HTML to keep 
                          the score of a game.<br></br><br></br>
                        <a target="_blank" rel="noreferrer" href="https://aayushpe.github.io/ScoreKeeper/"><Button variant="light">Click to go to Project</Button>{' '}</a></p>
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        <p>A REST api that connects to mongoDB using Springboot and Docker<br></br><br></br>
                        <a target="_blank" rel="noreferrer" href="https://github.com/aayushpe/Mongo-Database"><Button variant="light">Click to go to Project</Button>{' '}</a></p>
                      </Row>
                    </Tab.Pane>
                  
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
