import React from "react";
import { connect } from "react-redux";
import CreateStudent from "./CreateStudent";
import AddStudent from './AddStudent'
import { fetchStudentsFromServer, deleteStudentFromDatabase } from "../reducers/studentReducer";

class AllStudents extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const students = this.props.students;
    return (
      <div className="student-container">
        <div className="add-form"><h3>Add New Student</h3><AddStudent /></div>
        <h1>All Students</h1>
        <div className="students">
          {students.map(student => {
            return <CreateStudent remove={this.props.deleteStudent} key={student.id} view="list" student={student} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students.allStudents
});

const mapDispatchToProps = dispatch => ({
  fetchStudents: () => {
    dispatch(fetchStudentsFromServer());
  },
  deleteStudent: (id) => {
    dispatch(deleteStudentFromDatabase(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
