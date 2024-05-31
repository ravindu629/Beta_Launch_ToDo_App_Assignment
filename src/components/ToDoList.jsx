import React, { useState } from "react";
import Task from "../components/Task";
import ReactPaginate from "react-paginate";
import { Row, ListGroup, Container, Card } from "react-bootstrap";

const ToDoList = ({ tasks }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const tasksPerPage = 8;
  const pagesVisited = pageNumber * tasksPerPage;

  const displayTasks = tasks
    .slice(pagesVisited, pagesVisited + tasksPerPage)
    .map((task) => (
      <ListGroup.Item key={task.id}>
        <Task task={task} />
      </ListGroup.Item>
    ));

  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Card className="rounded">
      <Container>
        <Row>
          <Card.Header>
            <h5>Tasks</h5>
          </Card.Header>
        </Row>
        <Row>
          <ListGroup variant="flush">{displayTasks}</ListGroup>
        </Row>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"activeCustom"}
        />
      </Container>
    </Card>
  );
};

export default ToDoList;
