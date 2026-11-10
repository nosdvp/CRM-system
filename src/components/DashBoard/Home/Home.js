import React, { useState } from 'react'
import './Home.css'
import play from '../../../img/play.svg'

const Home = () => {

  const [name, setName] = useState('Andrii')
  const [shift, setShift] = useState('morning')

  const [leadEmail, setLeadEmail] = useState('')
  const [ticketStatus, setTicketStatus] = useState('resolved')
  const [leadQuestion, setLeadQuestion] = useState('')
  const [resolveQuestion, setResolveQuestion] = useState('')
  const [reasonHold, setReasonHold] = useState('')

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
        <div className='blockGreeting__ticketBlock'>
          <p className='blockGreeting__ticketBlock_title'>Chat Report</p>
          <div className='blockGreeting__ticketBlock_form'>
            <div className='blockGreeting__ticketBlock_form_firstLine'>
              <div className='blockGreeting__ticketBlock_form_firstLine_leadEmail'>
                <p className='blockGreeting__ticketBlock_form_firstLine_leadEmail_title'>Lead Email</p>
                <input 
                  className='blockGreeting__ticketBlock_form_firstLine_leadEmail_leadEmail'
                  type='text'
                  placeholder='company@gmail.com'
                  value={leadEmail}  
                  onChange={(e) => setLeadEmail(e.target.value)}
                ></input>
              </div>
              <div className='blockGreeting__ticketBlock_form_firstLine_ticketStatus'>
                <p className='blockGreeting__ticketBlock_form_firstLine_ticketStatus_title'>Status</p>
                <div className='blockGreeting__ticketBlock_form_firstLine_ticketStatus_buttonStatus'>
                  <button className={ticketStatus === 'resolved' ? 'blockGreeting__ticketBlock_form_firstLine_ticketStatus_buttonStatus_resolvedActive' : 'blockGreeting__ticketBlock_form_firstLine_ticketStatus_buttonStatus_resolvedInactive'} onClick={() => setTicketStatus('resolved')}>Resolved</button>
                  <button className={ticketStatus === 'hold' ? 'blockGreeting__ticketBlock_form_firstLine_ticketStatus_buttonStatus_holdActive' : 'blockGreeting__ticketBlock_form_firstLine_ticketStatus_buttonStatus_holdInactive'} onClick={() => setTicketStatus('hold')}>Hold</button>
                </div>
              </div>
            </div>

            <p className='blockGreeting__ticketBlock_titleSecondBlock'>What did the lead write / ask?</p>
            <textarea
              placeholder='Describe the inquiry or message from the lead...'
              value={leadQuestion}
              onChange={(e) => setLeadQuestion(e.target.value)}
            ></textarea>

            <p className='blockGreeting__ticketBlock_titleThirdBlock'>What was done / result</p>
            <textarea
              placeholder='Describe the action taken and the outcome'
              value={resolveQuestion}
              onChange={(e) => setResolveQuestion(e.target.value)}
            ></textarea>

            {ticketStatus === 'hold' ? (
              <>
                <p className='blockGreeting__ticketBlock_titleFourthBlock'>What needs to be done next? (Hold reason)</p>
                <textarea
                  placeholder="Explain why it's on hold and what the next steps are..."
                  value={reasonHold}
                  onChange={(e) => setReasonHold(e.target.value)}
                ></textarea>
              </>
            ) : null}

            <div className='blockGreeting__ticketBlock_button'>
              <button 
                className='blockGreeting__ticketBlock_button_clear'
                onClick={() => {
                  setLeadEmail('')
                  setTicketStatus('resolved')
                  setLeadQuestion('')
                  setResolveQuestion('')
                  setReasonHold('')
                }}
              >Clear</button>
              <button className='blockGreeting__ticketBlock_button_saveReport'>Save Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home