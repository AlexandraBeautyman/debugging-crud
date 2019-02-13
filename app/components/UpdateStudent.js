import React from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import { updateSingleStudentInDatabase } from "../reducers/studentReducer";

class UpdateStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
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
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value
    };
    await this.props.updateStudent(this.props.id, updateBundle);
    this.setState({ firstName: "", lastName: "", email: "" });
  }

  render() {
    return (
      <StudentForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStudent: (id, updateBundle) =>
    dispatch(updateSingleStudentInDatabase(id, updateBundle))
});

export default connect(
  null,
  mapDispatchToProps
)(UpdateStudent);
