import React from "react";
import { Link } from 'react-router-dom'

const CreateCampus = (props) => {
  const {campus} = props
  return (
    <div className="campus" key={campus.key}>
      <img className="campus-image" src={campus.imageUrl} />
      <div className="campus-info">
        <Link to={`/campuses/${campus.id}`}><h3>{campus.name}</h3></Link>
        <p>"{campus.description}"</p>
      </div>
    </div>
  );
};

export default CreateCampus;
