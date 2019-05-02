import React from 'react';
// //import Logo from '../../assets/icons/headerLogo.PNG'
// // import Styled from 'styled-components'
// import SkullLogo from '../../assets/icons/galaxyMind.png'
import './header.css';



class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="headerWrapper">
                <div>Psych Space</div>
                {/* <img className='headerImg' style={{'height': '100px', 'margin': 'auto', 'transform': 'scaleX(-1)'}} src={SkullLogo} alt='logo'/> */}
               
            </div>
         );
    }
}
 
export default Header;

