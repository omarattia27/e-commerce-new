import './App.css';
import NavBar from './components/NavBar';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

function createAccount(state) {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div>
                    <div className='body_cart'>
                        <div className="Card">
                            <h1 className="Log_In_H">Sign Up</h1>
                            <p></p>
                            <input type='text' placeholder='user name'></input>
                            <p></p>
                            <input type='password' placeholder='Password'></input>
                            <p></p>
                            <p></p>

                            <button type="button" class="btn btn-outline-primary">Sign up</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(createAccount);