import React from 'react';
//import { HeaderWrapper } from './style/index.js';
//import Logo from '../../assets/icons/headerLogo.PNG'
import Styled from 'styled-components'
import SkullLogo from '../../assets/icons/galaxyMind.png'

const HeaderWrapper = Styled.div`
display: flex;
justify-content: center;
width: 60vw; 
height: 15vh;
line-height: 15vh;
vertical-align: center;
justify-content: space-around;
text-transform: uppercase;
font-size: 40px;
font-weight: bold;
border-bottom: solid 2px #2f2b2b;
border-radius: 5px;
`;

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <HeaderWrapper>
                <div>Psych Space</div>
                <img style={{'height': '100px', 'margin': 'auto', 'transform': 'scaleX(-1)'}} src={SkullLogo} alt='logo'/> 
            </HeaderWrapper>
         );
    }
}
 
export default Header;

