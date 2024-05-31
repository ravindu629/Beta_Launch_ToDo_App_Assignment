import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col md={12}>
        <header className="header-border">
          <Navbar expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/" className="heading">
                Dashboard
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/">
                    <FaRegBell />
                  </Nav.Link>
                  <Nav.Link href="/">
                    <Image
                      src="/images/image_1.jpg"
                      alt="profile_image"
                      fluid
                      rounded
                    />
                  </Nav.Link>
                  <Nav.Link href="/">
                    <IoIosArrowDown />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
