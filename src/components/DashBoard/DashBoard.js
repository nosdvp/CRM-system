import './DashBoard.css'
import { useState } from 'react'
import logo from '../../img/synca-icon.svg'
import Home from './Home/Home'
import Tickets from './Tickets/Tickets'
import Schedule from './Schedule/Schedule'

const DashBoard = () => {

  const [role, setRole] = useState('customerSupport')
  const [employee, setEmployee] = useState('Andrii Mishchenko')

  const [activeChapter, setActiveChapter] = useState('home')

  let splitData = employee.split(' ')
  let nameShort = []
  for(let i = 0; i < splitData.length; i++){
    let peaceName = splitData[i].slice(0, 1)
    nameShort.push(peaceName)
  }
  console.log(nameShort)


  return (
    <>
      {role === 'customerSupport' ? (
        <div className='wrapperDashboard'>
          <div className='wrapperDashboard__nav'>
            <div className='wrapperDashboard__nav_navBlock'>
              <div className='wrapperDashboard__nav_navBlock_title'>
                <img src={logo}/>
                <h1>SYNCA</h1>
              </div>

              <div className={activeChapter === 'home' ? 'wrapperDashboard__nav_navBlock_homeActive' : 'wrapperDashboard__nav_navBlock_homeInactive'} onClick={() => setActiveChapter('home')}>
                <div className={activeChapter === 'home' ? 'wrapperDashboard__nav_navBlock_homeActive_activeIMG' : 'wrapperDashboard__nav_navBlock_homeInactive_inactiveIMG'}></div>
                <p>Home</p>
              </div>

              <div className={activeChapter === 'tickets' ? 'wrapperDashboard__nav_navBlock_ticketsActive' : 'wrapperDashboard__nav_navBlock_ticketsInactive'} onClick={() => setActiveChapter('tickets')}>
                <div className={activeChapter === 'tickets' ? 'wrapperDashboard__nav_navBlock_ticketsActive_activeIMG' : 'wrapperDashboard__nav_navBlock_ticketsInactive_inactiveIMG'}></div>
                <p>Tickets</p>
              </div>

              <div className={activeChapter === 'schedule' ? 'wrapperDashboard__nav_navBlock_scheduleActive' : 'wrapperDashboard__nav_navBlock_scheduleInactive'} onClick={() => setActiveChapter('schedule')}>
                <div className={activeChapter === 'schedule' ? 'wrapperDashboard__nav_navBlock_scheduleActive_activeIMG' : 'wrapperDashboard__nav_navBlock_scheduleInactive_inactiveIMG'}></div>
                <p>Schedule</p>
              </div>
            </div>


            <div className='wrapperDashboard__nav_employee'>
              <div className='wrapperDashboard__nav_employee_shortName'>
                <p>{nameShort.join('')}</p>
              </div>
              <div className='wrapperDashboard__nav_employee_fullNamePossition'>
                <p className='wrapperDashboard__nav_employee_fullNamePossition_name'>{employee}</p>
                <p className='wrapperDashboard__nav_employee_fullNamePossition_position'>{role}</p>
              </div>
            </div>
          </div>

          <>
            <div className='content'>
              {activeChapter === 'home' ? (
                <Home/>
              ) : activeChapter === 'tickets' ? (
                <Tickets/>
              ) : activeChapter === 'schedule' ? (
                <Schedule/>
              ) : null}
            </div>
          </>
        </div>
      ) : role === 'teamLead' ? (
        <></>
      ) : null}
      </>
  )
}

export default DashBoard