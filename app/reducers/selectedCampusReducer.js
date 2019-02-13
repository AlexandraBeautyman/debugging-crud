import Axios from 'axios'

//Action names
const GOT_SINGLE_CAMPUS_DATA = 'GOT_SINGLE_CAMPUS_DATA'
const CLEAR_SINGLE_CAMPUS = 'CLEAR_SINGLE_CAMPUS'

//Action creators
const gotSingleCampusData = (selectedCampus) => ({
    type: GOT_SINGLE_CAMPUS_DATA,
    selectedCampus
})

export const clearSingleCampus = () => ({
    type: CLEAR_SINGLE_CAMPUS
})

//Thunk creators
export const fetchSingleCampusDataFromServer = (id) => async (dispatch) => {
    const response = await Axios.get(`/api/campuses/${id}`)
    const singleCampusData = response.data
    dispatch(gotSingleCampusData(singleCampusData))
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
        default: return state
    }
}

export default selectedCampusReducer
