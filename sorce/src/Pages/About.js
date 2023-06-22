import React, { Component } from 'react';
import {Container, Tab, Nav, Row, Col, CardGroup, Card} from 'react-bootstrap';
// import CarouselBox from "../Components/CarouselBox";


export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Наш приют</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Кошки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Собаки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Советы по уходу за питомцами</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-4">
                                <Tab.Pane eventKey="first">
                                    
                                    <h5 className='mt-3'>Наш приют всегда готов принять новых друзей!</h5>
                                    <p></p>
                                    <img src="https://avatars.mds.yandex.net/get-altay/4667561/2a00000177d7def729bff7dd9a880185b24d/XXL" alt="k1"/>
                                    <p></p>
                                    <p></p>
                                    <p> Команда из высококвалифицированных профессионалов оказывает животным незамедлительную помощь и следит за их здоровьем на протяжении всего пребывания  в приюте. </p>
                                    <img src="https://sun9-21.userapi.com/impg/shxo3N9OHQa-ImDEyh8KYPogux6Qjrw7GjMszw/5JauT1zsol4.jpg?size=900x600&quality=96&sign=1be5d02b685eba7a4c0d106cb7dc1937&type=album" alt="k2"/>
                                    <p></p>
                                    <img src="https://sun115-1.userapi.com/impg/i-Go7LN07WfLbQ5XAH-02JRcmwBoJLRRRvOeGQ/isCCx6bO0Ow.jpg?size=900x516&quality=96&sign=b56367db962f4f7ea02ffe8cb4ddda8d&type=album" alt="k3"/>
                                    <p></p>
                                    <h4 className='text-center m-2'>
                                    <p>Наш адрес:</p>
                                    <p>Ростов-на-Дону, ул.Зорге, д.28</p>
                                    <p></p>
                                  <p>Режим работы</p>
                                    <p>пн-пт 9:00-21:00</p>
                                  <p>сб-вс 10:00-21:00</p>
                                    <p></p>
                                    <p>Номер телефона:</p>
                                    <p></p>
                                    <p>+7 928 195 4777</p>
                                    </h4>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">

                                    <p>
                                        <>
                                            <Container>
                                                <h2 className="text-center m-4">Наши коты и кошки </h2>
                                                <CardGroup>
                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-61.userapi.com/impg/IuLn-NrOZ95t6m0sS0HY1ZF-GDpWryyrEoOwpg/OIFwrjDaKeA.jpg?size=150x150&quality=96&sign=85512279cde44b159f052c43cadda7a9&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Пушок</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-45.userapi.com/impg/ghEuJOw_6NN0tlTsjsepwzTmoPbiW2hIpDPKZg/D5O_ePs0XXk.jpg?size=150x150&quality=96&sign=b4c1e5374003b08fddced421224d9e34&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Уда</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun2-10.userapi.com/impg/bVmV-X-AwLFxziSupzsFvXMSByLqmBBbIZAVvg/R8ovlW1hinY.jpg?size=150x150&quality=96&sign=12e95eba7d862e4a8ebb97a6609c6366&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Корица</Card.Title>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-34.userapi.com/impg/TD-KKOSMlkmyHS5SzCKxxbOh00g_mg7vqs64fA/sFDsBdBZxNY.jpg?size=150x150&quality=96&sign=95cf1503b462a2c7f7d647b5a427bf6d&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Мелисса</Card.Title>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-60.userapi.com/impg/xrU5FX8crwBbjUqDJAS0aO5JGs1m4JZoLrch5g/H8Ufr0eAr3U.jpg?size=150x150&quality=96&sign=d83aa6d380df684f9c86167c2a0f417c&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Барсик</Card.Title>

                                                        </Card.Body>
                                                    </Card>

                                                </CardGroup>
                                            </Container>
                                        </>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">

                                    <p>
                                        <>
                                            <Container>
                                                <h2 className="text-center m-4">Наши собачки </h2>
                                                <CardGroup>
                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun2-22.userapi.com/impg/1k9aoTg676TvmLIvWTJcCQ7WlaOe_GNuYu403A/ktS8VSatPRQ.jpg?size=150x150&quality=96&sign=67aaff6a712919de139b480ccb2c1eac&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Тиберий</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-15.userapi.com/impg/8XdxpSr_wNcyXrZfmx2ft0Z_dxdmFUjTZ_oqzw/iNAH9pAYTMA.jpg?size=150x150&quality=96&sign=7a96fc87e5307c6eebf731b206d5ba62&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Лакки</Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-4.userapi.com/impg/j7LlPTJ7WDsnz6sKt-zs8SjHmYFKJUkzRnXAWA/SbtLSqu0fkc.jpg?size=150x150&quality=96&sign=f0ec7505ee42ab0d847216433c5dbd31&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Рекс</Card.Title>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-66.userapi.com/impg/3dSRK5zxo6001ebFgmUqs8wzCmpvrFcImZTluw/2LtjfZIufz4.jpg?size=150x150&quality=96&sign=1812d2c5cb8d34d92911c94d3a329dd7&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Персик</Card.Title>
                                                        </Card.Body>
                                                    </Card>

                                                    <Card className="p-3">
                                                        <Card.Img variant='top'
                                                                  src='https://sun9-27.userapi.com/impg/zLaYzNcBorlyob7Ucm7mm4_IQdCU7If552Eoxw/DmqyQccy-jc.jpg?size=150x150&quality=96&sign=2d2e210d3a07ce896f93f493139c0f94&type=album'
                                                        />
                                                        <Card.Body>
                                                            <Card.Title>Бобик</Card.Title>
                                                        </Card.Body>
                                                    </Card>

                                                </CardGroup>
                                            </Container>
                                        </>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">

                                    <h2>Советы по уходу за домашними животными</h2>
                                    <p><b>1. Подобрать правильную пищу.</b></p>
                                    <p></p>
                                    <p>Не секрет, что здоровье, внешний вид и настроение животного зависит от сбалансированного питания. Следует тщательно изучить какие корма и в каком количестве нужно давать животному. Также не стоит забывать, что питомцы нуждаются в дополнительных витаминах, микроэлементах и других полезных веществах, которые нужны им для нормального роста и развития. Ни в коем случае нельзя кормить котов кормом для собак и наоборот, у них разная пищеварительная система.</p>
                                    <p></p>
                                    <p><b>2.Проведение регулярной гигиены.</b></p>
                                    <p></p>
                                    <p>Животные восприимчивы к ряду бактерий, которые вызывают многочисленные заболевания. Поэтому не стоит забывать ежедневно проводить личную гигиену питомца (купание, чистка ушей, стрижка когтей и шерсти (если необходимо), гигиена глаз и зубов, расчесывание колтунов). Эти процедуры способны сделать любимчика не только привлекательным и ухоженным, но и здоровым. Как часто и правильно проводить эти мероприятия вам подскажет ветеринарный врач. </p>
                                    <p></p>
                                    <p><b>3.Уборка в помещении и чистка спального места.</b></p>
                                    <p></p>
                                    <p> Уборку в помещении, где живет животное, нужно проводить регулярно, а место его обитания сохранять в чистоте. Туалет питомца рекомендуется чистить после каждого мочеиспускания или акта дефекации, так как эта среда создает условия для размножения бактерий. Приборы для еды и воды должны быть всегда чистыми, во избежание появления кишечных заболеваний.</p>
                                    <p></p>
                                    <img src="https://sun9-42.userapi.com/impg/6cUbNkZv2QCWtbukHURWGtARVsNJSZm0-K0yKg/8Uz2fuDJE74.jpg?size=600x350&quality=96&sign=d30cb3fbccc2ede7cdff645e84d4ac57&type=album" alt="k1"/>
                                    <p></p>
                                    <p><b>4.Наблюдение за состоянием здоровья.</b></p>
                                    <p></p>
                                    <p>Чтобы сохранить домашнему животному крепкое здоровье необходима регулярная консультация и осмотр ветврача. Он поможет на раннем этапе выявить проблемы и заболевания вашего четвероногого друга и своевременно начать лечение. Поэтому посещение специалиста требуется регулярно. </p>
                                    <p></p>
                                    <p><b>5.Наличие прививок</b></p>
                                    <p></p>
                                    <p> Не менее важным пунктом по уходу за питомцами является своевременная вакцинация. Прививки необходимы животному в случае возникновения любого инфекционного заболевания, которым им свойственно заболеть. График прививок устанавливает специалист, имеющий огромный опыт и знания в сфере животных.</p>
                                    <p></p>
                                    <img src="https://sun9-48.userapi.com/impg/s3Zt5sAd7LDRZE9fwmmbxjp4aZpBQr0meVKeVA/UFf11BNM5dA.jpg?size=600x350&quality=96&sign=59e86253628a861d49ec183c609c38b3&type=album" alt="k6"/>
                                    <p></p>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
