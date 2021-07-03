import React from 'react';
import logo from './Solarium.png'
import './title.css'

// Cretae title bar with a logo inside of a div
const Title = () => {
    
    return <div id='TitleContainer'>
        <img id='Logo' style={{maxHeight:'100%',width:'50%'}} src={logo}  alt=''></img>
    </div>;
  };
  
  export default Title;