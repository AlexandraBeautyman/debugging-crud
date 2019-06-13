import React from "react";
import { connect } from "react-redux";
import { postNewStudent } from "../reducers/studentReducer";
import StudentForm from "./StudentForm";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      firstName: event.target.firstName,
      lastName: event.target.lastName,
      email: event.target.email
    };
    this.props.postNewStudentToServer(body);
    this.setState({ firstName: "", lastName: "", email: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
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
  postNewStudentToServer: newStudent => dispatch(postNewStudent(newStudent))
});

export default connect(
  null,
  mapDispatchToProps
)(AddStudent);
