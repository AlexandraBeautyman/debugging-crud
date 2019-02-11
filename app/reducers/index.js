// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import campusReducer from './campusReducer';

const rootReducer = combineReducers({
  campuses: campusReducer
})

export default rootReducer
