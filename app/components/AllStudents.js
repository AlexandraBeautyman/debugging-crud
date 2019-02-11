import React from "react";
import { connect } from "react-redux";
import SingleStudent from "./SingleStudent";
import { fetchStudentsFromServer } from "../reducers/studentReducer";

class AllStudents extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const students = this.props.students;
    return (
      <div>
        <h1>All Students</h1>
        <div className="students">
          {students.map(student => {
            return <SingleStudent key={student.id} student={student} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students
});

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => {
    dispatch(fetchStudentsFromServer());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
