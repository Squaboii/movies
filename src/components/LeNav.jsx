import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-rating-stars-component";
import { FiRefreshCcw } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";

function LeNav(props) {
  const [newmovie, Setnewmovie] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(newmovie);
  console.log(props.addmovies);
  return (
    <div>
      {" "}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">THE INFINTE MOVIES</Navbar.Brand>
          <div
            className="space
          "
          >
            <ReactStars
              count={10}
              // onChange={ratingChanged}
              size={24}
              color="lightgrey"
              activeColor="#000000"
              onChange={(ratingg) => props.setRating(ratingg)}
            />
            <FiRefreshCcw
              onClick={() => {
                props.setRating(0);
              }}
            />
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1"></Nav.Link>
              <Nav.Link href="#action2"></Nav.Link>

              <Nav.Link href="#" disabled></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(Eve) => {
                  props.setSearch(Eve.target.value);
                }}
              />
              <Button
                onClick={handleShow}
                variant="outline-darK"
                style={{ color: "black" }}
              >
                Add
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="Cover"
              placeholder="Cover"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>
                Setnewmovie({ ...newmovie, image: event.target.value })
              }
            />
            <Form.Control
              type="Title"
              placeholder="Title"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>
                Setnewmovie({ ...newmovie, title: event.target.value })
              }
            />
            <Form.Control
              type="Rating"
              placeholder="Rating"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>
                Setnewmovie({
                  ...newmovie,
                  rating: event.target.value,
                })
              }
            />
            <Form.Control
              type="Actors"
              placeholder="Actors"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>
                Setnewmovie({
                  ...newmovie,
                  actors: event.target.value,
                })
              }
            />
            <Form.Control
              type="Description"
              placeholder="Description"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>
                Setnewmovie({ ...newmovie, desc: event.target.value })
              }
            />
            <Form.Control
              type="Temp"
              placeholder="Temps"
              className="me-2"
              aria-label="Search"
              onChange={(event) =>
                Setnewmovie({ ...newmovie, time: event.target.value })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-darK" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="outline-darK"
              onClick={() => {
                props.setaddmovie([...props.addmovie, newmovie]);

                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </div>
  );
}

export default LeNav;
