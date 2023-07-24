import  { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import './College.css'

const collegesData = [
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },
  {
    id: 1,
    name: "XYZ University",
    rating: 4.8,
    admissionDate: "Fall 2023",
    researchProjects: 200,
    image: "college1.jpg",
    events: ["Event 1", "Event 2", "Event 3"],
    sportsFacilities: "Gym, Football field, Basketball court",
  },

];

const College = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (college) => {
    setSelectedCollege(college);
    setShowModal(true);
  };

  return (
    <div className="college-container">
      {collegesData.map((college) => (
        <Card
          key={college.id}
          style={{ width: "18rem" }}
          className="college-card"
        >
          <Card.Img variant="top" src={college.image} />
          <Card.Body>
            <Card.Title>{college.name}</Card.Title>
            <Card.Text>
              Rating: {college.rating}
              <br />
              Admission Date: {college.admissionDate}
              <br />
              Research Projects: {college.researchProjects}
            </Card.Text>
            <Button variant="primary" onClick={() => handleShow(college)}>
              Details
            </Button>
          </Card.Body>
        </Card>
      ))}

      {selectedCollege && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCollege.name} Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Events:</h5>
            <ul>
              {selectedCollege.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
            <h5>Sports Facilities:</h5>
            <p>{selectedCollege.sportsFacilities}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default College;
