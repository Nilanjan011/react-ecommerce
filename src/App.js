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

import My from './component/My.js';
import My1 from './component/My1.js';

//layouts
import Admin from './layouts/Admin';
import user from './layouts/user';


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

   const AppRoute = ({ componet:Componet, layout:Layout, ...rest }) => (
      <Route {...rest} render={ props => (
         <Layout><Componet {...props}></Componet> </Layout>
      )}></Route>
   )
   return (
      <div className="App">
         <GlobalInfo.Provider value={{color: color,getday:getday}}>
         <Router>     
            <Switch>
               <AppRoute path="/my" layout={Admin} componet={My} />
               <AppRoute path="/my1" layout={Admin} componet={My1} />
               <AppRoute path="/user/layout" layout={user} componet={About} />
               
               <Route path="/user" componet={About}></Route>
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