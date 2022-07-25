import React from 'react'

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
    alert('First name was submitted: ' + this.state.firstName);
    alert('Last name was submitted: ' + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit} className='mt-5'>
        <label className='m-2' >
          FirstName:
          <input className='m-2' type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label className='m-2' >
          LastName:
          <input className='m-2' type="text" name='lastName' value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <input  type="submit" value="Submit" />
      </form>

      </div>

    );
  }
}
