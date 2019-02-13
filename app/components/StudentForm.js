import React from 'react'

const StudentForm = (props) => {
    const {handleChange, handleSubmit, firstName, lastName, email} = props
    const buttonExists = firstName && lastName && email;
    return (
        <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={firstName}
          />
          {
            firstName ? (<span />) : (<span className="warning">Field required</span>)
        }
        </label>
        <label>
          Last Name:
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={lastName}
          />
          {
            lastName ? (<span />) : (<span className="warning">Field required</span>)
        }
        </label>
        <label>
          Email:
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={email}
          />
          {
            email ? (<span />) : (<span className="warning">Field required</span>)
        }
        </label>
        {
            buttonExists ? (<button className="submit-button" type="submit">Submit</button>) :
            (<button className="submit-button" disabled={true} type="submit">Submit</button>)
        }
        
      </form>
    )
}

export default StudentForm