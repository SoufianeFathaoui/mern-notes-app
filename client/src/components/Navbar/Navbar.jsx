import {Link} from 'react-router-dom';
import {useAuth} from '../../Contexts/Auth';

const Navbar = () => {
  const {user , logoutUser} = useAuth()
  return (
    <div className='w-[100%] bg-[#18181B] py-[1.5rem]' >
      <ul className='flex justify-around w-[50%] mx-auto  text-white'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {user ? (
          <li>
          <Link to={'/notes'}>Notes</Link>
        </li>
        ):null}
          {!user ? (
            <li>
              <Link to={'/register'}>Register</Link>
            </li>
          ) :null }
          {!user ? (
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          ) : (<button onClick={logoutUser} >Logout</button>)}
      </ul>
    </div>
  );
}

export default Navbar;
