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
import { Link } from "react-router-dom";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://devdocs.io/javascript/">
          <DiJavascript1 />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://nodejs.org/en/docs">
          <DiNodejs />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://docs.npmjs.com/">
          <SiNpm />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://react.dev/reference/react">
          <DiReact />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://git-scm.com/doc">
          <DiGit />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://firebase.google.com/docs">
          <SiFirebase />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://www.python.org/doc/">
          <DiPython />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://docs.oracle.com/en/java/">
          <DiJava />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://jinja.palletsprojects.com/en/3.1.x/">
          <SiJinja />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <SiHtml5 />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <SiCss3 />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://www.php.net/docs.php">
          <SiPhp />
        </Link>
      </Col>
    </Row>
  );
}

export default Techstack;
