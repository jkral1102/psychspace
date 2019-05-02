import React from 'react';
import API from '../../utils/API';
import './login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: '',
            message: ''
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        this.setState({
            message: ''
        })
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        API.login(data)
            .then(res => {
                const tokenID = res.data.token;
                if (tokenID) {
                    this.props.handleLogin(true)
                     // Save the JWT in localStorage
                    localStorage.setItem('token', tokenID);
                } else {
                    if (res.data === 'false') {
                        this.setState({
                            message: 'No user-password combo exists. Please try again'
                        })
                    }
                }
            })
            .catch(err => console.log(err));
    };

   

    register = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        API.register(data)
            .then(res => {
                //console.log(res.data)
                const tokenID = res.data.token;
                if (tokenID) {
                    this.props.handleLogin(true, tokenID)

                } else {
                    if (res.data === 'false') {
                        this.setState({
                            message: 'Username already exists. Please use another'
                        })
                    }
                }
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='loginWrapper'>
                {this.state.message ? 
                <div className="messageDiv"> {this.state.message} </div>
                : null }
                
                <input name='username' onChange={e => this.change(e)} placeholder='Username' />
                <input name='password' onChange={e => this.change(e)} placeholder='Password' />

                <button onClick={() => { this.login() }}>Login</button>
                <button onClick={() => { this.register() }}>Register</button>
                
            </div>
        );
    }
}

export default Login;

