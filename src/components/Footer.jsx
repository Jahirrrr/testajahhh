//components
import { Navbar, Container } from "react-bootstrap";

//stylesheet
import "./footer-styles.scss";

const Footer = () => {
  return (
    <>
      <Navbar bg="light" className="footer">
        <Container className="justify-content-center">
          <Navbar.Text>
            Develop by <a href="https://jahirishere.my.id">Jahirrrr</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
