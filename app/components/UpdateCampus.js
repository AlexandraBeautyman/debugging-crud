import React from "react";
import { connect } from "react-redux";
import CampusForm from "./CampusForm";
import { updateSingleCampusInDatabase } from "../reducers/selectedCampusReducer";

class UpdateCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const updateBundle = {
      name: event.target.name.value,
      address: event.target.address.value
    };
    await this.props.updateCampus(this.props.id, updateBundle);
    this.setState({ name: "", address: "" });
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
  updateCampus: (id, updateBundle) =>
    dispatch(updateSingleCampusInDatabase(id, updateBundle))
});

export default connect(
  null,
  mapDispatchToProps
)(UpdateCampus);
