import React from 'react'
import { Link } from 'react-router-dom'
import "../Design/HomePage.css"
import ToDoInput from '../Components/ToDoInput'

function HomePage() {
  return (
    <div className='home-page'>

      <div className='home-page-intro'>
        <h1> Welcome to the do it list app</h1>
      </div>

      <div>
        <Link to="/tasks">
           <button className='get-started-button-hp'> Your Tasks</button>
        </Link>
      </div>
      
      <div className='to-do-input-hp'>
        <ToDoInput/>
      </div>

    </div>
  )
}

export default HomePage