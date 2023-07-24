
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import "./MyCollege.css"; // Create this CSS file for custom styles

const MyCollege = () => {
  return (
    <Container className="my-4 section-mergin">
      <Card>
        {/* College Image */}
        <Card.Img
          src=" https://drive.google.com/uc?id=1gM8OluEhbpHgJv0x1XTlWjkYrC52uhHP " // Replace with your college image URL
          alt="College"
        />

        <Card.Body className="text-center">
          {/* College Name and Location */}
          <Card.Title>College Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            College Location
          </Card.Subtitle>

          {/* College Description */}
          <Row className="mt-4">
            <Col md={8} className="mx-auto">
              {" "}
              {/* Use 'mx-auto' to center the column */}
              <h2>About the College</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                pretium, libero a feugiat tincidunt, justo est eleifend tellus,
                vel cursus orci mauris sed lorem. Phasellus fringilla lectus sit
                amet lacus accumsan, non malesuada nibh suscipit. Vestibulum
                convallis tristique purus, a ultrices turpis finibus at.
                Curabitur vel fringilla quam. Nulla luctus odio in bibendum
                semper. Etiam nec elit ut mauris consequat consectetur. In non
                ipsum nec mi euismod suscipit in nec nunc.
              </p>
            </Col>
          </Row>

          {/* Review Input Field */}
          <Row className="mt-4">
            <Col md={8} className="mx-auto">
              {" "}
              {/* Use 'mx-auto' to center the column */}
              <h2>Add a Review</h2>
              <Form>
                <Form.Group controlId="rating">
                  <Form.Label>Rating:</Form.Label>
                  <Form.Control as="select">
                    <option value="5">5 stars</option>
                    <option value="4">4 stars</option>
                    <option value="3">3 stars</option>
                    <option value="2">2 stars</option>
                    <option value="1">1 star</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="reviewText">
                  <Form.Label>Write your review:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Review
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyCollege;
