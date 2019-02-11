import Axios from 'axios'

//Action names
const GOT_STUDENTS_DATA = 'GOT_STUDENTS_DATA'

//Action creators
export const gotStudentsData = (studentsData) => ({
    type: GOT_STUDENTS_DATA,
    students: studentsData
})

//Thunk creators
export const fetchStudentsFromServer = () => async (dispatch) => {
    const response = await Axios.get('/api/students')
    const studentsData = response.data
    dispatch(gotStudentsData(studentsData))
}

const studentReducer = (state = [], action) => {
    switch(action.type) {
        case GOT_STUDENTS_DATA: {
            return ([...action.students])
        }
        default: return state
    }
}

export default studentReducer
