import React,{useContext} from 'react';
import {
   useHistory,
   Link
 } from 'react-router-dom';

import myInitObject from './auth';
// import {GlobalInfo} from './App'; // context api

export default function Login(){
     
    // var {color,getday} = useContext(GlobalInfo);// context api
    

    const history = useHistory();   
    async function fundata() {

        // const data = await fetch(`http://localhost:5555/a`); //it's work properly
        const data = await fetch(`/a`);//it's work properly
        // const data = await fetch(`https://api.covid19api.com/summary`);
        console.log(data.status);
        if(data.status===200){
            // localStorage.setItem('user',await data.json());
            myInitObject.someProp="login";
            myInitObject.login=true;
            var data1=await data.json();
            console.log(data1.message);
            document.getElementById('err').innerHTML=data1.message;
            // history.push('/');
            // color=true;// context api
            // console.log(color);// context api
            // getday(color)   // send data App componet using context api 
        }else{
            document.getElementById('err').innerHTML="<h5>Email or Password not match" +document.getElementById('email').value+" & "+document.getElementById('password').value+"</h5>";
        }
    }
    return (
        <div> 
            <div classfundata="container">
                <form action="" className="m-5">
                    <div id="err"></div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <br/><br/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" required />
                        <br/><br/>
                        <input type="submit" value="Login" className="btn btn-success"/>
                    </div>
                </form>
            </div>
            <Link to="/my"><h1>MY</h1></Link>
            <input type="submit" value="Login" className="btn btn-danger" onClick={fundata}/>
        </div>

    )
}