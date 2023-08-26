import './App.css';
import MainHeader from './components/MainHeader';
import Home from './components/Home';
import {Route,Switch, Redirect} from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';



function App() {


  return (
    <div>

<MainHeader/>
<Navigation/>


    </div>
  );
}

export default App;
