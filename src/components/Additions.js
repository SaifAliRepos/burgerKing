import React from 'react'
import { FormGroup } from 'react-bootstrap'
export default function Additions() {
  return (
    <div>
      <div className='p-5'>
          <FormGroup>
            <mark>Lettuce</mark>
            <button className='btn btn-sm btn-outline-success m-2' onClick={this.add}>Add</button>
            <button className='btn btn-sm btn-outline-danger' onClick={this.remove}>Remove</button>
          </FormGroup>
          <FormGroup>
            <mark className='m-1'>Bacon</mark>
            <button className='btn btn-sm btn-outline-success m-2'>Add</button>
            <button className='btn btn-sm btn-outline-danger'>Remove</button>
          </FormGroup>

          <FormGroup>
            <mark className='m-2'>Meat</mark>
            <button className='btn btn-sm btn-outline-success m-2'>Add</button>
            <button className='btn btn-sm btn-outline-danger'>Remove</button>
          </FormGroup>

          <FormGroup>
            <mark>Cheese</mark>
            <button className='btn btn-sm btn-outline-success m-2'>Add</button>
            <button className='btn btn-sm btn-outline-danger'>Remove</button>
          </FormGroup>

        </div>
    </div>
  )
}
