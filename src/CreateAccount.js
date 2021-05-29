import './App.css';
import NavBar from './components/NavBar';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {SignUp} from "./Requests/requests";

function CreateAccount(state) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const submit = ()=>{
        if(user && password){
            SignUp({user: user, password: password});
            setUser('');
            setPassword('');            
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div>
                    <div className='body_cart'>
                        <div className="Card">
                            <h1 className="Log_In_H">Sign Up</h1>
                            <p></p>
                            <input value={user} type='text' placeholder='user name' onChange={(e)=>setUser(e.target.value)}></input>
                            <p></p>
                            <input value={password} type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                            <p></p>
                            <p></p>
                            <button type="button" class="btn btn-outline-primary" onClick={() => submit()}>Sign up</button>
                            <p></p>
                            <Link to='/LogIn'>
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        totalCost: state.totalCost
    };
}

const mapDispatchToProps = {
    Add,
    Remove
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);