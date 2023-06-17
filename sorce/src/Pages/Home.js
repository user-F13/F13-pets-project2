import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team </h2>
                <CardGroup>
                    <Card className="p-3">
                        <Card.Img variant='top'
                        src='https://sun9-36.userapi.com/s/v1/ig2/4OIQJZS-sgO5TOku-bGJg8_E2PZjyIZNjBQzWl5d5BWrbyC_QLXoeRR8VOz4umuyyMJ--4jZtSa8-CRvFZF3Afkq.jpg?size=400x508&quality=96&crop=32,32,716,910&ava=1'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Это наш самый главный разработчик. Он крутой.
                            </Card.Text>
                           <div id="browse_app">
                                <a class="btn btn-large btn-info" href="https://www.youtube.com/">Browse</a>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <Card.Img variant='top'
                        src='https://sun9-36.userapi.com/s/v1/ig2/4OIQJZS-sgO5TOku-bGJg8_E2PZjyIZNjBQzWl5d5BWrbyC_QLXoeRR8VOz4umuyyMJ--4jZtSa8-CRvFZF3Afkq.jpg?size=400x508&quality=96&crop=32,32,716,910&ava=1'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Это наш самый главный разработчик. Он крутой.
                            </Card.Text>
                            <div id="browse_app">
                                <a class="btn btn-large btn-info" href="https://www.youtube.com/">Browse</a>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="p-3">
                        <Card.Img variant='top'
                        src='https://sun9-36.userapi.com/s/v1/ig2/4OIQJZS-sgO5TOku-bGJg8_E2PZjyIZNjBQzWl5d5BWrbyC_QLXoeRR8VOz4umuyyMJ--4jZtSa8-CRvFZF3Afkq.jpg?size=400x508&quality=96&crop=32,32,716,910&ava=1'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Это наш самый главный разработчик. Он крутой.
                            </Card.Text>
                           <div id="browse_app">
                                <a class="btn btn-large btn-info" href="https://www.youtube.com/">Browse</a>
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}
