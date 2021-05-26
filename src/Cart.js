import './App.css';
import NavBar from './components/NavBar';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux'
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div>
                    <div className='body_cart'>
                        <div className="Card">
                            {!props.checkOut.length ? <p>Empty cart</p> : props.checkOut.map((val, key) => {
                                key = val.id;
                                console.log(val);
                                return (
                                    <div className="cart_item">
                                        <p>{val.title}</p>
                                        <Link to="/cart">
                                           <button type="button" id="cart_item_button"  class="btn btn-outline-primary" onClick={()=>props.Remove(val.id)}>X</button>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        products_to_view: state.products_to_view,
        checkOut: state.checkOut
    };
}

const mapDispatchToProps = {
    Add,
    Remove
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);