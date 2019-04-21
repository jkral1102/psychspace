import React from 'react';
import Styled from 'styled-components';

const NavbarWrapper = Styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0px 20px 0px;
font-size: 18px;
text-transform: uppercase;
`;

const Item = Styled.div`

&:hover {
    color: blue;
    cursor: pointer;

}
`;

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <NavbarWrapper>
<Item>Popular Stories</Item>
<Item>Categories</Item>
<Item>Random</Item>
<Item>About</Item>

            </NavbarWrapper>
         );
    }
}
 
export default Navbar;