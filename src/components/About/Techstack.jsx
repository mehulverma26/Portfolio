import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNpm,
  SiJinja,
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://devdocs.io/javascript/" target="_blank">
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/en/docs" target="_blank">
          <DiNodejs />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" target="_blank">
        <a href="https://docs.npmjs.com/">
          <SiNpm />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react.dev/reference/react" target="_blank">
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com/doc" target="_blank">
          <DiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://firebase.google.com/docs" target="_blank">
          <SiFirebase />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/doc/" target="_blank">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://docs.oracle.com/en/java/" target="_blank">
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://jinja.palletsprojects.com/en/3.1.x/" target="_blank">
          <SiJinja />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
          <SiHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
          <SiCss3 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.php.net/docs.php" target="_blank">
          <SiPhp />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
