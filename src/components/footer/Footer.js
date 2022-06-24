import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Cinfo, Mail } from '../../assets';
import './footer.css';

const Footer = () => {
    return (
        <Row className="fBlock d-flex align-items-center">
            <Col>
                <Cinfo /> <a href="http://www.eyerov.com" className="small">www.eyerov.com</a> <br />
                <Mail  /> <a href="mailto:info@eyerov.com" className="small">info@eyerov.com</a>
            </Col>
            <Col className="text-center">
                &#169;2021 EyeROV (IROV Technologies Pvt. Ltd.)
            </Col> 
            <Col className="text-end">Version 2.0.0</Col>
        </Row>
    );
};

export default Footer;