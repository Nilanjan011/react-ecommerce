import React from 'react';
import {
    Link
 } from 'react-router-dom';
 import Header from '../Header.js';

function my(props) {
    return (
        <div>
            <Header/>
            <Link to="/my1"><h1>MY1</h1></Link>
            <Link to="/abc/layout"><h1>userLayout</h1></Link>
            <h1>My component</h1>
        </div>
    );
}

export default my;