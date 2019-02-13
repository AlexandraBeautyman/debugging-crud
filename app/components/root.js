import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import LandingPage from "./LandingPage";
import NotFoundComponent from "./NotFoundComponent";

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">Students</Link>
      </nav>
      <main>
        <h1>Welcome to Owl University!</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/*" component={NotFoundComponent} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
