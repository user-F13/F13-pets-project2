import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    
                                    <p>
                                        Это я делающий все это.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    
                                    <p>
                                        Это я делающий все это.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                   
                                    <p>
                                        Это я делающий все это.
                                    </p>
                                    <p>
                                        Не ожидал не ожидал, Лорен ипсум Лорен ипсуммм ты гдее???
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    
                                    <p>
                                        Тут реально можно было изменить текст.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                   
                                    <p>
                                        мда дма дадд дадад 
                                        Текст текс текст
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
