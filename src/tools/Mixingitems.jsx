import useMediaQuery from '@mui/material/useMediaQuery'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search'
import { theme } from '../context/ThemeContext'
import FacebookLogin from 'react-facebook-login'
import {
  ArrowBackIos,
  ArrowLeft,
  ClearOutlined,
  EmailOutlined,
  KeyboardArrowDown,
  LocationOnOutlined,
  MyLocation,
  PhoneOutlined,
  ReportOutlined,
} from '@mui/icons-material'
import {
  Autocomplete,
  Button,
  InputAdornment,
  Modal,
  Popper,
  TextField,
} from '@mui/material'
import Login from '../auth/Login'
import ForgetModal from './ForgetModal'
import PasswordReset from './CreateModal'
import PasswordCreate from './CreateCorectModal'
import { LocationIcon } from '../pages/GetCategories/GetCategories'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Eye, EyeOff, PlusIcon } from 'lucide-react'
import HeaderMyads from '../pages/MyAds/HeaderMyads'
import { UserContext } from '../useContext/Context'
import ForgetPasswordForm from './Forget_Password'
import { use } from 'react'

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 10,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  border: '1px solid #ccc',
  overflow: 'hidden',
  '& .MuiAutocomplete-listbox': {
    maxHeight: '300px',
    overflowY: 'auto',
    border: 'none',
  },
  '& .MuiAutocomplete-option': {
    padding: '10px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
}))

const locations = [
  { label: 'Use current location', icon: <MyLocation /> },
  { label: 'See ads in all Pakistan', icon: <LocationIcon /> },
  { label: 'CHOOSE REGION', isHeader: true },
  { label: 'Azad Kashmir, Pakistan', icon: <LocationIcon /> },
  { label: 'Balochistan, Pakistan', icon: <LocationIcon /> },
  { label: 'Sindh, Pakistan', icon: <LocationIcon /> },
  { label: 'Punjab, Pakistan', icon: <LocationIcon /> },
  { label: 'Khyber Pakhtunkhwa, Pakistan', icon: <LocationIcon /> },
  { label: 'Gilgit-Baltistan, Pakistan', icon: <LocationIcon /> },
]

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  height: '46px !important',
  width: '119%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const SearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#143f32',
  color: theme.palette.common.white,
  paddingBlock: '11px',
  paddingInline: '11px',
  borderRadius: '2px',
  width: 'auto',
  marginRight: '1',
  '&:hover': {
    backgroundColor: '#00362a',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    top: '-66px',
  },
}))

const LoginButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  textDecoration: 'underline',
  textDecorationThickness: '2px',
  textUnderlineOffset: '4px',
  fontSize: 15,
  height: '40px',
  fontWeight: 'bold',
  width: '100%',
  '&:hover': {
    textDecorationColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    top: '-66px',
  },
}))

export default function MixingItems() {
  const [open, setOpen] = useState(false)
  const [forgett, setForgett] = useState(false)
  const [create, setCreate] = useState(false)
  const [createnew, setCreatenew] = useState(false)
  const [createcorrect, setCreatecorrect] = useState(false)
  const [login, setLogin] = useState(false)
  const [llogin, setLlogin] = useState(false)
  const [newAccountModal, setNewAccountModal] = useState(false)
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [jEmailModal, setJEmailModal] = useState(false)
  const [apiemail, setapiEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [apipassword, setapiPassword] = useState('')
  const [user, setUser] = useState(null)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [joinPhone, setjoinPhone] = useState('')
  const [phoneAdd, setPhoneAdd] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [phoneStore, setPhoneStore] = useState('')
  const [phonecreate, setphonecreate] = useState('')
  const [otp, setOtp] = useState(null)
  const [otpValue, setOtpValue] = useState(['', '', '', ''])
  const [name, setName] = useState('')
  const [nameOpen, setNameOpen] = useState(false)
  const [uid, setUid] = useState('')
  const [phonepassword, setPhonePassword] = useState('')
  const [loginconfirmPassword, setLoginConfirmPassword] = useState('')
  const [loginshowConfirmPassword, setloginShowConfirmPassword] =
    useState(false)
  const [MobilephoneNo, setMobilePhoneNo] = useState('')
  const [resetOpen, setResetOpen] = useState(false)
  const [restEmail, setResetEmail] = useState('')
  const [restPassword, setResetPassword] = useState('')

  const resetOpenClose = () => {
    setResetOpen(false)
  }

  const handleResetOpen = () => {
    setPhone(false)
    setResetOpen(true)
  }

  const handleDataPass = async (e) => {
    e.preventDefault()

    let cleanedPhone = MobilephoneNo.replace(/^0/, '')
    let formattedPhone = `+92${cleanedPhone}`

    console.log(formattedPhone, loginconfirmPassword)
    try {
      const res = await fetch('http://localhost:3000/users/login-phone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNo: formattedPhone,
          password: loginconfirmPassword,
        }),
      })
      let data = await res.json()
      if (res.ok) {
        alert('Login Successfull')
        localStorage.setItem('token', data.data.token)
        setPhone(false)
        navigate('/')
        setTimeout(() => {
          window.location.reload()
        }, 100)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // const getToken = async () => {
  //   const token = localStorage.getItem('token')
  //   console.log(token)
  //   try {
  //     const res = await fetch('http://localhost:3000/users/login-phonetoken', {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     if (!res.ok) {
  //       const errorData = await res.json()
  //       throw new Error(errorData.message || 'Something went wrong!')
  //     }

  //     const result = await res.json()
  //     console.log(result, 'this is result')
  //     setUser(result)
  //   } catch (e) {
  //     console.log(e)
  //     setUser(null)
  //   }
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     getToken()
  //   }
  // }, [setUser])

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        // Step 1: Check phone login token
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

        // Step 2: Check regular JWT token
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

      // Step 3: OAuth login check (Google/Facebook)
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

      // Step 4: All failed
      setUser(null)
    }

    checkLogin()
  }, [setUser])

  const handleEmailSubmit = async () => {
    if (!emailInput) {
      setEmailError('Please enter your e-mail address.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/users/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput }),
      })

      const data = await res.json()

      if (data.exists) {
        setEmailError('Email already exists. Try logging in.')
      } else {
        setapiEmail(emailInput)
        setJEmailModal(false)
        setCreate(true)
      }
    } catch (error) {
      console.log('Error checking email:', error)
    }
  }

  const handlePhoneSubmit = async () => {
    if (!phoneAdd) {
      setPhoneError('Please enter your Phone Number')
      return
    }

    let cleanedPhone = phoneAdd.replace(/^0/, '')
    let formattedPhone = `+92${cleanedPhone}`

    console.log('Original:', phoneAdd)
    console.log('Formatted:', formattedPhone)

    try {
      const res = await fetch('http://localhost:3000/users/check-phone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNo: formattedPhone }),
      })

      const data = await res.json()
      console.log(data, '=>ok')
      if (data.exists) {
        setPhoneError('Phone Number already exists. Try logging in.')
      } else {
        setPhoneStore(formattedPhone)
        setjoinPhone(false)
        setphonecreate(true)
      }
    } catch (error) {
      console.log('Error checking phoneNumber:', error)
    }
  }

  const handlePasswordSubmit = async () => {
    if (!password || password !== confirmPassword) {
      alert('Passwords do not match or are empty.')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: apiemail, password }),
      })

      const data = await res.json()

      if (res.ok) {
        alert('Account created successfully!')
        setCreate(false)
      } else {
        alert(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.log('Error creating account:', error)
    }
  }

  const handleInputChange = (e, index) => {
    const newOtpValue = [...otpValue]
    newOtpValue[index] = e.target.value
    setOtpValue(newOtpValue)
  }

  const handleOtpSubmit = async () => {
    const otpString = otpValue.join('')
    console.log('OTP submitted:', otpString)

    if (otpString.length !== 4) {
      alert('Please enter a 4-digit OTP')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNo: phoneStore,
          password,
          otp: otpString,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        alert('OTP verified successfully!')
        const generateUid = `User-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
        setName(generateUid)
        setUid(generateUid)
        setOtp(false)
        setNameOpen(true)
      } else {
        alert(data.message || 'OTP verification failed')
      }
    } catch (error) {
      console.error('Error verifying OTP:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const handleDataShift = async () => {
    try {
      let respones = await fetch('http://localhost:3000/users/phoneuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNo: phoneStore, password, username: name }),
      })
      console.log({ phoneNo: phoneStore, password, username: name })
      const data = await respones.json()
      console.log(data)
      if (respones.ok) {
        alert('User Created Succesfully')
        setNameOpen(false)
      } else {
        console.log('Something Went Wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handlePhonePasswordSubmit = async () => {
    if (!password || password !== confirmPassword) {
      alert('Passwords do not match or are empty.')
      return
    }

    try {
      const response = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNo: phoneStore }),
      })
      console.log(phoneStore, 'this 92 wala')
      const data = await response.json()
      console.log(data, 'this is data ')

      console.log('OTP:', data.otp)
      if (response.ok) {
        setphonecreate(false)
        setOtp(true)
      } else {
        alert(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.log('Error creating account:', error)
    }
  }

  const handleSmsForward = async () => {
    try {
      const response = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNo: phoneStore }),
      })

      const data = await response.json()
      console.log(data, 'this is data ')

      console.log('OTP:', data.otp)
      if (response.ok) {
        setphonecreate(false)
        setOtp(true)
      } else {
        alert(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.log('Error creating account:', error)
    }
  }

  const handleSkip = async () => {
    try {
      let respones = await fetch('http://localhost:3000/users/skip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNo: phoneStore, password, username: uid }),
      })
      const data = await respones.json()
      console.log(data)
      if (respones.ok) {
        alert('User Created Succesfully')
        setNameOpen(false)
      } else {
        console.log('Something Went Wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const responseFacebook = (response) => {
    console.log(response)
  }

  const handleLoginEmail = async (e) => {
    e.preventDefault()
    console.log(loginEmail, loginPassword)
    try {
      const res = await fetch('http://localhost:3000/users/email-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      })
      const data = await res.json()
      console.log(data)
      if (res.ok) {
        alert('Account Login successfully!')
        setUser(data.data.user)
        console.log(data, '=>data sety')
        localStorage.setItem('token', data.data.token)
        setLogin(false)
      } else {
        alert(data.message || 'Something went wrong.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleOpen = () => {
    setOpen(true)
    NewAccountClose()
  }

  const handleJoinPhoneOpen = () => {
    setNewAccountModal(false)
    setjoinPhone(true)
  }

  const handleJoinPhoneClose = () => {
    setjoinPhone(false)
  }

  const JoinEmailOpen = () => {
    NewAccountClose(false)
    setJEmailModal(true)
  }

  const JoinEmailClose = () => {
    setJEmailModal(false)
  }

  const handlePhoneClose = () => {
    setphonecreate(false)
  }
  
  const handlePostLogin = (e) =>{
   if(!user){
    e.preventDefault()
    setOpen(true)
   }
  }

  const handleClose = () => setOpen(false)

  const newCreateOpen = () => setCreatecorrect(true)
  const newCreateClose = () => setCreatecorrect(false)

  const PhoneOpen = () => {
    handleClose()
    setPhone(true)
  }

  const PhoneClose = () => setPhone(false)

  const NameClose = () => setNameOpen(false)

  const CorrectCreateOpen = () => setCreatecorrect(true)
  const CorrectCreateClose = () => setCreatecorrect(false)

  const NewAccountOpen = () => {
    handleClose()
    setNewAccountModal(true)
  }
  const NewAccountClose = () => setNewAccountModal(false)

  const CreateOpen = () => {
    forgetClose()
    setCreate(true)
  }
  const CreateClose = () => setCreate(false)

  const LoginOpen = () => {
    handleClose()
    setLlogin(true)
  }

  const OtpClose = () => {
    setOtp(false)
  }

  const LoginClose = () => setLlogin(false)

  const forgetOpen = () => {
    LoginClose()
    setForgett(true)
  }

  const forgetClose = () => setForgett(false)

  // const getUserData = async () => {
  //   const token = localStorage.getItem('token')
  //   try {
  //     const res = await fetch('http://localhost:3000/users/user-data', {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     })

  //     if (!res.ok) {
  //       const errorData = await res.json()
  //       throw new Error(errorData.message || 'Something went wrong!')
  //     }

  //     const result = await res.json()
  //     // console.log(result)
  //     setUser(result)
  //   } catch (error) {
  //     // console.log(error)
  //     setUser(null)
  //   }
  // }

  const logout = async () => {
    try {
      await fetch('http://localhost:3000/auth/logout', {
        method: 'GET',
        credentials: 'include',
      })
      localStorage.removeItem('token')
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }


  // useEffect(() => {
  //   getUserData()
  // }, [])

  // useEffect(() => {
  //   fetch('http://localhost:3000/auth/me', {
  //     credentials: 'include',
  //   })
  //     .then((res) => (res.status === 401 ? null : res.json()))
  //     .then((data) => {
  //       if (data) setUser(data)
  //     })
  //     .catch((err) => console.log('Not logged in'))
  // }, [])

  // const handleFacebookAuth = async (type) => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/auth/facebook/${type}`, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: { 'Content-Type': 'application/json' },
  //     })

  //     const data = await res.json()
  //     if (data.url) {
  //       window.location.href = data.url
  //     }
  //   } catch (err) {
  //     console.error('Error starting Facebook OAuth', err)
  //   }
  // }

  const handleGoogleAuth = async (type) => {
    try {
      const res = await fetch(`http://localhost:3000/auth/google/${type}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error('Error starting Google OAuth', err)
    } 
  }

  const handleLogout = () => {
    fetch('http://localhost:3000/users/logout', {
      method: 'GET',
      credentials: 'include',
    }).then(() => setUser(null))
  }

  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3000/auth/me', {
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401) throw new Error('Not authenticated')
        return res.json()
      })
      .then((data) => setUser(data))
      .catch((e) => console.log(e, 'error'))
  }, [navigate])

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [location, setLocation] = useState('Pakistan')
  const handleLocationClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLocationSelect = (location) => {
    setLocation(location)
    setIsDropdownOpen(false)
    console.log('location,', location)
  }
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.get('error')) {
      alert('Login failed: User not found')
    }
  }, [searchParams])

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      <>
        {user ? (
          <HeaderMyads />
        ) : (
          <>
            {login ? (
              <HeaderMyads />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  paddingBlock: '15px',
                  height: 'auto',
                  paddingInline: 'auto',
                }}
              >
                <Modal
                  open={open}
                  onClose={handleClose}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                      textAlign: 'center',
                      overflowY: 'auto',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="flex justify-center">
                      <div className="bg-white rounded-sm w-full max-w-sm">
                        <div className="flex justify-end"></div>
                        <div className="text-center mb-6">
                          <img
                            alt="OLX logo"
                            className="mx-auto mb-4"
                            height={50}
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png"
                            width={70}
                          />
                          <h2 className="text-2xl whitespace-nowrap font-bold text-teal-950">
                            Login into your OLX account
                          </h2>
                        </div>
                        <div className="space-y-4">
                          <button
                            onClick={() => handleGoogleAuth('login')}
                            className="w-full flex items-center font-bold justify-center border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100"
                          >
                            <img
                              alt="Google logo"
                              className="mr-2"
                              height={20}
                              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                              width={30}
                            />
                            Login with Google
                          </button>
                          <button
                            onClick={() => handleFacebookAuth('login')}
                            className="w-full flex items-center justify-center font-bold border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100"
                          >
                            <img
                              alt="Facebook logo"
                              className="mr-2"
                              height={20}
                              src="https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png"
                              width={40}
                            />
                            Login with Facebook
                          </button>
                          <div className="text-center text-teal-950">OR</div>
                          <button
                            onClick={LoginOpen}
                            className="w-full font-bold flex items-center justify-center border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100"
                          >
                            <EmailOutlined className="mr-2 text-teal-950" />{' '}
                            Login with Email
                          </button>
                          <button className="w-full flex items-center justify-center font-bold border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
                            <button
                              onClick={PhoneOpen}
                              className="w-full rounded-sm flex items-center justify-center"
                            >
                              <PhoneOutlined className="text-teal-950 mr-2" />{' '}
                              Login with Phone
                            </button>
                          </button>
                        </div>
                        <div className="text-center mt-6">
                          <a
                            onClick={NewAccountOpen}
                            className="text-blue-600 hover:underline font-bold"
                            href="#"
                          >
                            New to OLX? Create an account
                          </a>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Modal>

                <Modal
                  open={jEmailModal}
                  onClose={JoinEmailClose}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      height: '370px',
                      overflowY: 'hidden',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={JoinEmailClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={LoginClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="mt-10">
                      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
                        Create account with Email
                      </h2>
                      <label
                        htmlFor="email"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        Enter your email address
                      </label>
                      <input
                        type="email"
                        value={emailInput}
                        onChange={(e) => {
                          setEmailInput(e.target.value)
                          setEmailError('')
                        }}
                        className={`w-full border ${emailError ? 'border-red-500' : 'border-gray-300'} p-3 rounded mb-3`}
                        placeholder="Email address"
                      />
                      {emailError && (
                        <p className="flex text-red-500 text-sm mb-4">
                          {emailError}
                        </p>
                      )}
                      <p className="flex text-red-500 text-sm mb-4">
                        Please enter your e-mail address.
                      </p>
                      <button
                        onClick={handleEmailSubmit}
                        className="w-full bg-gray-200 text-gray-500 font-semibold py-2 mb-5 rounded"
                        disabled=""
                      >
                        Next
                      </button>
                      <button
                        onClick={CreateOpen}
                        className="w-full text-blue-500 font-semibold py-2 rounded"
                        disabled=""
                      >
                        Already have an account? Log in
                      </button>
                    </div>
                  </Box>
                </Modal>

                <Modal open={joinPhone} onClose={handleJoinPhoneClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={CreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={handleJoinPhoneClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="max-w-md mx-auto mt-5 p-2 bg-white rounded-xl">
                      <h2 className="text-2xl font-bold text-center  text-teal-950 mb-8">
                        Create account with Phone
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
                            value={phoneAdd}
                            onChange={(e) => setPhoneAdd(e.target.value)}
                            className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            id="phone"
                            placeholder="Phone number"
                            type="text"
                          />
                        </div>
                        <p className="text-red-500 text-xs mt-1">
                          Phone number is required.
                        </p>
                      </div>
                      <button
                        onClick={handlePhoneSubmit}
                        className="w-full py-2 mt-3 text-slate-400 rounded-sm bg-gray-200 mb-7"
                      >
                        Next
                      </button>
                      <div className="text-center">
                        <a className="text-blue-500 font-bold" href="#">
                          Already have an account? Log in
                        </a>
                      </div>
                    </div>
                  </Box>
                </Modal>

                <Modal open={nameOpen} onClose={NameClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={CreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={NameClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="h-96 flex items-center justify-center px-4">
                      <div className="w-full max-w-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-center mb-4">
                          Almost there
                        </h2>

                        <p className="text-center text-gray-700 mb-2">
                          Your name is set to:{' '}
                          <span className="font-semibold">{name || uid}</span>
                        </p>

                        <p className="text-center text-gray-600 mb-6">
                          Add your real name to build credibility and connect
                          better with other people on OLX
                        </p>

                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full border border-gray-300 rounded-sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        />

                        <div className="flex gap-2 mt-3 justify-between">
                          <button
                            onClick={handleSkip}
                            className="w-full border-teal-950 border-2 text-teal-950 font-bold  py-2 rounded-sm hover:bg-gray-100"
                          >
                            Skip
                          </button>
                          <button
                            onClick={handleDataShift}
                            className={`w-full py-2 rounded-sm  ${
                              name
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-300 text-gray-100 font-bold cursor-not-allowed'
                            }`}
                            disabled={!name}
                          >
                            Finish
                          </button>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Modal>

                <Modal open={create} onClose={CreateClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={CreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={CreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="p-6 mt-5">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Choose a new password
                      </h2>
                      <p className="text-gray-600 mb-4">
                        To Secure Your Account Your Log in fasterchoose a
                        stronge password you have not used before
                      </p>
                      <label
                        htmlFor="password"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        New Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="w-full  border-teal-950 border-2 p-2 rounded mb-3"
                        placeholder="Enter password"
                      />
                      <label
                        htmlFor="password"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        Confirm New Password
                      </label>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="w-full border border-teal-950 p-2 rounded mb-3"
                        placeholder="Confirm password"
                      />
                      <p className=" text-teal-950 text-sm mb-4">
                        <ReportOutlined className="" />
                        This requires all devices to log in with the new
                        password
                      </p>
                      <button
                        onClick={handlePasswordSubmit}
                        className="w-full bg-teal-600 text-white font-semibold py-2 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </Box>
                </Modal>

                <Modal open={phonecreate} onClose={handlePhoneClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={handlePhoneClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={handlePhoneClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="p-6 mt-5">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Choose a new password
                      </h2>
                      <p className="text-gray-600 mb-4">
                        To Secure Your Account Your Log in fasterchoose a
                        stronge password you have not used before
                      </p>
                      <label
                        htmlFor="password"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        New Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="w-full  border-teal-950 border-2 p-2 rounded mb-3"
                        placeholder="Enter password"
                      />
                      <label
                        htmlFor="password"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        Confirm New Password
                      </label>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="w-full border border-teal-950 p-2 rounded mb-3"
                        placeholder="Confirm password"
                      />
                      <p className=" text-teal-950 text-sm mb-4">
                        <ReportOutlined className="" />
                        This requires all devices to log in with the new
                        password
                      </p>
                      <button
                        onClick={handlePhonePasswordSubmit}
                        className="w-full bg-teal-600 text-white font-semibold py-2 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </Box>
                </Modal>

                <Modal
                  open={otp}
                  onClose={OtpClose}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 410 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 },
                      borderRadius: 1,
                      height: '460px',
                      overflowY: 'hidden',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={OtpClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={OtpClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>

                    <div className="h-full flex items-center justify-center ">
                      <div className="bg-white rounded-lg p-2 w-full max-w-md text-center relative">
                        <h2 className="text-xl font-bold text-teal-950 mb-8">
                          Enter confirmation code
                        </h2>
                        <p className="text-teal-950 text-sm mb-4">
                          You will receive a 4-digit code through a call on{' '}
                          <br />
                          <span className="font-bold text-sm text-teal-950">
                            {phoneStore}
                          </span>
                        </p>

                        <div className="flex justify-center gap-4 mb-6">
                          {otpValue.map((value, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength="1"
                              value={value}
                              onChange={(e) => handleInputChange(e, index)}
                              className="w-full h-16 border border-black rounded text-center text-xl outline-none focus:border-teal-500"
                            />
                          ))}
                        </div>

                        <div className="mt-7">
                          <button className="text-blue-500 font-bold">
                            Resend Code by Call
                          </button>
                          <p className="text-teal-950 text-sm mt-8">
                            If you have not received the code by call, please
                            request
                          </p>
                          <button
                            onClick={handleSmsForward}
                            className="text-blue-500 font-bold"
                          >
                            Resend Code by SMS
                          </button>
                        </div>

                        <div className="mt-4">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOtpSubmit}
                            fullWidth
                          >
                            Submit OTP
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Modal>

                <Modal
                  open={resetOpen}
                  onClose={resetOpenClose}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      maxHeight: '90vh',
                      overflowY: 'auto',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={resetOpenClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={resetOpenClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <ForgetPasswordForm />
                  </Box>
                </Modal>

                <Modal
                  open={newAccountModal}
                  onClose={NewAccountClose}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                      textAlign: 'center',
                      overflow: 'auto',
                      height: '550px',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={NewAccountClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="flex justify-center">
                      <div className="bg-white rounded-sm w-full max-w-sm">
                        <div className="flex justify-end"></div>
                        <div className="text-center mb-6">
                          <img
                            alt="OLX logo"
                            className="mx-auto mb-4"
                            height={50}
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png"
                            width={70}
                          />
                          <h2 className="text-2xl whitespace-nowrap font-semibold text-teal-950">
                            Create a new OLX account
                          </h2>
                        </div>
                        <div className="space-y-4">
                          <button
                            onClick={() => handleGoogleAuth('join')}
                            className="w-full flex items-center justify-center font-bold border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100"
                          >
                            <img
                              alt="Google logo"
                              className="mr-2"
                              height={20}
                              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                              width={30}
                            />
                            Join with Google
                          </button>
                          <button
                            onClick={() => handleFacebookAuth('join')}
                            className="w-full flex font-bold items-center justify-center  border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100"
                          >
                            <img
                              alt="Facebook logo"
                              className="mr-2"
                              height={20}
                              src="https://www.wavetransit.com/wp-content/uploads/2021/08/Facebook-logo.png"
                              width={40}
                            />
                            Join with Facebook
                          </button>
                          <div className="text-center text-teal-950">OR</div>
                          <button
                            onClick={JoinEmailOpen}
                            className="w-full flex items-center justify-center font-bold border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100"
                          >
                            <EmailOutlined className="mr-2 text-teal-950" />{' '}
                            Join with Email
                          </button>
                          <button className="w-full flex items-center justify-center  border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
                            <button
                              onClick={handleJoinPhoneOpen}
                              className="w-full rounded-sm flex font-bold items-center justify-center"
                            >
                              <PhoneOutlined className="text-teal-950 mr-2" />{' '}
                              Join with Phone
                            </button>
                          </button>
                        </div>
                        <div className="text-center mt-6 mb-8">
                          <p className="whitespace-nowrap text-sm">
                            When creating a new account you agree to{' '}
                            <span className="underline font-bold">OLX's</span>
                          </p>
                          <a className="hover:underline text-sm" href="#">
                            <span className="underline font-bold">
                              Terms and conditions
                            </span>
                            and{' '}
                            <span className="underline font-bold">
                              Privacy Policy
                            </span>
                          </a>
                        </div>
                        <h1
                          onClick={handleOpen}
                          className="text-blue-500 cursor-pointer font-bold mb-3"
                        >
                          Already have an account? Login
                        </h1>
                      </div>
                    </div>
                  </Box>
                </Modal>

                <Modal
                  open={phone}
                  onClose={{ PhoneClose }}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={PhoneClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={PhoneClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
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
                            onChange={(e) => setMobilePhoneNo(e.target.value)}
                            value={MobilephoneNo}
                            className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            id="phone"
                            placeholder="Phone number"
                            type="text"
                          />
                        </div>
                        <p className="text-red-500 text-xs mt-1">
                          Phone number is required.
                        </p>
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
                            type={
                              loginshowConfirmPassword ? 'text' : 'password'
                            }
                            value={loginconfirmPassword}
                            onChange={(e) =>
                              setLoginConfirmPassword(e.target.value)
                            }
                            className="w-full px-4 py-3 rounded border-teal-950 border focus:outline-none focus:ring-2 focus:ring-teal-950"
                            placeholder="Enter Password"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center"
                            onClick={() =>
                              setloginShowConfirmPassword(
                                !loginshowConfirmPassword
                              )
                            }
                          >
                            {loginshowConfirmPassword ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </button>
                        </div>
                      </div>
                      <a
                        onClick={handleResetOpen}
                        resetOpen={resetOpen}
                        resetOpenClose={resetOpenClose}
                        className="text-blue-500 text-sm font-bold"
                        href="#"
                      >
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
                  </Box>
                </Modal>

                <Modal open={forgett} onClose={forgetClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 },
                      borderRadius: 2,
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={forgetClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={forgetClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="p-6 mt-5">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Forgot password
                      </h2>
                      <p className="text-gray-600 mb-4">
                        We’ll send a verification code to this email address if
                        it matches an existing account
                      </p>
                      <label
                        htmlFor="email"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        Enter your email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-red-500 p-2 rounded mb-3"
                        placeholder="Email address"
                      />
                      <p className="flex text-red-500 text-sm mb-4">
                        Please enter your e-mail address.
                      </p>
                      <button
                        onClick={CreateOpen}
                        className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded"
                        disabled=""
                      >
                        Next
                      </button>
                    </div>
                  </Box>
                </Modal>

                <Modal
                  open={llogin}
                  onClose={LoginClose}
                  BackdropProps={{
                    sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 },
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      height: '550px',
                      overflowY: 'scroll',
                      // textAlign: "",
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={LoginClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={LoginClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <div className="mt-5">
                      <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
                        Log in with Email
                      </h2>
                      <label
                        htmlFor="email"
                        className=" flex text-gray-800 font-semibold mb-3"
                      >
                        Enter your email address
                      </label>
                      <input
                        onChange={(e) => setResetEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="w-full border border-red-500 p-3 rounded mb-3"
                        placeholder="Email address"
                      />
                      <p className="flex text-red-500 text-sm mb-4">
                        Please enter your e-mail address.
                      </p>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="w-full px-4 py-3 rounded border-teal-950 border focus:outline-none focus:ring-2 focus:ring-teal-950"
                          placeholder="Confirm new password"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-3 flex items-center"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                      <p className="flex text-red-500 text-sm mb-4 mt-2">
                        Password is required
                      </p>
                      <p
                        onClick={forgetOpen}
                        className="flex cursor-pointer text-blue-600 font-bold text-sm mb-10 mt-2"
                      >
                        Forget Password?
                      </p>
                      <button
                        onClick={handleLoginEmail}
                        className="w-full bg-gray-200 text-gray-500 font-semibold py-2 mb-10 rounded"
                        disabled=""
                      >
                        Login
                      </button>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                          <hr className="w-1/4 border-gray-300" />
                          <span className="mx-2 text-gray-400">OR</span>
                          <hr className="w-1/4 border-gray-300" />
                        </div>
                        <p className="mb-4 text-sm text-gray-700">
                          Try a{' '}
                          <span className="font-semibold text-gray-900">
                            password-free login
                          </span>
                        </p>
                        <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-sm font-medium text-gray-900 border border-gray-400 rounded-md hover:bg-gray-100">
                          <i className="fas fa-link mr-2" />
                          Log in with a one-time link
                        </button>
                        <a
                          href="#"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          New to OLX? Create an account
                        </a>
                      </div>
                    </div>
                  </Box>
                </Modal>

                <Modal open={createnew} onClose={newCreateClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={newCreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={newCreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <PasswordReset />
                  </Box>
                </Modal>

                <Modal open={createcorrect} onClose={CorrectCreateClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: { xs: '90%', sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
                      maxWidth: 430,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
                      borderRadius: 2,
                      textAlign: '',
                    }}
                  >
                    <Button
                      color="teal"
                      onClick={CorrectCreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ArrowBackIos className="text-teal-950" />
                    </Button>
                    <Button
                      color="teal"
                      onClick={CorrectCreateClose}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        minWidth: '30px',
                        padding: '5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      <ClearOutlined className="text-teal-950" />
                    </Button>
                    <PasswordCreate />
                  </Box>
                </Modal>

                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12} sm={3} style={{ position: 'relative' }}>
                    <Autocomplete
                      disablePortal={false}
                      PopperComponent={StyledPopper}
                      options={locations}
                      getOptionLabel={(option) => option.label}
                      PopperProps={{
                        modifiers: [
                          {
                            name: 'preventOverflow',
                            options: {
                              boundary: 'window',
                            },
                          },
                          {
                            name: 'flip',
                            options: {
                              fallbackPlacements: ['bottom'],
                            },
                          },
                        ],
                      }}
                      renderOption={(props, option, { index }) =>
                        option.isHeader ? (
                          <li
                            {...props}
                            style={{
                              fontWeight: 'lighter',
                              color: '#023F46',
                              fontSize: 12,
                            }}
                          >
                            {option.label}
                          </li>
                        ) : (
                          <li
                            {...props}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: index < 2 ? '20px' : '13px',
                              cursor: 'pointer',
                              borderBottom:
                                index < 2 ? '1px solid #ccc' : 'none',
                              color: index === 0 ? '#4998EF' : 'inherit',
                            }}
                          >
                            {option.icon}
                            {option.label}
                          </li>
                        )
                      }
                      popupIcon={
                        <KeyboardArrowDown
                          sx={{ color: '#014F43', fontSize: 35 }}
                        />
                      }
                      sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {},
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Pakistan"
                          InputLabelProps={{
                            shrink: false,
                          }}
                          InputProps={{
                            ...params.InputProps,
                            style: {
                              height: '46px',
                              paddingInline: '10px',
                            },
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className="text-teal-950"
                              >
                                <LocationIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <StyledInputBase
                      placeholder="Find Cars, Mobile Phones and more..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={1}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      position: 'relative',
                      left: '20px',
                    }}
                  >
                    <Link to={'/get-cat'}>
                      <SearchButton>
                        <SearchIcon />
                      </SearchButton>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <div className="pl-5">
                      <LoginButton onClick={handleOpen}>Login</LoginButton>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={1}>
                    <Link to={'/post'} onClick={handlePostLogin}>
                      <div className="">
                        <img
                          className=""
                          src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
                          alt=""
                        />
                        <button className="flex items-center ml-5 absolute bottom-7 font-bold text-teal-950">
                          <PlusIcon size={20} className="" />
                          Sell
                        </button>
                      </div>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </>
        )}
      </>
    </UserContext.Provider>
  )
}
