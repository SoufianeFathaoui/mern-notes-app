import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Navbar from '../src/components/Navbar/Navbar';
import Register from '../src/components/Register/Register';
import Notes from '../src/components/Notes/Notes';
import {Routes,Route} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import {useAuth} from './Contexts/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const {user} = useAuth()
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <Routes>
        <Route element={<PrivateRoutes/>} >
            <Route path='/notes' element={<Notes/>} />
        </Route>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={
          user ? <Home/>  : <Register/>
        }/>
        <Route path='/login' element={
          user ? <Home/> : <Login/>
        } />
    </Routes>
    </>
  );
}

export default App;
