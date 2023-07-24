import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CollegeCard.css";
import axios from "axios";

const CollegeCard = () => {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
   
    axios
      .get("https://collage-genius-server-dev-sabbir194.vercel.app/college/") // Replace this with your actual API endpoint URL
      .then((response) => setCollegeData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Get only the first three colleges
  const threeColleges = collegeData.slice(0, 3);

  return (
    <div className="college-card-section">
      {threeColleges.map((college) => (
        <Row key={college.id} className="mb-3">
          <Col>
            <Card className="full-width-card">
              <Card.Img
                variant="top"
                className="img-sizing"
                src={college.image}
                alt=""
              />
              <Card.Body>
                <Card.Title>{college.name}</Card.Title>
                <Card.Text>{college.admissionDates}</Card.Text>
                <Card.Text>{college.description}</Card.Text>
                <Card.Text>{college.events}</Card.Text>
                <Card.Text>{college.sportsFacilities}</Card.Text>
                <div className="button-container">
                  <Button variant="primary">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default CollegeCard;
