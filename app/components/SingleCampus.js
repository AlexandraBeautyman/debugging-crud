import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampusDataFromServer} from "../reducers/selectedCampusReducer";
import CreateCampus from "./CreateCampus";
import CreateStudent from "./CreateStudent";

class SingleCampus extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchSingleCampus(id);
  }

  render() {
    const campus = this.props.selectedCampus;
    const students = this.props.selectedCampus.students;
    return (
      <div>
        {campus && (
          <div>
            <CreateCampus view="full" campus={this.props.selectedCampus} />
            <div className="student-container">
              <h1>Students</h1>
              <div className="students">
                {students.length ? (students.map(student => (
                  <CreateStudent
                    key={student.id}
                    view="list"
                    student={student}
                  />
                )))
              : (<h3>No students attending this campus</h3>)
              }
              </div>
            </div>
          </div>
        )}
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
