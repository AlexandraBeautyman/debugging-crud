import React from 'react'
import { Route, Link } from 'react-router-dom'
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import SingleCampus from './SingleCampus';

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
        <Link to='/campuses'>Campuses</Link>
        <Link to='/students'>Students</Link>
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Route exact path='/campuses' component={AllCampuses} />
        <Route exact path='/students' component={AllStudents} />
        <Route exact path='/campuses/:campusId' component={SingleCampus} />
      </main>
    </div>
  )
}

export default Root
