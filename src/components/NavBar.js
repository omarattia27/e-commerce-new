import { Navbar, Nav, Container } from 'react-bootstrap';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const history = createBrowserHistory();

function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Container className='container' fixed={true}>
            <Navbar max-width="100%" className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/">
                    <span>Oma</span>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link ><div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary">search</button>
                        </div></Nav.Link>
                        <Link to="/Cart">Cart</Link>
                        {!loggedIn ? <Link to="/Login">Log In</Link> : <Link to="/LogIn">Log Out</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavBar;