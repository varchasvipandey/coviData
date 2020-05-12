import React from "react";
import { Container, Col, Row } from "reactstrap";
import icon from "../../img/icon.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="offset-lg-4 mt-4">
            <img
              src={icon}
              className="mx-auto d-block footer-icon"
              alt="icon"
            ></img>
          </Col>
          <Col lg="6" className="offset-lg-3 footer__text">
            <p className="footer__text-heading">Covid data</p>
            <p className="footer__text-sub-heading">
              Accurate and tidy <span>Covid-19</span> data application
            </p>
          </Col>
          <Col lg="6" className="offset-lg-3 creadits">
            <p>&copy;Varchasvi Pandey</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
