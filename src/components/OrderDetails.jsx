import { Toast } from 'bootstrap';
import React, { useState } from 'react'
import db from '../firebase';

export default function OrderDetails(props) {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerDeliveryMethod, setCustomerDeliveryMethod] = useState("");

  const cheese = props.cheese;
  const lettuce = props.lettuce;
  const bacon = props.bacon;
  const meat = props.meat;
  const price = props.price;

  const submit = (e) => {
    <Toast><Toast.Body>Order Submitted Succesfully</Toast.Body></Toast>
    e.preventDefault();
    db.collection("orders").add({
      name: customerName,
      address: customerAddress,
      phone: customerPhone,
      delivery: customerDeliveryMethod,
      lettuce: lettuce,
      bacon: bacon,
      cheese: cheese,
      meat: meat,
      price: price
    });

    setCustomerName("");
    setCustomerAddress("");
    setCustomerPhone("");
    setCustomerDeliveryMethod("");
  };

  return (
    <div className='text-center p-5'>
      <h2 className='text-success'>Add Your Order Details</h2>
      <hr />
      <div className="text-center mt-4">

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            className='mb-3'
          />
          <br />
          <input
            type="text"
            placeholder="Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            required
            className='mb-3'
          />
          <br />
          <input
            type="text"
            placeholder="Phone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className='mb-3'
            required
          />
          <br />
          <select className='py-1 px-3 mb-3' value={customerDeliveryMethod} onChange={(e) => setCustomerDeliveryMethod(e.target.value)} >
            <option>Delivery Method</option>
            <option>Standard</option>
            <option>Fast</option>
          </select>
          <br />
          <button className='btn btn-dark btn-md px-4' type="submit">Submit</button>
        </form>
      </div>
    </div>

  );
}
