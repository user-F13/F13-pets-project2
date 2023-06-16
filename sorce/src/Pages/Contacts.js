import React, { Component } from 'react'
import { Form, Button, Container, FormLabel} from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1> Contact us</h1>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text>
                        Тут можно обратиться к нам.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant='primary' type="submit">Submit</Button>

                </Form>
            </Container>
        )
    }
}
