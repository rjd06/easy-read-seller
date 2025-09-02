
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';


function App() {
  const { token } = useSelector(state => state.seller);
  // console.log(token);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={token ? (<Dashboard />) : (<Login />)} />
          <Route path='/register' element={token ? (<Dashboard />) : (<Register />)} />
          <Route path='/dashboard' element={token ? (<Dashboard />) : (<Login />)}>
            <Route path='profile' element={<Profile/>} />
            <Route path='settings' element={} />
            <Route path='' element={} />
            <Route path='' element={} />
            <Route path='' element={} />
            <Route path='' element={} />
            <Route path='' element={} />
            <Route path='' element={} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
