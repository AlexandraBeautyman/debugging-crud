import Axios from 'axios'

//Action names
const GOT_SINGLE_CAMPUS_DATA = 'GOT_SINGLE_CAMPUS_DATA'
const CLEAR_SINGLE_CAMPUS = 'CLEAR_SINGLE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

//Action creators
const gotSingleCampusData = (selectedCampus) => ({
    type: GOT_SINGLE_CAMPUS_DATA,
    selectedCampus
})

export const clearSingleCampus = () => ({
    type: CLEAR_SINGLE_CAMPUS
})

const updateCampus = (updatedCampus) => ({
    type: UPDATE_CAMPUS,
    updatedCampus
})

//Thunk creators
export const fetchSingleCampusDataFromServer = (id) => async (dispatch) => {
    const { data } = await Axios.get(`/api/campuses/${id}`)
    dispatch(gotSingleCampusData(data))
}

export const updateSingleCampusInDatabase = (id, updateBundle) => async (dispatch) => {
    const { data } = await Axios.put(`/api/campuses/${id}`, updateBundle)
    console.log(data)
    dispatch(updateCampus(data))
}

//Reducer
const initialState = {students: []}

const selectedCampusReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_SINGLE_CAMPUS_DATA: {
            return ({...state, ...action.selectedCampus})
        }
        case CLEAR_SINGLE_CAMPUS: {
            return initialState
        }
        case UPDATE_CAMPUS: {
            return ({...state, ...action.updatedCampus})
        }
        default: return state
    }
}

export default selectedCampusReducer
