import { useState } from "react"
import { Col, Container, FormGroup, Row } from "react-bootstrap"
import { Bacon, Cheese, Lettuce, Meat } from "./Ingredients"
import Pop from "./Pop"


export default function BurgerHooks(props) {

  const [lettuce, setLettuce] = useState([])
  const [bacon, setBacon] = useState([])
  const [cheese, setCheese] = useState([])
  const [meat, setMeat] = useState([])
  const [price, setPrice] = useState(10)

  const addLettuce = () => {
    setLettuce([...lettuce, 0])
    setPrice(price + 10)
  }
  const removeLettuce = () => {
    setLettuce((lettuce) => lettuce.filter((_, index) => index !== 0));
    if (lettuce.length > 0) {
      setPrice(price - 10)
    }
  }


  const addBacon = () => {
    setBacon([...bacon, 0])
    setPrice(price + 10)
  }
  const removeBacon = () => {
    setBacon((bacon) => bacon.filter((_, index) => index !== 0));
    if (bacon.length > 0) {
      setPrice(price - 10)
    }
  }

  const addCheese = () => {
    setCheese([...cheese, 0])
    setPrice(price + 10)
  }
  const removeCheese = () => {
    setCheese((cheese) => cheese.filter((_, index) => index !== 0));
    if (cheese.length > 0) {
      setPrice(price - 10)
    }
  }


  const addMeat = () => {
    setMeat([...meat, 0])
    setPrice(price + 10)
  }
  const removeMeat = () => {
    setMeat((meat) => meat.filter((_, index) => index !== 0));
    if (meat.length > 0) {
      setPrice(price - 10)
    }
  }
  const totalLettuce = lettuce.map(() => <Lettuce />);
  const totalBacon = bacon.map(() => <Bacon />);
  const totalCheese = cheese.map(() => <Cheese />);
  const totalMeat = meat.map(() => <Meat />);

  return (
    <div>
      <Container className='px-5'>
        <Row>
          <Col className='p-3'>
            <div>
              <img className='ml-n5' alt="burgjer" src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png" width='40%' />
              <div className='m-3'>
                <em className='mx-1'>C U S T O M I Z E </em>
                <h2 className='mb-3'>Grand Total: <mark className='rounded-3'>{price}$</mark></h2>
                <FormGroup>
                  <mark className='bg-success text-white rounded px-2'>Lettuce</mark>
                  <button className='btn btn-sm btn-outline-success m-2' onClick={addLettuce}>Add</button>
                  <button className='btn btn-sm btn-outline-danger' onClick={removeLettuce}>Remove</button>
                </FormGroup>
                <FormGroup>
                  <mark className='m-1 bg-primary text-white rounded px-2'>Bacon</mark>
                  <button className='btn btn-sm btn-outline-success m-2' onClick={addBacon}>Add</button>
                  <button className='btn btn-sm btn-outline-danger' onClick={removeBacon}>Remove</button>
                </FormGroup>

                <FormGroup>
                  <mark className='bg-warning text-white rounded px-2'>Cheese</mark>
                  <button className='btn btn-sm btn-outline-success m-2' onClick={addCheese}>Add</button>
                  <button className='btn btn-sm btn-outline-danger' onClick={removeCheese}>Remove</button>
                </FormGroup>

                <FormGroup className='mb-2'>
                  <mark className='m-2 bg-danger text-white rounded px-2'>Meat</mark>
                  <button className='btn btn-sm btn-outline-success m-2' onClick={addMeat}>Add</button>
                  <button className='btn btn-sm btn-outline-danger' onClick={removeMeat}>Remove</button>
                </FormGroup>
                <Pop cheese={cheese.length} bacon={bacon.length} lettuce={lettuce.length} meat={meat.length} price = {price}  />
              </div>
            </div>
          </Col>

          <Col className='text-center'>
            <div>
              <img className='m-n2 change-ratio-up' alt="burger" src="https://static.vecteezy.com/system/resources/thumbnails/002/446/155/small/classic-hamburger-with-meat-chop-tomato-onion-and-cheese-in-a-bun-stock-illustration-isolated-on-white-background-vector.jpg" width='75%' />
              {totalLettuce}
              {totalCheese}
              {totalMeat}
              {totalBacon}
              <Lettuce />
              <img className='rotate_image' alt="burger" src="https://static.vecteezy.com/system/resources/thumbnails/002/446/155/small/classic-hamburger-with-meat-chop-tomato-onion-and-cheese-in-a-bun-stock-illustration-isolated-on-white-background-vector.jpg" width='75%' />
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}
