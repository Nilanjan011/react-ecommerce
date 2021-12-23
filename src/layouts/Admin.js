import React from 'react';

function Admin(props) {
    return (
        <>
         <h1>admin header</h1>
         {props.children}   
         <h1>admin Footer</h1>   
        </>
    );
}

export default Admin;