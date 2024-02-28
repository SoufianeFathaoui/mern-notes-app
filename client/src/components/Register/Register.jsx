import { useState , useRef } from "react"
import {useAuth} from '../../Contexts/Auth';

const Register = () => {
  // const registerRef = useRef(null)


  // const handlesubmit = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData(registerRef.current)
  //   const data = Object.fromEntries(formData)
  //   console.log(formData)
  // }
  const {registerUser} = useAuth()
  const [email , setEmail] = useState(null)
  const [password , setPassword] = useState(null)

  const handlsubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    registerUser(userData)
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 text-black text-2xl'>
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="mb-4 text-center">Register</h1>
        <form onSubmit={handlsubmit} className="flex flex-col">
          <input onChange={e=>setEmail(e.target.value)}  type="email" name="email" placeholder="Enter your email" className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"/>
          <input onChange={e=>setPassword(e.target.value)}  type="password" name="password" placeholder="Enter your password" className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"/>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
