import React from "react";
import { connect } from "react-redux";
import CreateStudent from "./CreateStudent";
import AddStudent from "./AddStudent";
import {
  fetchStudentsFromServer,
  deleteStudentFromDatabase
} from "../reducers/studentReducer";

class AllStudents extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    await this.props.fetchStudents();
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.setState({ loading: true });
  }

  render() {
    const students = this.props.students;
    return (
      <div className="student-container">
        {this.state.loading && <h1>Hang on please, conjuring owls.</h1>}
        {!this.state.loading && (
          <div>
            <div className="add-form">
              <h3>Add New Student</h3>
              <AddStudent />
            </div>
            <h1>All Students</h1>
            <div className="students">
              {students.map(student => {
                return (
                  <CreateStudent
                    remove={this.props.deleteStudent}
                    key={student.id}
                    view="list"
                    student={student}
                  />
                );
              })}
            </div>
          </div>
        )}
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
  deleteStudent: id => {
    dispatch(deleteStudentFromDatabase(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
