import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderDetails from './OrderDetails';

export default function Pop(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cheese = props.cheese;
  const lettuce = props.lettuce;
  const bacon = props.bacon;
  const meat = props.meat;
  const price = props.price;

  return (
    <>
      <Button variant="dark" size="sm" className='px-5 mx-2'  onClick={handleShow}>
        Place Order
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Placed</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          Confirm your order Order Details!
          <br className='mt-4'/>
          Cheese: <mark>{cheese}</mark> |
          Bacon: <mark>{bacon}</mark> |
          Meat: <mark>{meat}</mark> |
          Lettuce: <mark>{lettuce}</mark>
          <br />
          <p className='mt-2'>Total: <mark>{price} $</mark></p>
          <OrderDetails cheese = {cheese} bacon = {bacon} meat = {meat} lettuce = {lettuce} price = {price}  />
        </Modal.Body>
      </Modal>
    </>
  );
}
