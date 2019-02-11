import React from 'react'
import { connect } from 'react-redux'
import { fetchStudentsFromServer } from '../reducers/studentReducer'

class AllStudents extends React.Component {

    componentDidMount(){
        this.props.fetchStudents()
    }

    render(){
        return (<div><h1>Hi!!!!!!!!</h1></div>)
    }
}

const mapStateToProps = (state) => ({
    students: state.students
})

const mapDispatchToProps = (dispatch) => ({
    fetchStudents: () => {
        dispatch(fetchStudentsFromServer())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)