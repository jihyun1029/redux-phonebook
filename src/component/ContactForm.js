import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const getName = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="이름을 입력해주세요"
                        // onChange={getName}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="전화번호를 입력해주세요"
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;