import React from "react";
import { connect } from "react-redux";
import { postNewStudent } from "../reducers/studentReducer";
// We could fail to import the thunk creator.
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
    // We could fail to preventDefault
    const body = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value
    };
    // We could have a typo here, or we could be grabbing from the wrong thing (e.g. event.firstName.value).
    this.props.postNewStudentToServer(body);
    this.setState({ firstName: "", lastName: "", email: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // We could set state incorrectly here.
  }

  render() {
    return (
      <StudentForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        // We could control these components incorrectly.
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postNewStudentToServer: newStudent => dispatch(postNewStudent(newStudent))
  // We could have a typo in the line above.
});

export default connect(
  null,
  mapDispatchToProps
)(AddStudent);
