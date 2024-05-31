import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaRegBell } from "react-icons/fa";

const Task = ({ task }) => {
  const [taskState, setTaskState] = useState({
    id: task.id,
    createdBy: task.createdBy,
    priority: task.priority,
    todo: task.todo,
    completed: task.completed,
    createdAt: task.createdAt,
  });

  const { todo, priority, completed, createdAt } = taskState;
  const taskStatus = completed ? "Done" : "In-Progress";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit" };
    return date.toLocaleDateString(undefined, options);
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "red";
      case "medium":
        return "yellow";
      case "low":
        return "blue";
      default:
        return "grey";
    }
  };

  const getStatusBackground = (status) => {
    return status === "Done" ? "#71CA92" : "#FBE9A7";
  };

  const getStatusTextColor = (status) => {
    return status === "Done" ? "#1A472A" : "#333333";
  };

  const markAsDone = () => {
    setTaskState({ ...taskState, completed: true });
  };

  return (
    <Row className="task-item">
      <Col md={1} className="text-left">
        <FaRegBell style={{ color: getPriorityColor(priority) }} />
      </Col>
      <Col md={6} className="text-left">
        <p>{todo}</p>
        {taskStatus === "In-Progress" && (
          <Button
            variant="light"
            onClick={markAsDone}
            style={{ color: "#BC006D", marginTop: "10px" }}
          >
            Mark as done
          </Button>
        )}
      </Col>
      <Col md={1} className="text-left"></Col>
      <Col md={2} className="text-right">
        <p
          style={{
            backgroundColor: getStatusBackground(taskStatus),
            color: getStatusTextColor(taskStatus),
            padding: "6px 12px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          {taskStatus}
        </p>
      </Col>
      <Col md={2} className="text-right">
        <p style={{ color: "#757575" }}>{formatDate(createdAt)}</p>
      </Col>
    </Row>
  );
};

export default Task;
