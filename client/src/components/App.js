import React from 'react';
import './App.css'
import Header from './Header'
import Blog from './Blog'
import Navbar from './Navbar'
import Login from './Login'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      tokenID: ''
    }
  }
componentDidMount() {
   // Check for a JWT in localStorage
  const checkToken = () => {
    const sessionToken = localStorage.getItem('token');
    if (sessionToken) {
      this.setState({
        loggedIn: true,
        tokenID: sessionToken
      })
    }
  }
  checkToken();
}


  handleLogin = (status) => {
    this.setState({ loggedIn: status })
  }

  render() {

    return (
      <div className='App'>
        <div className="AppWrapper">
          <Header />
          <Navbar handleLogin={this.handleLogin} />
          {this.state.loggedIn ?
            <Blog /> : <Login handleLogin={this.handleLogin} />
          }
          {/* <Blog /> */}
          <div id='backgroundImg'></div>
        </div>
      </div>
    );
  }
}

export default App;
