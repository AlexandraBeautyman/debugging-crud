import React from "react";
import { Link } from "react-router-dom";

const CreateStudent = props => {
  const { student, view } = props;
  const campus = student.campus
  //view: list = thumbnails, full = full bio/gpa, etc.

  return (
    <div key={student.id} className="student">
      {view === "list" && (
        <div>
          <img className="student-image" src={student.imageUrl} />
          <div className="student-info">
            <Link to={`/students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
          </div>
        </div>
      )}
      {view === "full" && (
        <div>
          <img className="student-image" src={student.imageUrl} />
          <div className="student-info">
            <h3>Name: {student.firstName} {student.lastName}</h3>
            <h3>Email: {student.email}</h3>
            <h3>GPA: {student.gpa}</h3>
            {campus ? (<h3>Campus: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h3>)
            : (<h3>Not currently attending a campus</h3>) }
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateStudent;
