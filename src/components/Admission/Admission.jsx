import { useState } from "react";
import { Button, Modal, Form, Card, Row, Col } from "react-bootstrap";
import "./Admistion.css";
const Admission = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [candidateInfo, setCandidateInfo] = useState({
    candidateName: "",
    subject: "",
    candidateEmail: "",
    candidatePhone: "",
    address: "",
    dateOfBirth: "",
    image: "",
  });

  const colleges = [
    {
      id: 1,
      name: "College Name 1",
      imageUrl:
        "https://drive.google.com/uc?id=1a1x1NSly1dNmIjVsufTdbWp0KnTJo3yh ",
    },
    {
      id: 2,
      name: "College Name 2",
      imageUrl:
        "https://drive.google.com/uc?id=1skS94MPBibOrEiNmI6aV7stH16fsLKkD",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidateInfo({ ...candidateInfo, [name]: value });
  };

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
    setShowModal(true);
  };

  const handleSubmit = () => {
    console.log(candidateInfo);

    setCandidateInfo({
      candidateName: "",
      subject: "",
      candidateEmail: "",
      candidatePhone: "",
      address: "",
      dateOfBirth: "",
      image: "",
    });
    setSelectedCollege(null);
    setShowModal(false);
  };
  return (
    <div className="mergin-admission">
      <div className="text-center mb-5">
        <h1>Admission Now</h1>
      </div>

      {colleges.map((college) => (
        <div
          className="collegename d-flex justify-content-between mb-5"
          key={college.id}
        >
          <div>
            <img
              className="college-img img-fluid"
              src={college.imageUrl}
              alt=""
            />
          </div>
          <div className="d-flex text-center mt-4 ">
            <h1>{college.name}</h1>
          </div>

          <div className="mt-5 mb-5 me-3">
            <button
              className="
          apply-btn"
              onClick={() => handleCollegeClick(college)}
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Admission Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Candidate Name</Form.Label>
              <Form.Control
                type="text"
                name="candidateName"
                value={candidateInfo.candidateName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={candidateInfo.subject}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Candidate Email</Form.Label>
              <Form.Control
                type="email"
                name="candidateEmail"
                value={candidateInfo.candidateEmail}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Candidate Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="candidatePhone"
                value={candidateInfo.candidatePhone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={candidateInfo.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={candidateInfo.dateOfBirth}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admission;
