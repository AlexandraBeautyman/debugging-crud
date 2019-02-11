import React from 'react'

const CreateStudent = (props) => {
    const { student } = props
    return (
        <div key={student.id} className="student">
        <img className="student-image" src={student.imageUrl} />
        <div className="student-info">
            Name: {student.firstName} {student.lastName} <br />
        </div>
        </div>
    )
}

export default CreateStudent
