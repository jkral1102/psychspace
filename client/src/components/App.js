import React, { Component } from 'react';
//import { ApplicationStyle } 'style.js';
import './App.css'
import Header from './Header'
import Blog from './Blog'
import Navbar from './Navbar'
// import Img from '../assets/icons/full-bloom.png'
// import Img1 from './full-bloom.png'


class App extends Component {
  
  render() {
  
    return (
      <div className='App'>
      <div className="AppWrapper">
        <Header/>
        <Navbar />
        <div className='BlogWrapper'>
          <Blog />
        </div>
        <div id='backgroundImg'></div>
      </div>
      </div>
    );
  }
}

export default App;
