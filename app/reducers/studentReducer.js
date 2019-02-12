import Axios from 'axios'

//Action names
const GOT_STUDENTS_DATA = 'GOT_STUDENTS_DATA'
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT'

//Action creators
const gotStudentsData = (studentsData) => ({
    type: GOT_STUDENTS_DATA,
    students: studentsData
})

const gotSingleStudent = (student) => ({
    type: GOT_SINGLE_STUDENT,
    student
})

//Thunk creators
export const fetchStudentsFromServer = () => async (dispatch) => {
    const response = await Axios.get('/api/students')
    const studentsData = response.data
    dispatch(gotStudentsData(studentsData))
}

export const fetchSingleStudentFromServer = (id) => async (dispatch) => {
    const response = await Axios.get(`/api/students/${id}`)
    const studentData = response.data
    dispatch(gotSingleStudent(studentData))
}

const studentReducer = (state = { allStudents: [], singleStudent: {} }, action) => {
    switch (action.type) {
        case GOT_STUDENTS_DATA: {
            return ({...state, allStudents: [...action.students]})
        }
        case GOT_SINGLE_STUDENT: {
            return ({...state, singleStudent: {...action.student}})
        }
        default: return state
    }
}

export default studentReducer
