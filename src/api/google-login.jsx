import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const GoogleLoginSuccess = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserAndToken = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/user', {
          withCredentials: true, // sends session cookie
        })

        localStorage.setItem('token', response.data.token)
        navigate('/')
      } catch (error) {
        console.error('Login failed', error)
      }
    }

    fetchUserAndToken()
  }, [navigate])

  return <div>Logging you in via Google...</div>
}

export default GoogleLoginSuccess
 