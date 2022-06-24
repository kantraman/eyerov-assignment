import React from 'react';
import { Card } from 'react-bootstrap';

const DispImage = ({imgURL, altText}) => {
    return (
        <Card style={{boxShadow: "rgba(0, 0, 0, 0.23) 0px 5px 10px, rgba(0, 0, 0, 0.30) 0px 5px 10px"}}>
            <img className="img-fluid" src={imgURL} alt={altText} />
        </Card>
    );
};

export default DispImage;