import Axios from 'axios'

//Action names
const GOT_CAMPUS_DATA = 'GOT_CAMPUS_DATA'
const GOT_NEW_CAMPUS = 'GOT_NEW_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'

//Action creators
const gotCampusData = (campusData) => ({
    type: GOT_CAMPUS_DATA,
    campuses: campusData
})

const gotNewCampus = (newCampus) => ({
    type: GOT_NEW_CAMPUS,
    newCampus
})

const deleteCampus = (result, id) => ({
    type: DELETE_CAMPUS,
    result,
    id
})

//Thunk creators
export const fetchCampusDataFromServer = () => async (dispatch) => {
    const response = await Axios.get('/api/campuses')
    const campusData = response.data
    dispatch(gotCampusData(campusData))
}

export const postNewCampus = (campusData) => async (dispatch) => {
    const response = await Axios.post('/api/campuses', campusData)
    const newCampus = response.data
    dispatch(gotNewCampus(newCampus))
}

export const deleteCampusFromDatabase = (id) => async (dispatch) => {
    const { data } = await Axios.delete(`/api/campuses/${id}`)
    dispatch(deleteCampus(data, id))
}

//Reducer
const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CAMPUS_DATA: {
            return ([...action.campuses])
        }
        case GOT_NEW_CAMPUS: {
            return ([...state, action.newCampus])
        }
        case DELETE_CAMPUS: {
            if (action.result) {
                const newArr = [...state].filter( (campus) => {
                    return (campus.id !== action.id)
                })
                return ([...newArr])
            }
        }
        default: return state
    }
}

export default campusReducer
