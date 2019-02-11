import Axios from 'axios'

//Action names
export const GOT_CAMPUS_DATA = 'GOT_CAMPUS_DATA'

//Action creators
export const gotCampusData = (campusData) => ({
    type: GOT_CAMPUS_DATA,
    campuses: campusData
})

//Thunk creators
export const fetchCampusDataFromServer = () => async (dispatch) => {
    const response = await Axios.get('/api/campuses')
    const campusData = response.data
    dispatch(gotCampusData(campusData))
}

//Reducer
const campusReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CAMPUS_DATA: {
            return ([...action.campuses])
        }
        default: return state
    }
}

export default campusReducer