import React, { useState } from "react";
import { Row, Col, ListGroup, Image } from "react-bootstrap";
import activity_feed_data from "../data/activity_feed_data.js";

const ActivityFeed = () => {
  const [feeds, setFeeds] = useState(activity_feed_data);

  return (
    <ListGroup variant="flush">
      {feeds.map((feed) => (
        <ListGroup.Item key={feed.id}>
          <Row className="task-item">
            <Col md={2} className="text-left">
              <Image src={feed.image} alt={feed.description} fluid rounded />
            </Col>
            <Col md={10} className="text-left">
              <p>{feed.description}</p>
              <p style={{ color: "#757575" }}>{feed.date}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ActivityFeed;
