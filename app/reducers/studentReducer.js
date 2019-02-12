import Axios from 'axios'

//Action names
const GOT_STUDENTS_DATA = 'GOT_STUDENTS_DATA'
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT'
const GOT_NEW_STUDENT = 'GOT_NEW_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

//Action creators
const gotStudentsData = (studentsData) => ({
    type: GOT_STUDENTS_DATA,
    students: studentsData
})

const gotSingleStudent = (student) => ({
    type: GOT_SINGLE_STUDENT,
    student
})

const gotNewStudent = (newStudent) => ({
    type: GOT_NEW_STUDENT,
    newStudent
})

const deleteStudent = (text) => ({
    type: DELETE_STUDENT,
    text
})

//Thunk creators
export const fetchStudentsFromServer = () => async (dispatch) => {
    const { data } = await Axios.get('/api/students')
    dispatch(gotStudentsData(data))
}

export const fetchSingleStudentFromServer = (id) => async (dispatch) => {
    const { data } = await Axios.get(`/api/students/${id}`)
    dispatch(gotSingleStudent(data))
}

export const postNewStudent = (newStudent) => async (dispatch) => {
    const { data } = await Axios.post('/api/students', newStudent)
    dispatch(gotNewStudent(data))
}

export const deleteStudentFromDatabase = (id) => async (dispatch) => {
    const { data } = await Axios.delete(`/api/students/${id}`)
    dispatch(deleteStudent(data))
}

//sub-reducer
const studentReducer = (state = { allStudents: [], singleStudent: {} }, action) => {
    switch (action.type) {
        case GOT_STUDENTS_DATA: {
            return ({...state, allStudents: [...action.students]})
        }
        case GOT_SINGLE_STUDENT: {
            return ({...state, singleStudent: {...action.student}})
        }
        case GOT_NEW_STUDENT: {
            return ({...state, allStudents: [...state.allStudents, action.newStudent]})
        }
        case DELETE_STUDENT: {
            const updatedStudents = [...state.allStudents].filter( (student) => {
                return (student.id === )
            })
        }
        default: return state
    }
}

export default studentReducer
