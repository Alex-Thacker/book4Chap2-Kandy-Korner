import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import KandyKorner from "./componets/KandyKorner"

ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById('root'));


// ReactDOM.render(
//     <Router>
//         <Kennel />
//     </Router>
//     , document.getElementById('root'))