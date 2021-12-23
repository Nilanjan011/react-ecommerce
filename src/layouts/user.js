import React from 'react';

function user(props) {
    return (
        <>
         <h1>user header</h1>
         {props.children}   
         <h1>user Footer</h1>   
        </>
    );
}

export default user;