import React,{useContext} from 'react';
import {
    Link
 } from 'react-router-dom';
import {GlobalInfo} from './App';
import myInitObject from './auth';

export default function Header(){
   

   var {color} = useContext(GlobalInfo);
   
   return (
        <header className="section-header">

         <section className="header-main border-bottom">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-2 col-4">
                     Therichpost.com
                  </div>
               <div className="col-lg-6 col-sm-12">
                  <form action="#" className="search">
                     <div className="input-group w-100">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                              <button className="btn btn-primary" type="submit">
                              <i className="fa fa-search"></i>
                              </button>
                        </div>
                     </div>
                  </form>
            </div> 
            <div className="col-lg-4 col-sm-6 col-12">
                  <div className="widgets-wrap float-md-end">
                  <div className="widget-header  me-3">
                     <Link to="/cart" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></Link>
                     <span className="badge badge-pill badge-danger notify">{color}</span>
                  </div>
                  <div className="widget-header icontext">
                     { myInitObject.login && 
                     <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                     }
                     <div className="text">
                     { myInitObject.login &&
                        <span className="text-muted">Welcome! {myInitObject.login}</span>
                     }
                        <div> 
                        { !myInitObject.login &&
                           <>
                              <Link to="login" >Sign in |</Link>  
                              <Link to="#"> Register</Link>
                           </>
                        }
                        </div>
                     </div>
                  </div>

                  </div> 
            </div> 
            </div> 
         </div> 
         </section> 



         <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
         <div className="container">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                     <Link to="/" activeClassName="active_class" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/about"  className="nav-link" >About Us</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/productAll" className="nav-link" >Shop</Link>
                  </li>
                  {/* <li className="nav-item">
                     <Link className="nav-link" >Partnership</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" >Baby &amp; Toys</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" >Fitness sport</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" >Clothing</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" >Furnitures</Link>
                  </li>
                  <li className="nav-item dropdown">
                     <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                     </Link>
                  
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" >Foods and Drink</Link></li>
                        <li><Link className="dropdown-item" >Home interior</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" >Home interior 2</Link></li>
                     </ul>
                  </li> */}
                  </ul>
            </div> 
         </div> 
         </nav>

      </header>
    )
}

