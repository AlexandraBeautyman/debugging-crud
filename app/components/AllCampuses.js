import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import CreateCampus from "./CreateCampus";
import AddCampus from './AddCampus'
import { fetchCampusDataFromServer } from "../reducers/campusReducer";

class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
       <div className="add-form"><h3>Add New Campus:</h3><AddCampus /></div>
      <div className="campuses">
        {campuses.map(campus => {
          return <CreateCampus key={campus.id} view="list" campus={campus} />;
        })}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  campuses: state.campuses
});

const mapDispatchToProps = dispatch => ({
  fetchCampuses: () => {
    dispatch(fetchCampusDataFromServer());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
