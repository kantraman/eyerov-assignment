import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Folder, Report } from '../../assets';
import './projectCard.css';

const ProjectCard = ({ heading, imgURL }) => {
    return (
        <Card className="prjCard">
            
            <Card.Body>
                <Card.Title className="text-center">{heading}</Card.Title>
                <Card.Img src={imgURL} alt={heading}></Card.Img>
                
                <div className="text-center pt-2">
                    <Button variant="danger" className="mb-2"><Folder className="prjIco" /> Open Project</Button>&emsp;
                    <Button className="mb-2"><Report className="prjIco" /> Report Outcome</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;