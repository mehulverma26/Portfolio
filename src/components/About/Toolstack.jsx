import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiKalilinux, SiEclipseide } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.microsoft.com/en-us/windows?r=1"
          target="_blank"
          rel="noreferrer"
        >
          <FaWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          <VscVscode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.kali.org/" target="_blank" rel="noreferrer">
          <SiKalilinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.eclipse.org/downloads/"
          target="_blank"
          rel="noreferrer"
        >
          <SiEclipseide />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
