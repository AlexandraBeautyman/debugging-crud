import React from "react";
import { connect } from "react-redux";
import {
  fetchSingleStudentFromServer,
  clearSingleStudent
} from "../reducers/studentReducer";
import CreateStudent from "./CreateStudent";
import NotFoundComponent from "./NotFoundComponent";

class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const id = this.props.match.params.studentId;
    await this.props.fetchStudent(id);
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.props.clearStudent();
  }

  render() {
    const student = this.props.student;
    console.log(student);
    return (
      <div className="student-single-container">
        {this.state.loading && (
          <h1>One moment please--we getting some owls in this coop.</h1>
        )}
        {!this.state.loading && student.id && (
          <CreateStudent view="full" student={student} />
        )}
        {!this.state.loading && !student.id && <NotFoundComponent />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.students.singleStudent
});

const mapDispatchToProps = dispatch => ({
  fetchStudent: id => dispatch(fetchSingleStudentFromServer(id)),
  clearStudent: () => dispatch(clearSingleStudent())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
