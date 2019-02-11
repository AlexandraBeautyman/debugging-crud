import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampusDataFromServer } from "../reducers/selectedCampusReducer";
import CreateCampus from "./CreateCampus";
import CreateStudent from "./CreateStudent";

class SingleCampus extends React.Component {

  async componentDidMount() {
    const id = this.props.match.params.campusId;
    await this.props.fetchSingleCampus(id);
  }

  render() {
      const students = this.props.selectedCampus.students
      console.log(students, Array.isArray(students))
    return (
      <div>
        <CreateCampus campus={this.props.selectedCampus} />
        <h1>Students</h1>
        <div className="students">
        {students.map((student) => <CreateStudent  key={student.id} student={student} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedCampus: state.selectedCampus
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCampus: id => dispatch(fetchSingleCampusDataFromServer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
