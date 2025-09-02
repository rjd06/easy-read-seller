
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PublishBook from './pages/PublishBook';
import DeleteBook from './pages/DeleteBook';
import MyBooks from './pages/MyBooks';
import Orders from './pages/Orders';
import UpdateBook from './pages/UpdateBook';
import ViewBook from './pages/ViewBook';
import ViewOrder from './pages/ViewOrder';


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
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
            <Route path='publish_book' element={<PublishBook />} />
            <Route path='delete_book' element={<DeleteBook />} />
            <Route path='my_books' element={<MyBooks />} />
            <Route path='orders' element={<Orders />} />
            <Route path='update_book' element={<UpdateBook />} />
            <Route path='view_book' element={<ViewBook />} />
            <Route path='view_order' element={<ViewOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
