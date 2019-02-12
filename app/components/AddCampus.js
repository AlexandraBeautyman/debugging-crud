import React from "react";
import { connect } from "react-redux";
import { postNewCampus } from "../reducers/campusReducer";

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      address: event.target.address.value
    };
    this.props.postNewCampusToServer(body);
    this.setState({ name: "", address: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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

const mapDispatchToProps = dispatch => ({
  postNewCampusToServer: newCampus => dispatch(postNewCampus(newCampus))
});

export default connect(
  null,
  mapDispatchToProps
)(AddCampus);
