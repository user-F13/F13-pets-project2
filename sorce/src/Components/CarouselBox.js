import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bird from '../assets/bird.png';
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
                        height='700'
                    />
                    <Carousel.Caption>
                        <h3>Подбирайте правильное питание!</h3>
                        <p><b>сбалансированное питание - залог здоровья и красоты ваших питомцев.  Также не стоит забывать, что они, как и люди, нуждаются в дополнительных витаминах. </b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ parrot }
                        alt="Птица"
                        height='700'
                    />
                    <Carousel.Caption>
                        <h3>Наблюдайте за состоянием здоровья!</h3>
                        <p><b>Чтобы сохранить домашнему животному крепкое здоровье необходима регулярная консультация и осмотр ветврача. Он поможет на раннем этапе выявить проблемы и заболевания и своевременно начать лечение.</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ sheep }
                        alt="Птица"
                        height='700'
                    />
                    <Carousel.Caption>
                        <h3>Проведение регулярной гигиены.</h3>
                        <p> <b>Животные восприимчивы к ряду бактерий, поэтому не стоит забывать ежедневно проводить личную гигиену питомца.</b></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
