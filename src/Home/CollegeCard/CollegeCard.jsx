import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CollegeCard.css";

const CollegeCard = () => {
  const collegeData = [
   
    {
      id: 1,
      image: "https://drive.google.com/uc?id=14GVNevTUJgMB7tBftb7yle2cx0GxNDuR",
      name: "College 2",
      admissionDates: "Admission: August 1 - September 15",
      events: "Upcoming Events: Event 3, Event 4",
      researchHistory: "Research History: Lorem ipsum lormduishduishuidiushdiushuidhuishduisahduihsuihduisahdiuhsuidhuishduihsauidhiusahduisahduihsauihdiuashduisahdiuhsuidhuisahd",
      sports: "Sports: Soccer, Volleyball, Swimming",
    },
    {
      id: 2,
      image: "https://drive.google.com/uc?id=14GVNevTUJgMB7tBftb7yle2cx0GxNDuR",
      name: "College 2",
      admissionDates: "Admission: August 1 - September 15",
      events: "Upcoming Events: Event 3, Event 4",
      researchHistory: "Research History: Lorem ipsum lormduishduishuidiushdiushuidhuishduisahduihsuihduisahdiuhsuidhuishduihsauidhiusahduisahduihsauihdiuashduisahdiuhsuidhuisahd",
      sports: "Sports: Soccer, Volleyball, Swimming",
    },
    // Add more colleges as needed
  ];

  return (
    <div className="college-card-section">
      <Row>
        {collegeData.map((college) => (
          <Col key={college.id}>
            <Card className="full-width-card">
              <Card.Img
                variant="top"
                src={college.image}
                alt={`College ${college.id}`}
              />
              <Card.Body>
                <Card.Title>{college.name}</Card.Title>
                <Card.Text>{college.admissionDates}</Card.Text>
                <Card.Text>{college.events}</Card.Text>
                <Card.Text>{college.researchHistory}</Card.Text>
                <Card.Text>{college.sports}</Card.Text>
                <div className="button-container">
                  <Button variant="primary">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CollegeCard;
