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

  const [userConfirmPassword, setUserConfirmPassword] = useState('')
  const [userConfirmPassError, setUserConfirmPassError] = useState('')

  const [visiblePass, setVisiblePass] = useState(false)
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false)

  const login = () => {
    userEmail === '' && setUserEmailError('Please enter email')
    userPassword === '' && setUserPasswordError('Please enter password')
  }

  const register = () => {
    userEmail === '' && setUserEmailError('Please enter email')
    userPassword === '' && setUserPasswordError('Please enter password')
    userConfirmPassword === '' && setUserConfirmPassError('Please enter password')

    if (
      userPassword !== '' &&
      userConfirmPassword !== '' &&
      userPassword !== userConfirmPassword
    ) {
      setUserConfirmPassError('Passwords do not match')
    }
  }

  return (
    <div className='authWrapper'>

      <div className='authWrapper__title'>
        <img src={logo} alt="logo" />
        <h1>SYNCA</h1>
      </div>

      {step === 'login' ? (
        <>
          <h1 className='authWrapper__loginTitle'>Sign in</h1>
          <p className='authWrapper__subTitle'>Enter your credentials to continue</p>

          {userEmailError === '' ? (
            <div className='authWrapper__emailBlockText'>Email</div>
          ) : (
            <div className='authWrapper__emailBlockTextEmptyError'>
              {userEmailError}
            </div>
          )}

          <div className={userEmailError === '' ? 'authWrapper__emailBlockInput' : 'authWrapper__emailBlockInputError'}>
            <img src={mail}/>
            <input
              className='authWrapper__emailBlockInput_inputEmail'
              placeholder='name@company.com'
              type='text'
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value)
                setUserEmailError('')
              }}
            />
          </div>

          {userPasswordError === '' ? (
            <div className='authWrapper__passBlockText'>Password</div>
          ) : (
            <div className='authWrapper__passBlockTextEmptyError'>
              {userPasswordError}
            </div>
          )}

          <div className={userPasswordError === '' ? 'authWrapper__passBlockInput' : 'authWrapper__passBlockInputError'}>
            <img src={lock}/>
            <input
              className='authWrapper__passBlockInput_inputPass'
              placeholder='Enter your password'
              type={!visiblePass ? 'password' : 'text'}
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value)
                setUserPasswordError('')
              }}
            />
            <img
              className='authWrapper__visiblePass'
              onClick={() => setVisiblePass(!visiblePass)}
              src={eye}
            />
          </div>

          <button className='authWrapper__signIn' onClick={login}>Sign in</button>

          <p className='authWrapper__border'></p>

          <p className='authWrapper__createAccount'>Don't have an account? <button onClick={() => {
              setStep('registration')
              setUserEmailError('')
              setUserPasswordError('')
            }}>
              Create one
            </button>
          </p>
        </>
      ) : step === 'registration' ? (
        <>
          <h1 className='authWrapper__loginTitle'>Create account</h1>
          <p className='authWrapper__subTitleReg'>Fill in the details to get started</p>

          {userEmailError === '' ? (
            <div className='authWrapper__emailBlockTextReg'>Email</div>
          ) : (
            <div className='authWrapper__emailBlockTextEmptyError'>
              {userEmailError}
            </div>
          )}

          <div className={userEmailError === '' ? 'authWrapper__emailBlockInput' : 'authWrapper__emailBlockInputError'}>
            <img src={mail}/>
            <input
              className='authWrapper__emailBlockInput_inputEmail'
              placeholder='name@company.com'
              type='text'
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value)
                setUserEmailError('')
              }}
            />
          </div>

          {userPasswordError === '' ? (
            <div className='authWrapper__passBlockTextReg'>Password</div>
          ) : (
            <div className='authWrapper__passBlockTextEmptyError'>
              {userPasswordError}
            </div>
          )}

          <div className={userPasswordError === '' ? 'authWrapper__passBlockInput' : 'authWrapper__passBlockInputError'}>
            <img src={lock} alt="password" />
            <input
              className='authWrapper__passBlockInput_inputPass'
              placeholder='Enter your password'
              type={!visiblePass ? 'password' : 'text'}
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value)
                setUserPasswordError('')
              }}
            />
            <img
              onClick={() => setVisiblePass(!visiblePass)}
              src={eye}
              className='authWrapper__visiblePass'
            />
          </div>

          {userConfirmPassError === '' ? (
            <div className='authWrapper__passConfirmBlockText'>Repeat password</div>
          ) : (
            <div className='authWrapper__passConfirmBlockTextEmptyError'>
              {userConfirmPassError}
            </div>
          )}

          <div className={userConfirmPassError === '' ? 'authWrapper__passConfirmBlockInput' : 'authWrapper__passConfirmBlockInputError'}>
            <img src={lock} alt="confirm password" />
            <input
              className='authWrapper__passConfirmBlockInput_inputPass'
              placeholder='Repeat password'
              type={!visibleConfirmPass ? 'password' : 'text'}
              value={userConfirmPassword}
              onChange={(e) => {
                setUserConfirmPassword(e.target.value)
                setUserConfirmPassError('')
              }}
            />
            <img 
              onClick={() => setVisibleConfirmPass(!visibleConfirmPass)} 
              src={eye}
              className='authWrapper__visiblePass'
              />
          </div>

          <button className='authWrapper__register' onClick={register}>Registration</button>

          <p className='authWrapper__border'></p>

          <p className='authWrapper__createAccount'>Already have an account? <button onClick={() => {
              setStep('login')
              setUserConfirmPassError('')
            }}>
              Sign in
            </button>
          </p>
        </>
      ) : null}

    </div>
  )
}

export default Auth