import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import Register from '../components/Register/Register';
import Notes from '../components/Notes/Notes';
import {Routes,Route} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route element={<PrivateRoutes/>} >
            <Route path='/notes' element={<Notes/>} />
        </Route>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
