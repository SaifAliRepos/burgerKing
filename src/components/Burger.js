import React, { Component} from 'react'
import Lettuce from './Lettuce'
import Bacon from './Bacon'
import Cheese from './Cheese'
import Meat from './Meat'
import { FormGroup, Row, Container, Col } from 'react-bootstrap'
import Pop from './Pop'



export default class Burger extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lettuce: [],
      bacon: [],
      meat: [],
      cheese: [],
      price: 0,
      show: false
    };

    this.addLettuce = this.addLettuce.bind(this);
    this.removeLettuce = this.removeLettuce.bind(this);
    this.addBacon = this.addBacon.bind(this);
    this.removeBacon = this.removeBacon.bind(this);
    this.addCheese = this.addCheese.bind(this);
    this.removeCheese = this.removeCheese.bind(this);
    this.addMeat = this.addMeat.bind(this);
    this.removeMeat = this.removeMeat.bind(this);
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });


  addLettuce() {

    this.setState(prevState => ({
      lettuce: [...prevState.lettuce, 0],
      price: this.state.price + 10
    }))
  }

  removeLettuce() {
    var array = [...this.state.lettuce]; // make a separate copy of the array
    var index = array[array.length - 1]

    if (index !== -1 && this.state.price > 0) {
      array.splice(index, 1);
      this.setState(
        {
          lettuce: array, price: this.state.price - 10
        });
    }
  }

  addBacon() {
    this.setState(prevState => ({
      bacon: [...prevState.bacon, 0],
      price: this.state.price + 10
    }))
  }

  removeBacon() {
    var array = [...this.state.bacon]; // make a separate copy of the array
    var index = array[array.length - 1]

    if (index !== -1 && this.state.price > 0) {
      array.splice(index, 1);
      this.setState({ bacon: array, price: this.state.price - 10 });
    }
  }

  addCheese() {
    this.setState(prevState => ({
      cheese: [...prevState.cheese, 0],
      price: this.state.price + 20
    }))
  }

  removeCheese() {
    var array = [...this.state.cheese]; // make a separate copy of the array
    var index = array[array.length - 1]

    if (index !== -1 && this.state.price > 0) {
      array.splice(index, 1);
      this.setState({ cheese: array, price: this.state.price - 20 });
    }
  }

  addMeat() {
    this.setState(prevState => ({
      meat: [...prevState.meat, 0],
      price: this.state.price + 20
    }))
  }

  removeMeat() {
    var array = [...this.state.meat]; // make a separate copy of the array
    var index = array[array.length - 1]

    if (index !== -1 && this.state.price > 0) {
      array.splice(index, 1);
      this.setState({ meat: array, price: this.state.price - 20 });
    }
  }

  render() {
    const lettuce = this.state.lettuce.map(() => <Lettuce />);
    const bacon = this.state.bacon.map(() => <Bacon />);
    const cheese = this.state.cheese.map(() => <Cheese />);
    const meat = this.state.meat.map(() => <Meat />);


    return (
      <div>
        <Container>
          <Row>
            <Col className='p-3'>
              <div>
                <img className='ml-n5' alt="burgjer" src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png" width='40%' />
                <div className='m-3'>
                  <em className='mx-1'>C U S T O M I Z E </em>
                  <h2 className='mb-3'>Grand Total: <mark className='rounded-3'>{this.state.price}$</mark></h2>
                  <FormGroup>
                    <mark className='bg-success text-white rounded px-2'>Lettuce</mark>
                    <button className='btn btn-sm btn-outline-success m-2' onClick={this.addLettuce}>Add</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={this.removeLettuce}>Remove</button>
                  </FormGroup>
                  <FormGroup>
                    <mark className='m-1 bg-warning text-white rounded px-2'>Bacon</mark>
                    <button className='btn btn-sm btn-outline-success m-2' onClick={this.addBacon}>Add</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={this.removeBacon}>Remove</button>
                  </FormGroup>

                  <FormGroup>
                    <mark className='m-2 bg-danger text-white rounded px-2'>Meat</mark>
                    <button className='btn btn-sm btn-outline-success m-2' onClick={this.addCheese}>Add</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={this.removeCheese}>Remove</button>
                  </FormGroup>

                  <FormGroup className='mb-2'>
                    <mark className='bg-primary text-white rounded px-2'>Cheese</mark>
                    <button className='btn btn-sm btn-outline-success m-2' onClick={this.addMeat}>Add</button>
                    <button className='btn btn-sm btn-outline-danger' onClick={this.removeMeat}>Remove</button>
                  </FormGroup>
                  <Pop />
                </div>
              </div>
            </Col>

            <Col className='text-center'>
              <div>
                <img className='m-n2' alt="burger" src="https://static.vecteezy.com/system/resources/thumbnails/002/446/155/small/classic-hamburger-with-meat-chop-tomato-onion-and-cheese-in-a-bun-stock-illustration-isolated-on-white-background-vector.jpg" width='60%' />
                <Lettuce />
                {lettuce}
                {bacon}
                {meat}
                {cheese}
                <img className='rotate_image' alt="burger" src="https://static.vecteezy.com/system/resources/thumbnails/002/446/155/small/classic-hamburger-with-meat-chop-tomato-onion-and-cheese-in-a-bun-stock-illustration-isolated-on-white-background-vector.jpg" width='60%' />
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}
