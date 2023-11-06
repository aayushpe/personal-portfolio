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
      title: "Simply StateFarm",
      description: "MongoDB, React, Express, NodeJs",
      imgUrl: projImg1,
    },
  ];
  const projects2 = [
    {
      title: "Gas-Map",
      description: "MongoDB, Express, NodeJs",
      imgUrl: projImg2,
    },
  ];
  const projects3 = [
    {
      title: "Reversing a Sound File",
      description: "Java",
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
                        <p>A hackathon project to enhance the small business insurance experience with State Farm. We attempted Improve the signup, and payments process for small businesses, 
                          through simplification of the UI, and individually tailoring provided information. Agents can access an admin dashboard to view users as well.
                        <br></br><br></br>
                        <a target="_blank" rel="noreferrer" href="https://devpost.com/software/small-business-statefarm"><Button variant="light">Click to go to Project</Button>{' '}</a></p>
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
                        <p>This full stack Project leverages the MERN stack to display Gas Prices in the users local area. To add information to the app,
                          users can take a picture of the gas station price board, then the app will parse the data and store it in the database.<br></br><br></br>
                        <a target="_blank" rel="noreferrer" href="https://github.com/aayushpe/Gas_Map"><Button variant="light">Click to go to Project</Button>{' '}</a></p>
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
                        <p>A backmasking algorithim written in Java that uses the stack data structure to reverse a sound file.<br></br><br></br>
                        <a target="_blank" rel="noreferrer" href="https://github.com/aayushpe/Backmasking"><Button variant="light">Click to go to Project</Button>{' '}</a></p>
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
