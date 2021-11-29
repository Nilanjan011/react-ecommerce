import React,{useState,createContext} from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch
} from 'react-router-dom';

import Footer from './footer.js';
import PageNotFound from './PageNotFound.js';
import Header from './Header.js';
import Home from './Home.js';
import About from './about.js';
import P_details from './P_details.js';
import Cart from './Cart.js';
import ProductAll from './ProductAll.js';
import Login from './Login.js';
import { list } from 'cart-localstorage' ;

export const GlobalInfo = createContext();

const App = () => {
   var [color, setColor]=useState(0);
   console.log(color);
   var data=list();
   color=data.length;

   const getday =(day)=>{
      setColor(day)

   }

   return (
      <div className="App">
         <GlobalInfo.Provider value={{color: color,getday:getday}}>
         <Router>     
            <Switch>
               <Route exact path="/about">
                  <Header />
                     <About/>
                  <Footer/>
               </Route>
               <Route exact path="/cart">
                  <Header />
                     <Cart/>
                  <Footer/>
               </Route>
                           
               <Route exact path="/login">
                  <Login/>
               </Route>
               <Route exact  path="/P_details/:id/:name">
                  <Header />
                     <P_details/>
                  <Footer/>
               </Route>
            
               <Route exact  path="/productAll">
                  <Header />
                     <ProductAll/>
                  <Footer/>
               </Route>
            
               <Route exact  path="/">
                  <Header />
                     <Home/>
                  <Footer/>
               </Route>
               <Route path="/*">
                  <PageNotFound />
               </Route>
            </Switch>
         </Router>
         </GlobalInfo.Provider>
      </div>
  );
}

export default App;