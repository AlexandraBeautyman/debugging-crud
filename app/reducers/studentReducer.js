import Axios from "axios";

//Action names
const GOT_STUDENTS_DATA = "GOT_STUDENTS_DATA";
const GOT_SINGLE_STUDENT = "GOT_SINGLE_STUDENT";
const GOT_NEW_STUDENT = "GOT_NEW_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const CLEAR_SINGLE_STUDENT = "CLEAR_SINGLE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";

//Action creators
const gotStudentsData = studentsData => ({
  type: GOT_STUDENTS_DATA,
  students: studentsData
});

const gotSingleStudent = student => ({
  type: GOT_SINGLE_STUDENT,
  student
});

export const clearSingleStudent = () => ({
  type: CLEAR_SINGLE_STUDENT
});

const updateStudent = updatedStudent => ({
  type: UPDATE_STUDENT,
  updatedStudent
});

const gotNewStudent = newStudent => ({
  type: GOT_NEW_STUDENT,
  newStudent
});
// FAV We could have a typo in the type.

const deleteStudent = (result, id) => ({
  type: DELETE_STUDENT,
  result,
  id
});

//Thunk creators
export const fetchStudentsFromServer = () => async dispatch => {
  const { data } = await Axios.get("/api/students");
  dispatch(gotStudentsData(data));
};

export const fetchSingleStudentFromServer = id => async dispatch => {
  const { data } = await Axios.get(`/api/students/${id}`);
  dispatch(gotSingleStudent(data));
};

export const postNewStudent = newStudent => async dispatch => {
  const { data } = await Axios.post("/api/students", newStudent);
  dispatch(gotNewStudent(data));
};
// FAV We could fail to export this thunk creator.
// We could use the wrong dispatch syntax.
// We could fuck up async/await so we are getting a promise.
// We could do the wrong type of Axios request.
// We could send to the wrong route.
// FAV We fail to dispatch gotNewStudent with data, or we could give it the wrong thing.
// FAV We could forget the first slash.

export const deleteStudentFromDatabase = id => async dispatch => {
  const { data } = await Axios.delete(`/api/students/${id}`);
  dispatch(deleteStudent(data, id));
};

export const updateSingleStudentInDatabase = (
  id,
  updateBundle
) => async dispatch => {
  const { data } = await Axios.put(`/api/students/${id}`, updateBundle);
  dispatch(updateStudent(data));
};

//sub-reducer
const studentReducer = (
  state = { allStudents: [], singleStudent: {} },
  action
) => {
  switch (action.type) {
    case GOT_STUDENTS_DATA: {
      return { ...state, allStudents: [...action.students] };
    }
    case GOT_SINGLE_STUDENT: {
      return { ...state, singleStudent: { ...action.student } };
    }
    case UPDATE_STUDENT: {
      return {
        ...state,
        singleStudent: { ...state.singleStudent, ...action.updatedStudent }
      };
    }
    case CLEAR_SINGLE_STUDENT: {
      return { ...state, singleStudent: {} };
    }
    case GOT_NEW_STUDENT: {
      return {
        ...state,
        allStudents: [...state.allStudents, action.newStudent]
      };
      // FAV We could fail to copy the old state first.
    }
    case DELETE_STUDENT: {
      if (action.result) {
        const newArr = [...state.allStudents].filter(student => {
          return student.id !== action.id;
        });
        return { ...state, allStudents: newArr };
      }
    }
    default:
      return state;
  }
};

export default studentReducer;
