import {createContext , useState , useContext , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user,setUser] = useState(localStorage.getItem("Token") || null)
  useEffect(() => {
    const token = localStorage.getItem("Token")
    console.log(token)
    if(token){
      setUser(token)
    }
  },[])
  const navigate = useNavigate();
  const loginUser = async (userForm) => {
    const res = await fetch(`http://localhost:3000/api/v1/users/login/`,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userForm)
    })
    const data = await res.json()
    if(data.success){
      setUser(data.token)
      localStorage.setItem("Token",data.token)
      toast.success('User logged in successfully')
      navigate("/notes")
    }
    if(!data.succes){
      toast.error(data.error)
    }
  }
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
      console.log(data.token)
      toast.success('User registred successfully')
      navigate('/login')
    }
    if(!data.succes){
      toast.error(data.error)
    }
  }
  const logoutUser = () => {
    setUser(null)
    localStorage.removeItem("Token")
    toast.success("Logged out seccessfully")
  }
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