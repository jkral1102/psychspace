import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='navbarWrapper'>
                <div>Home</div>
                <div>About</div>
                <div onClick={() => { this.props.handleLogin(false)}}>Logout</div>
            </div>
         );
    }
}
 
export default Navbar;