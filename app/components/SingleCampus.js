import React from "react";

const SingleCampus = (props) => {
  console.log(props);
  const {campus} = props
  return (
    <div className="campus" key={campus.key}>
      <img className="campus-image" src={campus.imageUrl} />
      <div className="campus-info">
        <h3>{campus.name}</h3>"{campus.description}"
      </div>
    </div>
  );
};

export default SingleCampus;
