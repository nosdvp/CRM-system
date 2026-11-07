import React, { useState } from 'react'
import './Home.css'
import play from '../../../img/play.svg'

const Home = () => {

  const [name, setName] = useState('Andrii')
  const [shift, setShift] = useState('morning')

  const date = new Date
  const month = date.toLocaleString('en-EN', {
    month: 'short',
  })
  const day = date.toLocaleString('en-EN', {
    weekday: 'long'
  })

  return (
    <div className='homeWrapper'>
      <div className='blockTitle'>
        <h1>Home</h1>
        <p>{day}, {month} {date.getDate()}, {date.getFullYear()}</p>
      </div>

      <div className='blockGreeting'>
        <div className='blockGreeting__content'>
          <div className='blockGreeting__content_desscription'>
            <div className='blockGreeting__content_desscription_infoShift'>
              <h1>Hello, {name}</h1>
              <p className='blockGreeting__content_desscription_infoShift_sunTitle'>Ready to start your shift? Here's what's planned for today.</p>
              {shift === 'morning' ? (
                <div className='blockGreeting__content_desscription_infoShift_morning'>
                  <p className='blockGreeting__content_desscription_infoShift_morning_circle'></p>
                  <p className='blockGreeting__content_desscription_infoShift_morning_infoShift'>Morning Shift</p>
                  <p className='blockGreeting__content_desscription_infoShift_morning_square'></p>
                  <p className='blockGreeting__content_desscription_infoShift_morning_time'>08:00 - 16:00</p>
                </div>
              ) : shift === 'evening' ? (
                <div className='blockGreeting__content_desscription_infoShift_evening'>
                  <p className='blockGreeting__content_desscription_infoShift_evening_circle'></p>
                  <p className='blockGreeting__content_desscription_infoShift_evening_infoShift'>Morning Shift</p>
                  <p className='blockGreeting__content_desscription_infoShift_evening_square'></p>
                  <p className='blockGreeting__content_desscription_infoShift_evening_time'>08:00 - 16:00</p>
                </div>
              ) : shift === 'night' ? (
                <div className='blockGreeting__content_desscription_infoShift_night'>
                  <p className='blockGreeting__content_desscription_infoShift_night_circle'></p>
                  <p className='blockGreeting__content_desscription_infoShift_night_infoShift'>Morning Shift</p>
                  <p className='blockGreeting__content_desscription_infoShift_night_square'></p>
                  <p className='blockGreeting__content_desscription_infoShift_night_time'>08:00 - 16:00</p>
                </div>
              ) : null}
            </div>

            <div className='blockGreeting__content_desscription_startShift'>
              {shift === 'morning' ? (
                <button className='blockGreeting__content_desscription_startShift_morning'>
                  <img src={play}/>
                  Start Shift</button>
              ) : shift === 'evening' ? (
                <button className='blockGreeting__content_desscription_startShift_evening'>
                  <img src={play}/>
                  Start Shift</button>
              ) : shift === 'night' ? (
                <button className='blockGreeting__content_desscription_startShift_night'>
                  <img src={play}/>
                  Start Shift</button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home