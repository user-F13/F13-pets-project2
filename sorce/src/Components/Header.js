import React, { Component } from 'react'
import { Navbar, Nav,  Container } from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="danger" variant='danger'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt="Logo"
                            /> Pets for love
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'> Главная страница </Nav.Link>
                                <Nav.Link href='/about'> О нас </Nav.Link>
                                <Nav.Link href='/contacts'> Контакты </Nav.Link>
                                <Nav.Link href='/blog'> Новости </Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                    </Routes>
                </Router>
            </>
        )
    }
}

