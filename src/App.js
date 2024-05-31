import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
const App = () => {
  return (
    <>
      <main>
        <Container fluid>
          <Row>
            <Col md={2} className="px-0">
              <SideBar />
            </Col>
            <Col md={10} className="px-0">
              <Header />
              <Container>
                <Outlet />
              </Container>
              <Footer />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default App;
