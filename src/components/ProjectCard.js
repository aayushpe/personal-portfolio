import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/aayushpe"><img src={imgUrl} /></a>
      </div>
    </Col>
  )
}
