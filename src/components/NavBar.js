import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState } from 'react';

function NavBar() {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Container className='container' fixed={true}>
            <Navbar max-width="100%" className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home" className='Logo'>OMA</Navbar.Brand>
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
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        {!loggedIn ? <Nav.Link href="/LogIn">Log In</Nav.Link> : <Nav.Link href="/LogIn">Log Out</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavBar;