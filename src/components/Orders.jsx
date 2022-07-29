import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import db from '../firebase';

export default function Orders() {

  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    db.collection("orders").onSnapshot((snapshot) => {
      setCustomersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log({ customersData });
  }, []);

  return (
    <div>
      <div className="text-center p-5 mx-5">
        <h3 className='p-5'>Orders History</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Delivery</th>
              <th>Bacon</th>
              <th>Lettuce</th>
              <th>Cheese</th>
              <th>Meat</th>
              <th>Total $</th>

            </tr>
          </thead>
          <tbody>

            {customersData?.map(({ id, data }) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>{data.delivery}</td>
                <td>{data.bacon}</td>
                <td>{data.lettuce}</td>
                <td>{data.cheese}</td>
                <td>{data.meat}</td>
                <td>{data.price} $</td>
              </tr>
            ))}

          </tbody>
        </Table>

      </div>
    </div>
  )
}
