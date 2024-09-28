import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../../constants/apiConstants';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            email: state.email,
            password: state.password
        };
        axios.post(API_BASE_URL + '/user/login', payload)
            .then(function (response) {
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        successMessage: 'Login successful. Redirecting to home page...'
                    }));
                    localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    redirectToHome();
                    props.showError(null);
                } else {
                    props.showError("Username or password do not match");
                }
            })
            .catch(function (error) {
                console.log(error);
                props.showError("An error occurred during login");
            });
    }

    const redirectToHome = () => {
        props.updateTitle('Home');
        navigate('/home');
    }

    const redirectToRegister = () => {
        navigate('/register');
        props.updateTitle('Register');
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label>Email address</label>
                    <input type="email" 
                           className="form-control" 
                           id="email" 
                           placeholder="Enter email" 
                           value={state.email}
                           onChange={handleChange} />
                </div>
                <div className="form-group text-left">
                    <label>Password</label>
                    <input type="password" 
                           className="form-control" 
                           id="password" 
                           placeholder="Password" 
                           value={state.password}
                           onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }}>
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Don't have an account? </span>
                <span className="loginText" onClick={redirectToRegister}>Register</span>
            </div>
        </div>
    );
}

export default LoginForm;
