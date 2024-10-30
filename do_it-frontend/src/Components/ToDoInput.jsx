import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL


function ToDoInput() {

  let navigate = useNavigate()

  const [task, setTask] = useState({
    description: '',
    due_date: new Date().toISOString().split('T')[0],
    status: ''
  });

  const statusList = [
    {value: 'top-priority', label: 'Important'},
    {value: 'complete', label: 'DONE!!!!'},
    {value: 'in-progress', label: 'Working on it'}
  ]


  const addNewTask = (newTask) => {
    console.log("Data sent to backend:", newTask); // Ensure `newTask` has data
    axios
      .post(`${API}/tasks`, newTask)
      .then(() => {
        navigate('/tasks')
      })
      .catch((error) => console.error('Error posting new task:', error));
  };
  

  const handleTextChange = (e) => {
  setTask({...task, [e.target.id]: e.target.value});
  console.log('Updated task data:', { ...task, [e.target.id]: e.target.value }); // Verify task data

 }

  const handleStatusChange = (e) => {
    setTask({...task, status: e.target.value})
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitting task:', task); 
  addNewTask(task);
 }

  return (
    <div className='inputCard'>

      <form onSubmit={handleSubmit}>
        <label htmlFor='description'>
            Task:
          <input 
          type='text'
            id='description'
            value={task.description} 
            placeholder='Enter your to-do task..' 
            onChange={handleTextChange}
          />
        </label>

        <label htmlFor='due-date'>
           Due by:
          <input 
          type='date'
            id='due_date'
            value={task.due_date} 
            placeholder='mm/dd/yyyy' 
            onChange={handleTextChange}
          />
        </label>

        <label htmlFor='status'>
           Progress:
          <select 
            id='status'
            value={task.status} 
            placeholder='status' 
            onChange={handleStatusChange}
            >
            <option value=''>Select status</option>
            {statusList.map((status) => (
              <option 
              value={status.value} key={status.value}>{status.label}
              </option>
            ))}
            </select>
        </label>

           
            <button className='add-button' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default ToDoInput