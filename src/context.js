import React,{useState,createContext} from 'react';
import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom';

import Footer from './footer.js';
import Header from './Header.js';
import Home from './Home.js';
import About from './about.js';
import P_details from './P_details.js';
import ProductAll from './ProductAll.js';
import Login from './Login.js';
// import Context from './context.js';

export const GlobalInfo = createContext();
const App = () => {
   const [color, setColor]=useState(false);
   console.log(color);
   const getday =(day)=>{
      setColor(day)

   }
   return (
      <div className="App">

      <GlobalInfo.Provider value={{color: color,getday:getday}}>
         <Router>     
         
            <Route exact path="/about">
               <Header />
               <About/>
               <Footer/>
            </Route>
            {/* <Route exact path="/context">
               <Context />
            </Route> */}
            
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

         </Router>
         </GlobalInfo.Provider>
      </div>
  );
}

export default App;