import React from "react";
import {Row, Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const SearchBox = () => {
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="email" placeholder="이름을 입력해주세요" />
            </Col>
            <Col lg={2}>
                <Button>찾기</Button>
            </Col>
        </Row>
    );
};

export default SearchBox;