import Axios from 'axios'

//Action names
const GOT_CAMPUS_DATA = 'GOT_CAMPUS_DATA'
const GOT_NEW_CAMPUS = 'GOT_NEW_CAMPUS'

//Action creators
const gotCampusData = (campusData) => ({
    type: GOT_CAMPUS_DATA,
    campuses: campusData
})

const GotNewCampus = (newCampus) => ({
    type: GOT_NEW_CAMPUS,
    newCampus
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
    dispatch(GotNewCampus(newCampus))
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
        default: return state
    }
}

export default campusReducer
