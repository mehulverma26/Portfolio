import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "./Images/leaf.png";
import technomatch23 from "./Images/technomatch23.png";
import startup_page from "./Images/chrome_startup_page.png";
import games from "./Images/games_made_using_python.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startup_page}
              isBlog={false}
              title="Chrome Startup Page"
              description="This was made to change how the normal chrome startup page looked into something that can be better looking and effective as well. You can search normally as you could do on the startup page, macros for commonly used websites such as github, youtube and more are present there, redirects if the website is not in a macro"
              ghLink="https://github.com/mehulverma26/chrome-startup-page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/mehulverma26/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={technomatch23}
              isBlog={false}
              title="Technomatch23"
              description="This was used to create an AI based model that can predict weather by analysing the data and returning with predictions for the weather."
              ghLink="https://github.com/mehulverma26/technomatch23"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Games made using python"
              description="These were a few games that I had created using Python, such as, blackjack, chess, tic tac toe, minesweeper, rps, snape game, etc."
              ghLink="https://github.com/mehulverma26/games-using-python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
