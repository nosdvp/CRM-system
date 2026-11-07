import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import DashBoard from './components/DashBoard/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
