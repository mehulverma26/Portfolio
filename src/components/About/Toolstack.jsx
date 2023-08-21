import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiKalilinux,
  SiWindows,
  SiEclipseide,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/en-us/windows?r=1">
          <SiWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.kali.org/">
          <SiKalilinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.eclipse.org/downloads/">
          <SiEclipseide />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
