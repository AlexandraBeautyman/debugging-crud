import Axios from 'axios'

//Action names
const GOT_SINGLE_CAMPUS_DATA = 'GOT_SINGLE_CAMPUS_DATA'

//Action creators
const gotSingleCampusData = (selectedCampus) => ({
    type: GOT_SINGLE_CAMPUS_DATA,
    selectedCampus
})

//Thunk creators
export const fetchSingleCampusDataFromServer = (id) => async (dispatch) => {
    const response = await Axios.get(`/api/campuses/${id}`)
    const singleCampusData = response.data
    dispatch(gotSingleCampusData(singleCampusData))
}

//Reducer
const selectedCampusReducer = (state = {students: []}, action) => {
    switch (action.type) {
        case GOT_SINGLE_CAMPUS_DATA: {
            return ({...state, ...action.selectedCampus})
        }
        default: return state
    }
}

export default selectedCampusReducer
