import ReactDOM from "react-dom";
import React from 'react';
// import Dkform from "./sportsform";
import {BrowserRouter as Router,Route,Routes,NavLink,Link,}from 'react-router-dom';
import Dkapp from './home';
import Dkapp1 from './about';
import Dkapp2 from './joinus';

const routing=(
    <Router>
        <div>
            <h1>hello</h1>
            <Routes>
                <Route path='/' element={<Dkapp/>}/>
                <Route path='/about' element={<Dkapp1/>}/>
                <Route path='/joinus' element={<Dkapp2/>}/>
         </Routes>
        </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById("root"));

{/* <Dkapp1/> */}