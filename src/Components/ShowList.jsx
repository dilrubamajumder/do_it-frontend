import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "../Design/ShowList.css"

const API = import.meta.env.VITE_API_URL;
//const API = 'http://localhost:3002'

function ToDoList() {
   const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
    .get(`${API}/tasks`)
    .then((response) => {
      console.log(response.data)
      setTasks(response.data)
    })
    .catch((error) => console.warn(error))
  },[])

  return (
    <div className='show-list'>
      <h1 className='show-list-title'>Get to it:</h1>
      <ul className='show-list-ul'>
        {tasks.map(task =>
          <li key={task.id} className={`task-card ${task.status.toLowerCase()}`}>  
          <div className='task-card-description'>{task.description}</div>
          <div className='task-card-due-date'>{task.due_date}</div>
          <div className='task-card-status'>{task.status}</div>
          </li>
          )}
          <li></li>
      </ul>
    </div> 
  )
}

export default ToDoList