import './App.css';
import NavBar from './components/NavBar';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux'

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
                                    <div>
                                        <h1>{val.title}</h1>
                                        <h1>{key}</h1>
                                        <button type="button" class="btn btn-outline-primary" >remove</button>
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