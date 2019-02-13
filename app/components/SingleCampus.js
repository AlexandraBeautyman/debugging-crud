import React from "react";
import { connect } from "react-redux";
import {
  fetchSingleCampusDataFromServer,
  clearSingleCampus
} from "../reducers/selectedCampusReducer";
import CreateCampus from "./CreateCampus";
import CreateStudent from "./CreateStudent";
import NotFoundComponent from "./NotFoundComponent";

class SingleCampus extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const id = this.props.match.params.campusId;
    await this.props.fetchSingleCampus(id);
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.props.clearCampus();
    this.setState({ loading: true });
  }

  render() {
    const campus = this.props.selectedCampus;
    const students = this.props.selectedCampus.students;
    return (
      <div>
        {this.state.loading && (
          <h1>One moment please--we getting some owls in this coop.</h1>
        )}
        {!this.state.loading && campus.id && (
          <div>
            <CreateCampus view="full" campus={this.props.selectedCampus} />
            <div className="student-container">
              <h1>Students</h1>
              <div className="students">
                {students.length ? (
                  students.map(student => (
                    <CreateStudent
                      key={student.id}
                      view="list"
                      student={student}
                    />
                  ))
                ) : (
                  <h3>No students attending this campus</h3>
                )}
              </div>
            </div>
          </div>
        )}
        {!this.state.loading && !campus.id && <NotFoundComponent />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedCampus: state.selectedCampus
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCampus: id => dispatch(fetchSingleCampusDataFromServer(id)),
  clearCampus: () => dispatch(clearSingleCampus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
