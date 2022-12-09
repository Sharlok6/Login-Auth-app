import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home/Home';
import AddStudent from './components/Pages/AddStudent';
import AddTeacher from './components/Pages/AddTeacher';
import StudentDB from './components/Pages/StudentDB';
import TeacherDB from './components/Pages/TeacherDB';
import EditStudent from './components/Pages/EditStudent';
import EditTeacher from './components/Pages/EditTeacher';
import Front from './components/Front/Front';

const App = () => {
  const loggedfn = window.localStorage.getItem("isLogged");
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={loggedfn ? <Home/> : <Front/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<SignUpPage/>} />
          <Route path='/students' element={<StudentDB/>} />
          <Route path='/teachers' element={<TeacherDB/>} />
          <Route path='/add_teacher' element={<AddTeacher/>} />
          <Route path='/add_student' element={<AddStudent/>} />
          <Route path='/student/edit/:id' element={<EditStudent/>} />
          <Route path='/teacher/edit/:id' element={<EditTeacher/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App