import './App.css';
import NavBar from './components/NavBar';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux'
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    const [totalCost, setTotalCost] = useState(0);

    const sum = () => {
      var sumNum = 0;
      for (const product of props.checkOut)  sumNum = sumNum + product.price;
      setTotalCost(sumNum);
    }

    useEffect(()=>{
        sum();
    },);

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
                <div>
                    <div className='body_cart'>
                        <div className="Card">
                            {!props.checkOut.length ? <p></p>: totalCost}
                            {!props.checkOut.length ? <p>{!props.user ? <p>You are not logged in</p> : <p>Empty cart</p>}</p> : props.checkOut.map((val, key) => {
                                key = val._id;
                                console.log(val);
                                return (
                                    <div className="cart_item">
                                        <p>{val.title}</p>
                                        <Link to="/cart">
                                           <button type="button" id="cart_item_button"  class="btn btn-outline-primary" onClick={()=>props.Remove(val._id)}>X</button>
                                        </Link>
                                    </div>
                                )
                            })}

                            {!props.checkOut.length ? <p></p>: <button type="button" class="btn btn-outline-primary" onClick={()=> {props.LogOut();}}>Check Out</button>}
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
        checkOut: state.checkOut,
        user: state.user,
    };
}

const mapDispatchToProps = {
    Add,
    Remove
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);