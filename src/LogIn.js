import './App.css';
import NavBar from './components/NavBar';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux'

function Cart(state) {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div>
                    <div className='body_cart'>
                        <div className="Card">
                            <input type='text' placeholder='user name'></input>
                            <p></p>
                            <input type='password' placeholder='Password'></input>
                            <p></p>
                            <p></p>
                            <div className='Buttons_container'>
                                <button type="button" class="btn btn-outline-primary">Log In</button>
                                
                                <button type="button" class="btn btn-outline-primary">Sign up</button>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);