import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardGroup, Card } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Наши друзья </h2>
                    <CardGroup>
                        <Card className="p-3">
                            <Card.Img variant='top'
                                      src='https://sun9-61.userapi.com/impg/IuLn-NrOZ95t6m0sS0HY1ZF-GDpWryyrEoOwpg/OIFwrjDaKeA.jpg?size=150x150&quality=96&sign=85512279cde44b159f052c43cadda7a9&type=album'
                            />
                            <Card.Body>
                                <Card.Title>Пушок</Card.Title>
                                <Card.Text>
                                    Спокойный и добрый котик
                                </Card.Text>
                                <div id="browse_app">
                                    <a class="btn btn-large btn-info" href="http://localhost:3000/about">Приютить</a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant='top'
                                      src='https://sun9-15.userapi.com/impg/8XdxpSr_wNcyXrZfmx2ft0Z_dxdmFUjTZ_oqzw/iNAH9pAYTMA.jpg?size=150x150&quality=96&sign=7a96fc87e5307c6eebf731b206d5ba62&type=album'
                            />
                            <Card.Body>
                                <Card.Title>Лакки</Card.Title>
                                <Card.Text>
                                   Дружелюбный и любит детей
                                </Card.Text>
                                <div id="browse_app">
                                    <a class="btn btn-large btn-info" href="http://localhost:3000/about">Приютить</a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="p-3">
                            <Card.Img variant='top'
                                      src='https://sun9-4.userapi.com/impg/j7LlPTJ7WDsnz6sKt-zs8SjHmYFKJUkzRnXAWA/SbtLSqu0fkc.jpg?size=150x150&quality=96&sign=f0ec7505ee42ab0d847216433c5dbd31&type=album'
                            />
                            <Card.Body>
                                <Card.Title>Рекс</Card.Title>
                                <Card.Text>
                                    Активный, любит прогулки
                                </Card.Text>
                                <div id="browse_app">
                                    <a class="btn btn-large btn-info" href="http://localhost:3000/about">Приютить</a>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="p-3">
                            <Card.Img variant='top'
                                      src='https://sun9-34.userapi.com/impg/TD-KKOSMlkmyHS5SzCKxxbOh00g_mg7vqs64fA/sFDsBdBZxNY.jpg?size=150x150&quality=96&sign=95cf1503b462a2c7f7d647b5a427bf6d&type=album'
                            />
                            <Card.Body>
                                <Card.Title>Мелисса</Card.Title>
                                <Card.Text>
                                    Грациозная и изящная кошечка
                                </Card.Text>
                                <div id="browse_app">
                                    <a class="btn btn-large btn-info" href="http://localhost:3000/about">Приютить</a>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="p-3">
                            <Card.Img variant='top'
                                      src='https://sun9-27.userapi.com/impg/zLaYzNcBorlyob7Ucm7mm4_IQdCU7If552Eoxw/DmqyQccy-jc.jpg?size=150x150&quality=96&sign=2d2e210d3a07ce896f93f493139c0f94&type=album'
                            />
                            <Card.Body>
                                <Card.Title>Бобик</Card.Title>
                                <Card.Text>
                                    Неуклюжий, но любвеобильный
                                </Card.Text>
                                <div id="browse_app">
                                    <a class="btn btn-large btn-info" href="http://localhost:3000/about">Приютить</a>
                                </div>
                            </Card.Body>
                        </Card>

                    </CardGroup>
                </Container>
            </>
        )
    }
}

