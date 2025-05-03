import { useEffect, useState } from 'react'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { ClearOutlined, ReportOutlined } from '@mui/icons-material'

export default function PasswordCreate({ setPhone, setUser }) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [phoneNo, setPhoneNo] = useState('')
  const [loading, setLoading] = useState(true)

  const handleDataPass = async (e) => {
    e.preventDefault()
    console.log(phoneNo, confirmPassword)
    try {
      const res = await fetch('http://localhost:3000/users/login-phone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNo,
          password: confirmPassword,
        }),
      })
      let data = await res.json()
      if (res.ok) {
        alert('Login Successfull')
        localStorage.setItem('token', data.data.token)
        setPhone(false)
      }
    } catch (error) {
      console.log(error)
    }
    finally {
    setLoading(false)
  }

  }

  const getToken = async() => {
    const token = localStorage.getItem('token')
    console.log(token)
    try{
      const res = await fetch('http://localhost:3000/users/login-phonetoken', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Something went wrong!')
      }

      const result = await res.json()
      console.log(result,'this is result')
      setUser(result)
    }
    catch(e){
      console.log(e)
      setUser(null)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getToken()
    }
  }, [])

  if (loading) {
    return <p><LoaderCircle /></p>
  }


  return (
    <div className="max-w-md mx-auto mt-5 p-2 bg-white rounded-xl">
      <h2 className="text-2xl font-bold text-center  text-teal-950 mb-8">
        Login in with Phone
      </h2>

      <div className="mb-4 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone number
        </label>
        <div className="flex border border-red-500 rounded-sm">
          <div className="flex items-center px-1 py-3  bg-gray-100 border-r  border-gray-500">
            <img
              alt="Country flag"
              className="w-5 h-5 object-contain"
              height={20}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/800px-Flag_of_Pakistan.svg.png"
              width={20}
            />
            <span className="ml-1 mr-3 text-gray-700">+92</span>
          </div>
          <input
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
            className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="phone"
            placeholder="Phone number"
            type="text"
          />
        </div>
        <p className="text-red-500 text-xs mt-1">Phone number is required.</p>
      </div>

      <div className="mb-4 relative">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded border-teal-950 border focus:outline-none focus:ring-2 focus:ring-teal-950"
            placeholder="Enter Password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      <a className="text-blue-500 text-sm font-bold" href="#">
        Forgot your password?
      </a>
      <button
        onClick={handleDataPass}
        className="w-full py-2 mt-6 bg-blue-500 text-slate-400 rounded-sm disabled:bg-gray-200 mb-7"
      >
        Login
      </button>
      <div className="text-center">
        <a className="text-blue-500 text-sm" href="#">
          New to OLX? Create an account
        </a>
      </div>
    </div>
  )
}
