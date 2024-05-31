import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container, Card } from "react-bootstrap";
import ToDoList from "../components/ToDoList";
import ActivityFeed from "../components/ActivityFeed";
import PrioritiesChart from "../components/PrioritiesChart";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  //get the data from the API
  useEffect(() => {
    function getTasks() {
      axios
        .get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
        .then((res) => {
          setTasks(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getTasks();
  }, []);

  return (
    <>
      <Row className="my-3">
        <Col md={12}>
          <Card className="rounded">
            <Container style={{ padding: "20px" }}>
              <Row>
                <h4>Welcome back, John Doe</h4>
              </Row>
              <Row>
                <p style={{ color: "#757575" }}>
                  The end of the year is coming. Are you planning your
                  performance interviews? You can do this super efficiently with
                  Acmy.
                </p>
                <p>
                  <a href="http://example.com" style={{ color: "#BC006D" }}>
                    Look here for more information
                  </a>
                </p>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>

      <Row className="my-3">
        <Col md={8}>
          <ToDoList tasks={tasks} />
        </Col>

        <Col md={4}>
          <Card className="rounded">
            <Container>
              <Row>
                <Card.Header>
                  <h5>Activity Feed</h5>
                </Card.Header>
              </Row>
              <Row>
                <ActivityFeed />
              </Row>
            </Container>
          </Card>

          <Card className="rounded my-3">
            <Container>
              <Row>
                <Card.Header>
                  <h5>Tasks Priorities</h5>
                </Card.Header>
              </Row>
              <Row>
                <PrioritiesChart />
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
