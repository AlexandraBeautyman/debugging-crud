// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer
})

export default rootReducer
