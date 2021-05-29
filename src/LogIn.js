import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Add, Remove, SignIn, LogOut} from './redux/actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {Login} from "./Requests/requests";

function LogIn(props) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    //const [promise, setPromise] = useState(false);

    const submit = ()=>{
        if(user && password){
            var promise = false;
            Login({user: user, password: password}).then(result => {
                console.log('token? ',result)
                props.SignIn(result,user);
                //setPromise(!promise)
            });
            setUser('');
            setPassword('');            
        }
    }

    useEffect(()=>{
        console.log("Logged in or not? ",props.LoggedIn,"  ",props.user);
    },[props.LoggedIn])

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div>
                    <div className='body_cart'>
                        
                        {!props.user? <div className="Card">
                            <h1 className="Log_In_H">Log In</h1>
                            <p></p>
                            <input value={user} type='text' placeholder='user name' onChange={(e)=>setUser(e.target.value)}></input>
                            <p></p>
                            <input value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                            <p></p>
                            <p></p>

                            <button type="button" class="btn btn-outline-primary" onClick={() =>submit()}>Log In</button>
                            <p></p>
                            <Link to='/createAccount'>
                                Sign Up
                            </Link>
                        </div> : <div className="Card">
                            <h1 className="Log_In_H">
                                <p>Welcome back {props.user}</p>
                                <button type="button" class="btn btn-outline-primary" onClick={()=> {props.LogOut(); alert('You are Logged Out')}}>Log out</button>
                            </h1>
                        </div>}

                        
                    </div>
                </div>
            </header>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        LoggedIn: state.LoggedIn,
        user: state.user
    };
}

const mapDispatchToProps = {
    Add,
    Remove,
    SignIn,
    LogOut
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);