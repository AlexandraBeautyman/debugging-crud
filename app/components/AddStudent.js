import React from "react";
import { connect } from "react-redux";
import { postNewStudent } from "../reducers/studentReducer";

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
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value
    };
    this.props.postNewStudentToServer(body);
    this.setState({ firstName: "", lastName: "", address: "" });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            value={this.state.firstName}
          />
        </label>
        <label>
          Last Name:
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            value={this.state.lastName}
          />
        </label>
        <label>
          Email:
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
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
