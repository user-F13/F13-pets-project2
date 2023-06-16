import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bird from '../assets/bird.jpg';
import parrot from '../assets/parrot.jpg';
import sheep from '../assets/sheep.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ bird }
                        alt="Птица"
                    />
                    <Carousel.Caption>
                        <h3>Картинка птицы</h3>
                        <p>Эта карусель картинка</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ parrot }
                        alt="Птица"
                    />
                    <Carousel.Caption>
                        <h3>Картинка птицы</h3>
                        <p>Эта карусель картинка</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ sheep }
                        alt="Птица"
                    />
                    <Carousel.Caption>
                        <h3>Картинка птицы</h3>
                        <p>Эта карусель картинка</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}