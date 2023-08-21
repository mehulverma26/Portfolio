import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiKalilinux,
  SiWindows,
  SiEclipseide,
} from "react-icons/si";
import { Link } from "react-router-dom";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://www.microsoft.com/en-us/windows?r=1">
          <SiWindows />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://code.visualstudio.com/">
          <SiVisualstudiocode />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://www.kali.org/">
          <SiKalilinux />
        </Link>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Link to="https://www.eclipse.org/downloads/">
          <SiEclipseide />
        </Link>
      </Col>
    </Row>
  );
}

export default Toolstack;
