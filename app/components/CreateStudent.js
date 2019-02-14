import React from "react";
import { Link } from "react-router-dom";

const CreateStudent = props => {
  const { student, view, remove } = props;
  const campus = student.campus;
  let viewToRender;

  view === "list"
    ? (viewToRender = (
        <div key={student.id} className="student">
          <img className="student-image" src={student.imageUrl} />
          <div className="student-info">
            <Link to={`/students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <button
              className="delete-button"
              type="button"
              onClick={() => remove(student.id)}
            >
              X
            </button>
          </div>
        </div>
      ))
    : (viewToRender = (
        <div key={student.id} className="student-single">
          <img className="student-image" src={student.imageUrl} />
          <div className="student-info-single">
            <h1>
              {student.firstName} {student.lastName}
            </h1>
            <h3>Email: {student.email}</h3>
            <h3>GPA: {student.gpa}</h3>
            <h3>
              Campus:
              {campus ? (
                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              ) : (
                <h3>Not currently attending a campus</h3>
              )}
            </h3>
          </div>
        </div>
      ));

  return viewToRender;
};

export default CreateStudent;
