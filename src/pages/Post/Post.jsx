import React, { useEffect, useState } from 'react'
import PostHeader from './PostHeader'
import PostCenter from './PostCenter'
import PostMobile from './PostMobile'
import ForgetModal from '../../tools/ForgetModal'
import MixingItems from '../../tools/Mixingitems'
import { useNavigate } from 'react-router-dom'

export default function Post() {
  const [mobile, setMobile] = useState(window.innerWidth < 1024)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  console.log(user, '>user check')
  useEffect(() => {
    const handleSize = () => {
      setMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  })

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        try {
          const res = await fetch(
            'http://localhost:3000/users/login-phonetoken',
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          )

          if (res.ok) {
            const result = await res.json()
            console.log(result, 'Phone token valid')
            setUser(result)
            return
          } else {
            console.log('Phone token invalid')
          }
        } catch (e) {
          console.log('Phone token error:', e.message)
        }

        try {
          const res = await fetch('http://localhost:3000/users/user-data', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })

          if (res.ok) {
            const userData = await res.json()
            console.log(userData, 'Regular token valid')
            setUser(userData)
            return
          } else {
            console.log('Regular token invalid')
          }
        } catch (err) {
          console.log('Regular token error:', err.message)
        }
      }

      try {
        const res = await fetch('http://localhost:3000/auth/me', {
          credentials: 'include',
        })

        if (res.ok) {
          const data = await res.json()
          console.log(data, 'OAuth login valid')
          setUser(data)
          return
        } else {
          console.log('OAuth login invalid')
        }
      } catch (err) {
        console.log('OAuth error:', err.message)
      }

      setUser(null)
      navigate('/')
    }

    checkLogin()
  }, [setUser])

  return (
    <>
      {!user ? (
        navigate("/")
      ) : (
        <div>
          {mobile ? (
            <PostMobile />
          ) : (
            <div className="overflow-x-hidden">
              <div>
                <PostHeader />
              </div>
              <div>
                <PostCenter />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
