import './App.css';
import NavBar from './components/NavBar';
import { Col, Image, Row, Container, Card } from 'react-bootstrap';
import { Add, Remove } from './redux/actions';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

function Home(props) {

  useEffect(() => {
    console.log(props.checkOut);
  }, [props.checkOut])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className='body'>
          <Container className="Ads">
            <Image src="https://picsum.photos/110/1000?grayscale" rounded />
          </Container>

          <Container className="prod_container">
            <Row>
              {props.products_to_view.map((val, key) => {
                key = val.id;
                return (
                  <Col xs={6} md={4}>
                    <Card className="card">
                      <Image src="https://picsum.photos/200/200?grayscale" rounded />
                      <h1>{val.title}</h1>
                      <h1>{key}</h1>
                      <button type="button" class="btn btn-outline-primary" onClick={() => props.Add(val, props.checkOut)}>Add to Cart</button>
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
    checkOut: state.checkOut
  };
}

const mapDispatchToProps = {
  Add,
  Remove
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);