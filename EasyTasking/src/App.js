import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import TaskList from './components/Tasks/TaskList';
import TaskDetails from './components/Tasks/TaskDetails';
import AddTaskForm from './components/Tasks/AddTaskForm';
import UpdateTaskForm from './components/Tasks/UpdateTaskForm';
import DeleteTaskButton from './components/Tasks/DeleteTaskButton';

import StudentList from './components/Students/StudentList';
import Layout from './components/Layout';
import Home from './components/Home';
import FalsePage from './components/FalsePage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get('http://localhost:8080/api/tasks');
      setTasks(response.data);
    }

    async function fetchStudents() {
      const response = await axios.get('http://localhost:8080/api/students');
      setStudents(response.data);
    }

    fetchTasks();
    fetchStudents();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/tasks' element={<TaskList/>}/>
          <Route path='/tasks/:taskId' element={<TaskDetails/>}/>
          <Route path='/tasks/add' element={<AddTaskForm/>}/>
          <Route path='/tasks/:taskId/update' element={<UpdateTaskForm/>}/>
          <Route path='/tasks/:taskId/delete' element={<DeleteTaskButton/>}/>
          <Route path='/students' element={<StudentList/>}/>
          <Route path='*' element={<FalsePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;