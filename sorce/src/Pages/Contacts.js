import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
      <Container>
                <h1> Задайте Ваш вопрос</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Почтовый адрес</Form.Label>
                        <Form.Control type="email" />

                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Введите текст сообщения</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>


                    <Button variant='primary' type="submit">Отправить</Button>

                </Form>
            </Container>

        )
    }
}
