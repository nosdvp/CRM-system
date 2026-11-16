import React, { useState } from 'react'
import './Schedule.css'

const Schedule = () => {

  const [currentDay, setCurrentDay] = useState(new Date())

  const today = () => {
    setCurrentDay(new Date())
  }

  const prevWeek = () => {
    const newDate = new Date(currentDay)
    newDate.setDate(currentDay.getDate() - 7)
    setCurrentDay(newDate)
  }

  const nextWeek = () => {
    const newDate = new Date(currentDay)
    newDate.setDate(currentDay.getDate() + 7)
    setCurrentDay(newDate)
  }

  const date = new Date(currentDay)
  const dayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 1
  
  const startOfWeek = new Date(date)
  startOfWeek.setDate(date.getDate() - dayOfWeek)
  
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)

  const formatDate = (d) => {
    const day = d.getDate()
    const month = d.toLocaleString('en-EN', { month: 'short' })
    return `${day} ${month}`
  }

  return (
    <div className='scheduleWrapper'>
      <div className='blockTitleNav'>
        <h1>Schedule</h1>
        <div className='blockTitleNav__nav'>
          <div className='blockTitleNav__nav_weekNav'>
            <button 
              className='blockTitleNav__nav_weekNav_prevWeek'
              onClick={() => prevWeek()}  
            >{'<'}</button>
            <div>{formatDate(startOfWeek)} — {formatDate(endOfWeek)}, {new Date().getFullYear()}</div>
            <button 
              className='blockTitleNav__nav_weekNav_nextWeek'
              onClick={() => nextWeek()}  
            >{'>'}</button>
          </div>
          <button
            className='blockTitleNav__nav_today'
            onClick={() => today()}
          >Today</button>
        </div>
      </div>
    </div>
  )
}

export default Schedule