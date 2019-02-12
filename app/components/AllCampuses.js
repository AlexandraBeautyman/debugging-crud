import React from "react";
import { connect } from "react-redux";
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
      <div className="campuses">
        {campuses.map(campus => {
          return <CreateCampus key={campus.id} view="list" campus={campus} />;
        })}
        <AddCampus />
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
