import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampusDataFromServer } from "../reducers/selectedCampusReducer";

class SingleCampus extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.fetchSingleCampus(id);
  }

  render() {
    console.log(this.props);
    return <h1>Hi!!!!!!!!!</h1>;
  }
}

const mapStateToProps = state => ({
  campus: state.selectedCampus, 
  students: state.selectedCampus.students
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCampus: id => dispatch(fetchSingleCampusDataFromServer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
