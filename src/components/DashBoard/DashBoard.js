import './DashBoard.css'
import { useEffect, useState } from 'react'
import logo from '../../img/synca-icon.svg'
import Home from './Home/Home'
import Tickets from './Tickets/Tickets'
import Schedule from './Schedule/Schedule'
import { replace, useNavigate }from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import { getDoc, doc } from 'firebase/firestore'

const DashBoard = () => {

  const [role, setRole] = useState('')
  const [employeeName, setEmployeeName] = useState('')

  const [activeChapter, setActiveChapter] = useState('home')

  const navigate = useNavigate()

  const logout = async () => {
    try{
      await signOut(auth)
      navigate('/', {replace: true})
    }catch(error){
      console.log('Ошибка при входе:', error)
    }
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async(user) => {
      if(user){
        try{
          const copyDataBase = doc(db, 'users', user.uid)
          const getUserData = await getDoc(copyDataBase)

          if(getUserData.exists()){
            const getData = getUserData.data()
            setEmployeeName(getData.name)
            setRole(getData.role)
          }
        }catch(error){
          console.log('Please text name in DB')
        }
      }
    })

    return () => unsubcribe();
  }, [])

  return (
    <>
      {role === 'Customer Support' ? (
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


            <div className='wrapperDashboard__nav_nameLogout'>
              <div className='wrapperDashboard__nav_nameLogout_employee'>
              <div className='wrapperDashboard__nav_nameLogout_employee_shortName'>
                <p>{employeeName.charAt(0)}</p>
              </div>
              <div className='wrapperDashboard__nav_nameLogout_employee_fullNamePossition'>
                <p className='wrapperDashboard__nav_nameLogout_employee_fullNamePossition_name'>{employeeName}</p>
                <p className='wrapperDashboard__nav_nameLogout_employee_fullNamePossition_position'>{role}</p>
              </div>
            </div>

            <button
              className='wrapperDashboard__nav_nameLogout_logout'
              onClick={() => logout()}
            >Log Out</button>

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