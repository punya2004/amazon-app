import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase/config';
import { useHistory } from 'react-router';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const histroy = useHistory();

    const login = (event) => {
        event.preventDefault();//this stops refreshing the page
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //redirect to home page
                histroy.push("/")
            })
            .catch((error) => alert(error.message))
    }
    const register = (event) => {
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                 //redirect to home page
                histroy.push("/")
            })
            .catch((error) => alert(error.message))
    } 
    return (
        <div className="login">
            <Link to="/login">
            <img 
                className="login__img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""/>
            </Link> 
            <div className="login__container">
                <h1>sign in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button  onClick={login} className="login__signbutton" type="submit">Sign In</button>
                </form>
                <p>By signing in you agree to Amazon's condition of use and sale.Please see our privacy notice, our cookies noties and our intrest.Based ads and notice.</p>
                <button onClick={register} className="login__createbutton">Create Your Amazon Account</button>
            </div>          
        </div>
    )
}

export default Login
