import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleStudentFromServer } from "../reducers/studentReducer";
import CreateStudent from './CreateStudent'

class SingleStudent extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.studentId;
    this.props.fetchStudent(id);
  }

  render() {
      const student = this.props.student
    return (
      <div>
       {student &&  <CreateStudent view="full" student={student} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.students.singleStudent
});

const mapDispatchToProps = dispatch => ({
  fetchStudent: id => dispatch(fetchSingleStudentFromServer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
