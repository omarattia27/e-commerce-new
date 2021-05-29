import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "../App.css";
import { Add, Remove, LogOut, UpdateProducts} from '../redux/actions';
import { connect } from 'react-redux';
import {Get,GetSearch,LoggedIn} from "../Requests/requests";


function NavBar(props) {
    
    const [searchInput, setSearchInput] = useState('');

    useEffect(() =>{
        console.log("I was called")
        GetSearch(searchInput).then((data)=>props.UpdateProducts(data));
    },[searchInput])

    return (
        <Container className='container' fixed={true}>
            <Navbar max-width="100%" className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/">
                    <span>OMA</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>

                    <Nav.Link >
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon"
                                value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
                            <button type="button" class="btn btn-outline-primary">search</button>
                        </div>
                    </Nav.Link>

                    <Nav>
                        
                        {!props.LoggedIn ? <Link to="/Login">Log In</Link> : <div><Link to="/Cart">Cart</Link> <a className="space">_</a> <Link to="/Login">{props.user}</Link></div>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

function mapStateToProps(state) {
    return {
      products_to_view: state.products_to_view,
      checkOut: state.checkOut,
      LoggedIn: state.LoggedIn,
      user: state.user
    };
  }
  
  const mapDispatchToProps = {
    Add,
    Remove,
    LogOut,
    UpdateProducts
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);