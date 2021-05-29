import './App.css';
import NavBar from './components/NavBar';
import { Col, Image, Row, Container, Card } from 'react-bootstrap';
import { Add, Remove, UpdateProducts} from './redux/actions';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {Get} from "./Requests/requests";

function Home(props) {
  
  const [products, setProducts] = useState([]);

  const start = ()=>{Get().then(results => {
    props.UpdateProducts(results);
    setProducts(results);
  });}

  useEffect(() =>{
    start();
  },[])

  useEffect(() => {
    console.log("yeah it worked", props.products_to_view);
  }, [props.products_to_view])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className='body'>
          <Container className="Ads">
            <Image src="https://picsum.photos/110/1000" rounded />
          </Container>

          <Container className="prod_container">
            <Row>
              { props.products_to_view.map((val, key) => {
                key = val._id;
                return (
                  <Col xs={6} md={4}>
                    <Card className="card">
                      <Image src="https://picsum.photos/200/200" rounded />
                      <p1>{val.title}</p1>
                      <button type="button" class="btn btn-outline-primary" onClick={() => {if(props.user) {props.Add(val, props.checkOut)} else{alert("Please Log In first")}}}>Add to Cart</button>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
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
  Remove,
  UpdateProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);