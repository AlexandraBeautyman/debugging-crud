import React from "react";
import Axios from "axios";

class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
    };

   this.handleSubmit = this.handleSubmit.bind(this)
   this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      address: event.target.address.value
    };
    await Axios.post("/api/campuses", body);
    this.setState({
      name: "",
      address: ""
    });
  }

  handleChange(event) {
      console.log("INSIDE HANDLE CHANGE: ", event.target.value)
      this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Campus Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
          />
        </label>
        <label>
          Address:
          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            value={this.state.address}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddCampus;
