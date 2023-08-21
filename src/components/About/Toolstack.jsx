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
        <a href="https://www.microsoft.com/en-us/windows?r=1" target="_blank">
          <SiWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/" target="_blank">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.kali.org/" target="_blank">
          <SiKalilinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.eclipse.org/downloads/" target="_blank">
          <SiEclipseide />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
