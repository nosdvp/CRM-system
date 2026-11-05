import React, { useState } from 'react'
import './Auth.css'
import logo from '../../img/synca-icon.svg'
import mail from '../../img/mail.svg'
import lock from '../../img/lock.svg'
import eye from '../../img/eye.svg'

const Auth = () => {

  const [step, setStep] = useState('login')

  const [userEmail, setUserEmail] = useState('')
  const [userEmailError, setUserEmailError] = useState('')

  const [userPassword, setUserPassword] = useState('')
  const [userPasswordError, setUserPasswordError] = useState('')

  const [visiblePass, setVisiblePass] = useState(false)

  const login = () => {
    userEmail === '' && setUserEmailError('Please enter email')
    userPassword === '' && setUserPasswordError('Please enter password')
  }

  return (
    <div className='authWrapper'>
      <div className='authWrapper__title'>
        <img src={logo}/>
        <h1>SYNCA</h1>
      </div>
      {step === 'login' ? (
        <>
          <h1 className='authWrapper__loginTitle'>Sign in</h1>
          <p className='authWrapper__subTitle'>Enter your credentials to continue</p>

          {userEmailError === '' ? (
            <div className='authWrapper__emailBlockText'>Email</div>
          ) : userEmailError === 'Please enter email' ? (
            <div className='authWrapper__emailBlockTextEmptyError'>{userEmailError}</div>
          ) : null}
          <div className={userEmailError === '' ? 'authWrapper__emailBlockInput' : userEmailError === 'Please enter email' ? 'authWrapper__emailBlockInputError' : null}>
            <img src={mail}/>
            <input
              className='authWrapper__emailBlockInput_inputEmail'
              placeholder='name@company.com'
              type='text'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          
          {userPasswordError === '' ? (
            <div className='authWrapper__passBlockText'>Password</div>
          ) : userPasswordError === 'Please enter password' ? (
            <div className='authWrapper__passBlockTextEmptyError'>{userPasswordError}</div>
          ) : null}
          <div className={userPasswordError === '' ? 'authWrapper__passBlockInput' : userPasswordError === 'Please enter password' ? 'authWrapper__passBlockInputError' : null}>
            <img src={lock}/>
            <input
              className='authWrapper__passBlockInput_inputPass'
              placeholder='Enter your password'
              type={!visiblePass ? 'password' : 'text'}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <img onClick={() => setVisiblePass(true)} src={eye}/>
          </div>
          <button 
            className='authWrapper__signIn'
            onClick={() => login()}  
          >Sign in</button>
          <p className='authWrapper__border'></p>

          <p className='authWrapper__createAccount'>Don't have an account? <button onClick={() => setStep('registration')}>Create one</button></p>
        </>
      ) : step === 'registration' ? (
        <>
          
        </>
      ) : null}
    </div>
  )
}

export default Auth