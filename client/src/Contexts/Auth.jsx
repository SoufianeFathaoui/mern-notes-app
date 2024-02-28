import {createContext , useState , useContext , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const navigate = useNavigate();
  const [user,setUser] = useState(null)

  const loginUser = (userForm) => {}

  const registerUser = async(userForm) => {
    const res = await fetch(`http://localhost:3000/api/v1/users/register/`,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userForm)
    })
    const data = await res.json()
    if(data.success){
      setUser(data.token)
      toast.success('User registred successfully')
      navigate('/')
    }
    if(!data.succes){
      toast.error(data.error)
      setUser(null)
    }
  }
  const logoutUser = () => {}
  const contextData = {
    user,
    loginUser,
    registerUser,
    logoutUser,
  }
  return(
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)