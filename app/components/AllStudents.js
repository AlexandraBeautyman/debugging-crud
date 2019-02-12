import React from "react";
import { connect } from "react-redux";
import CreateStudent from "./CreateStudent";
import { fetchStudentsFromServer } from "../reducers/studentReducer";

class AllStudents extends React.Component {
  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    console.log(this.props)
    const students = this.props.students;
    return (
      <div className="student-container">
        <h1>All Students</h1>
        <div className="students">
          {students.map(student => {
            return <CreateStudent key={student.id} view="list" student={student} />;
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
