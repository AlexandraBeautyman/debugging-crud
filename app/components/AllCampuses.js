import React from "react";
import { connect } from "react-redux";
import CreateCampus from "./CreateCampus";
import AddCampus from "./AddCampus";
import {
  fetchCampusDataFromServer,
  deleteCampusFromDatabase
} from "../reducers/campusReducer";

class AllCampuses extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    await this.props.fetchCampuses();
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.setState({ loading: true });
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        {this.state.loading && (
          <h1>Hold your owls, getting those campuses...</h1>
        )}
        {!this.state.loading && (
          <div>
            <div className="add-form">
              <h3>Add New Campus:</h3>
              <AddCampus />
            </div>
            <div className="campuses">
              {campuses.map(campus => {
                return (
                  <CreateCampus
                    key={campus.id}
                    view="list"
                    campus={campus}
                    remove={this.props.deleteCampus}
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
  campuses: state.campuses
});

const mapDispatchToProps = dispatch => ({
  fetchCampuses: () => {
    dispatch(fetchCampusDataFromServer());
  },
  deleteCampus: id => {
    dispatch(deleteCampusFromDatabase(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
