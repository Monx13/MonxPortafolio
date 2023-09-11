import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Buho2.png";
import github from '../assets/img/github.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/logotipo-de-instagram.png';
import discord from '../assets/img/discordia.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/Monx13" target="_blank"><img src={github} alt="" /></a>
                <a href="https://www.facebook.com/vazmonserrat13" target="_blank"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/_monx13_" target="_blank"><img src={instagram} alt="" /></a>
                <a href="https://discord.gg/YyVJtMbK" target="_blank"><img src={discord} alt="" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
