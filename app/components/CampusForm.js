import React from "react";

const CampusForm = props => {
  const { handleSubmit, handleChange, name, address } = props;
  const buttonExists = name && address;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Campus Name:
        <input
          onChange={handleChange}
          type="text"
          placeholder="campus name required"
          name="name"
          value={name}
        />
        {
            name ? (<span />) : (<span className="warning">Field required</span>)
        }
      </label>
      <label>
        Address:
        <input
          onChange={handleChange}
          type="text"
          name="address"
          placeholder="address required"
          value={address}
        />
        {
            address ? (<span />) : (<span className="warning">Field required</span>)
        }
      </label>
      {buttonExists ? (
        <button className="submit-button" type="submit">Submit</button>
      ) : (
        <button className="submit-button-disabled" disabled={true} type="submit">
          Submit
        </button>
      )}
    </form>
  );
};

export default CampusForm;
