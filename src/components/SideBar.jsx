import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdPlaylistAddCheck } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Acmy Solutions</div>
      <Link to="/">
        <Button variant="outline-light" className="mb-3">
          <MdPlaylistAddCheck className="mr-2" /> Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
