import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import DetailCard from './components/detailCard/DetailCard';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import DispImage from './components/imageDisplay/DispImage';
import ProjectCard from './components/projectCard/ProjectCard';

function App() {
  const [imageURL, setImageURL] = useState({});

  const getImageURLs = async () => {
    const response = await fetch('https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/images');
    const body = await response.json();
    setImageURL(body);
     
  }

  useEffect(() => getImageURLs, []);
  return (
    <div>
      <Header />
      <br />
      <Container>
        <Row className="d-flex align-items-center">
          <Col className="col-12 col-md-7 mb-2">
            <DetailCard />
          </Col>
          <Col className="col-12 col-md-5 mb-2">
            <DispImage imgURL={imageURL.damImage} altText="Dam Image" />
          </Col>
        </Row>
        <br />
        <Row className="d-flex align-items-center">
          <Col className="d-none d-md-block col-md-1 "> </Col>
          <Col className="col-12 mx-auto col-md-5 mb-2">
            <ProjectCard heading="EyeROV Inspection" imgURL={imageURL.rovImage} />
          </Col>
          <Col className="col-12 mx-auto col-md-5 mb-2">
            <ProjectCard heading="Diver's Inspection" imgURL={imageURL.diverImage} />
          </Col>
          <Col className="d-none d-md-block col-md-1 "> </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  );
}

export default App;
