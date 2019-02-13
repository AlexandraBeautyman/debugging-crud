import React from "react";
import { connect } from "react-redux";
import { postNewCampus } from "../reducers/campusReducer";
import CampusForm from './CampusForm'

class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: event.target.name.value,
      address: event.target.address.value
    };
    await this.props.postNewCampusToServer(body);
    this.setState({ name: "", address: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <CampusForm 
      handleChange={this.handleChange} 
      handleSubmit={this.handleSubmit}
      name={this.state.name}
      address={this.state.address}
      />
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
