import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style= {{width: "180px"}} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yazid-wiliadi-2188982a5/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=61555173515604"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/vlykz_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Developed by Yazid Wiliadi.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
