import React from 'react';

import {
    withRouter
} from 'react-router-dom';

import myInitObject from './Header'

function P_details(props) {
    
    console.log(props.match.params.id);
    return (
        <>
            <h1>{props.location.pathname}</h1>
            <h1>Product details PAGE {props.match.params.id} and {myInitObject.someProp}</h1>
            <h1>Product details PAGE {props.match.params.name}</h1>
        </>
    )
}

export default withRouter(P_details);