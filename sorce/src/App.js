import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import {Footer} from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <Header/>
     <Footer/>
    </div>
  );
}

export default App;
