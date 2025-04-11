import React from "react";
import SearchBox from "./SearchBox";
import {Col, Row} from "react-bootstrap";

const ContactItem = () => {
    return (
        <Row>
            <Col lg={2}>
                <img
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                />
            </Col>
            <Col lg={10}>
                <div>이름</div>
                <div>01039385738</div>
            </Col>
        </Row>
    );
};

export default ContactItem;