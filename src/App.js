import React from 'react';
import Profile from './Profile';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume  from './Resume';
let App=()=>{
  return (
    <BrowserRouter>
       <Route exact path="/" component={Profile}/>
       <Route exact path="/resume" component={Resume}/>
    </BrowserRouter>
  )
}
export default App; 
