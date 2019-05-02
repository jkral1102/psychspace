import React from 'react';
// //import Logo from '../../assets/icons/headerLogo.PNG'
// // import Styled from 'styled-components'
// import SkullLogo from '../../assets/icons/galaxyMind.png'
import './header.css';



class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="headerWrapper">
                <div id='headerTitle'>Psych Space</div>
                {/* <img className='headerImg' style={{'height': '100px', 'margin': 'auto', 'transform': 'scaleX(-1)'}} src={SkullLogo} alt='logo'/> */}
                <div className='navbarWrapper'>
                <div>Home</div>
                <div>About</div>
                <div onClick={() => { this.props.handleLogin(false)}}>Logout</div>
            </div>


            </div>
         );
    }
}
 
export default Header;

