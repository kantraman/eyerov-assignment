import React, { useState, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import './detailCard.css'

const DetailCard = () => {
    const [details, setDetails] = useState({});
    const [pdfLink, setPdfLink] = useState("");

    const getDetails = async () => {
        const response = await fetch('https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/dam-details');
        const body = await response.json();
        setDetails(body);
       
        const pdfReport = await fetch('https://eyerov-hiring-tasks-server-ujyffp74ba-el.a.run.app/api/pdf-report');
        const repLink = await pdfReport.text();
        setPdfLink(repLink);
    }

    useEffect(() => getDetails, []);

    const showPDF = () => {
        window.open(pdfLink,'_blank');
    }

    return (
        <Card className="detailsCard">
            <Card.Body>
                <Table responsive>
                    <tbody>
                        <DetailRow descr="Dam name" content={details.damName} />
                        <DetailRow descr="Project ID" content={details.projectId} />
                        <DetailRow descr="Inspection start date" content={details.inspectionStartDate} />
                        <DetailRow descr="Inspection end date" content={details.inspectionEndDate} />
                        <DetailRow descr="River" content={details.river} />
                        <DetailRow descr="Location of dam" content={details.location} />
                    </tbody>
                </Table>
                <div className="softCopy">
                <button className="scBtn" onClick={showPDF} >
                    Open Soft Copy Report
                </button>
                </div>
            </Card.Body>
        </Card>
    );
};

const DetailRow = ({ descr, content }) => {
    return (
        <tr>
            <td style={{color:"cornflowerblue", fontWeight:"bold"}}>{descr} </td>
            <td>{content}</td>
        </tr>
    )
}

export default DetailCard;