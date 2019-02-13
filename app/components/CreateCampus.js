import React from "react";
import { Link } from "react-router-dom";

const CreateCampus = props => {
  const { campus, view, remove } = props;
  let viewToRender

  (view === "list") ? viewToRender = (
    <div className="campus" key={campus.key}>
      <img className="campus-image" src={campus.imageUrl} />
      <div className="campus-info">
      <button className="delete-button" type="button" onClick={() => remove(campus.id)}>X</button>
        <Link to={`/campuses/${campus.id}`}>
          <h3>{campus.name}</h3>
        </Link>
        <p>{campus.description}</p>
      </div>
    </div>
  ) : viewToRender = (
    <div className="campus" key={campus.key}>
      <img className="campus-image" src={campus.imageUrl} />
      <div className="campus-info">
          <h3>{campus.name} Campus</h3>
          <h3>Address: {campus.address}</h3>
        <p>{campus.description}</p>
      </div>
    </div>
  )

  return (
    viewToRender
  );
};

export default CreateCampus;
