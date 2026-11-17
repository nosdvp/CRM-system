import React, { useState, useEffect, use } from 'react'
import './Schedule.css'
import { auth, db } from '../../../firebase'
import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

const Schedule = () => {

  const [currentDay, setCurrentDay] = useState(new Date())
  const [employees, setEmployees] = useState([]) //Список сотрудников
  const [scheduleData, setScheduleData] = useState({}) //График

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

  const weekId = startOfWeek.toISOString().split('T')[0]

  const formatDate = (d) => {
    const day = d.getDate()
    const month = d.toLocaleString('en-EN', { month: 'short' })
    return `${day} ${month}`
  }

  useEffect(() => {
    const fetchAllEmployee = async() => {
      try{
        const copyBD = collection(db, 'users')
        const querySnapshot = await getDocs(copyBD)
        const employeeList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setEmployees(employeeList)
      }catch(error){
        console.log(error.message)
      }
    }
    fetchAllEmployee()
  }, [])

  useEffect(() => {
    const fetchSchedule = async() => {
      try{
        const copyDB = doc(db, 'schedule', weekId)
        const getData = await getDoc(copyDB)
        if(getData.exists()){
          setScheduleData(getData.data().data || {})
        }else{
          setScheduleData({})
        }
      }catch(error){
        console.log(error.message)
      }
    }
    if(weekId){
      fetchSchedule()
    }
  }, [weekId])

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