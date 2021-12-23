import React,{useContext} from 'react';
import {
    Link
 } from 'react-router-dom';
 
 import {GlobalInfo} from '../App';
function My1(props) {
    var {color} = useContext(GlobalInfo);
    return (
        <div>
            <Link to="/my"><h1>MY</h1></Link>
            <h1>My1 componet. {color} </h1>
        </div>
    );
}

export default My1;