import React, { useState } from 'react'
import './Tickets.css'
import search from '../../../img/search.svg'
import { auth, db } from '../../../firebase'
import { doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore'

const Tickets = () => {

  const [typeTickets, setTypeTickets] = useState('my')
  const [selectType, setSelectType] = useState('hold')

  const [dropOpen, setDropOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState('All employees')

  return (
    <div className='ticketsWrapper'>
      <div className='blockTitle'>
        <h1>Tickets</h1>
      </div>

      <div className='contentBlock'>
        <div className='countBlock'>
          <div className='choiceTypeTickets'>
            <button className={typeTickets === 'my' ? 'choiceTypeTickets_myActive' : 'choiceTypeTickets_myInactive'} onClick={() => setTypeTickets('my')}>My tickets</button>
            <button className={typeTickets === 'all' ? 'choiceTypeTickets_allActive' : 'choiceTypeTickets_allInactive'} onClick={() => setTypeTickets('all')}>All tickets</button>
          </div>
        </div>
        <div className='gradationTickets'>
            <button className={selectType === 'hold' ? 'gradationTickets__holdActive' : 'gradationTickets__holdInactive'} onClick={() => setSelectType('hold')}>
              <p className='gradationTickets__holdActive_text'>On Hold</p>
              {typeTickets === 'my' ? <p className='gradationTickets__holdActive_count'>18</p> : <p className='gradationTickets__holdInactive_count'>15</p>}
            </button>

            <button className={selectType === 'resolved' ? 'gradationTickets__resolvedActive' : 'gradationTickets__resolvedInactive'} onClick={() => setSelectType('resolved')}>
              <p className='gradationTickets__resolvedActive_text'>Resolved</p>
              {typeTickets === 'my' ? <p className='gradationTickets__resolvedActive_count'>47</p> : <p className='gradationTickets__resolvedInactive_count'>125</p>}
            </button>

            <button className={selectType === 'total' ? 'gradationTickets__totalActive' : 'gradationTickets__totalInactive'} onClick={() => setSelectType('total')}>
              <p className='gradationTickets__totalActive_text'>Total</p>
              {typeTickets === 'my' ? <p className='gradationTickets__totalActive_count'>138</p> : <p className='gradationTickets__totalInactive_count'>1225</p>}
            </button>
        </div>

        <div className='searchCustomer'>
          <div className='searchCustomer__inputBlock'>
            <div className='searchCustomer__inputBlock_img'>
              <img src={search}/>
            </div>
            <input
              className='searchCustomer__inputBlock_input'
              placeholder='Search by lead email...'
            ></input>
          </div>
          
          {typeTickets === 'all' ? (
            <div className='searchCustomer'>

              <button
                className='searchCustomer__select'
                onClick={() => setDropOpen(!dropOpen)}
              >
                {selectedEmployee}
                <span className={dropOpen ? 'arrowActive' : 'arrow'}>⌄</span>
              </button>

              {dropOpen && (
                <div className='searchCustomer__dropBox'>
                  {['All employees', 'Andrii', 'John', 'Anna'].map((employee) => (
                    <button
                      key={employee}
                      onClick={() => {
                        setSelectedEmployee(employee)
                        setDropOpen(false)
                      }}
                    >
                      {employee}
                    </button>
                  ))}
                </div>
              )}

            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Tickets