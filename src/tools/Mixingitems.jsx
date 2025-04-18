import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../context/ThemeContext';
import { ArrowBackIos, ArrowLeft, ClearOutlined, EmailOutlined, KeyboardArrowDown, LocationOnOutlined, MyLocation, PhoneOutlined, ReportOutlined } from '@mui/icons-material';
import { Autocomplete, Button, InputAdornment, Modal, Popper, TextField } from '@mui/material';
import Login from '../auth/Login';
import ForgetModal from './ForgetModal';
import PasswordReset from './CreateModal';
import PasswordCreate from './CreateCorectModal';
import { LocationIcon } from '../pages/GetCategories/GetCategories';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, PlusIcon } from 'lucide-react';
import HeaderMyads from '../pages/MyAds/HeaderMyads';


 const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 10,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  border: '1px solid #ccc',
  overflow: 'hidden',
  "& .MuiAutocomplete-listbox": {
    maxHeight: "300px",
    overflowY: "auto",
    border: "none",
  },
  "& .MuiAutocomplete-option": {
    padding: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));

 const locations = [
    { label: "Use current location", icon: <MyLocation /> },
    { label: "See ads in all Pakistan", icon: <LocationIcon /> },
    { label: "CHOOSE REGION", isHeader: true },
    { label: "Azad Kashmir, Pakistan", icon: <LocationIcon   /> },
    { label: "Balochistan, Pakistan", icon: <LocationIcon /> },
    { label: "Sindh, Pakistan", icon: <LocationIcon /> },
    { label: "Punjab, Pakistan", icon: <LocationIcon /> },
    { label: "Khyber Pakhtunkhwa, Pakistan", icon: <LocationIcon /> },
    { label: "Gilgit-Baltistan, Pakistan", icon: <LocationIcon /> },
  ];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing( 2),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  height: '46px !important',
  width: '119%',
  [theme.breakpoints.down('sm')]: {
  width: '100%', 
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#143f32',
  color: theme.palette.common.white,
  paddingBlock: "11px",
  paddingInline: "11px",
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
}));

const LoginButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  textDecoration: 'underline',
  textDecorationThickness: '2px',
  textUnderlineOffset: '4px',
  fontSize: 15,
  height: '40px',
  fontWeight: "bold",
  width: '100%',
  '&:hover': {
    textDecorationColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    top: '-66px',
  },
}));


export default function MixingItems() {
  const [open, setOpen] = useState(false);
  const [forgett, setForgett] = useState(false);
  const [create, setCreate] = useState(false);
  const [createnew, setCreatenew] = useState(false);
  const [createcorrect, setCreatecorrect] = useState(false);
  const [login, setLogin] = useState(false)
  const [newAccountModal, setNewAccountModal] = useState(false)
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [jEmailModal, setJEmailModal] = useState(false)
  const [apiemail, setapiEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [apipassword, setapiPassword] = useState('')
  const [user, setUser] = useState(null)

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


  const handleOpen = () => {
    setOpen(true);
    NewAccountClose()
  }

  const JoinEmailOpen = () =>{
    NewAccountClose(false)
    setJEmailModal(true)
  }

  const JoinEmailClose = () =>{
    setJEmailModal(false)
  }

    const handleClose = () => setOpen(false);
  
  const newCreateOpen = () => setCreatecorrect(true);
  const newCreateClose = () => setCreatecorrect(false);
  
  const PhoneOpen = () =>{
    handleClose()
    setPhone(true)
  }

 const PhoneClose = () => setPhone(false)

  const CorrectCreateOpen = () => setCreatecorrect(true);
  const CorrectCreateClose = () => setCreatecorrect(false);
  
  const NewAccountOpen = () => {
   handleClose()
    setNewAccountModal(true);
  }
  const NewAccountClose = () => setNewAccountModal(false)


  const CreateOpen = () => {
    forgetClose()
    setCreate(true)
  }
  const CreateClose = () => setCreate(false);

  const LoginOpen = () => {
    handleClose()
    setLogin(true)
  }

  const LoginClose = () => setLogin(false);
  
  const forgetOpen = () => {
    LoginClose()
    setForgett(true)
  }
  
  const forgetClose = () => setForgett(false);
  
  useEffect(() => {
    fetch('http://localhost:3000/auth/google/user', {
      method: 'GET',
      credentials: 'include', // 👈 VERY IMPORTANT
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.displayName) {
          setUser(data)
        }
      })
      .catch((err) => console.log('Not logged in'))
  }, [])

  const handleGoogleLogin = async () => {
    try {
      const res = await fetch('http://localhost:3000/auth/google/url', {
        method: 'GET',
        credentials: 'include', // If you want to send cookies
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url // Redirect to Google login
      }
    } catch (err) {
      console.error('Error fetching Google URL:', err)
    }
  }


  const handleLogout = () => {
    fetch('http://localhost:3000/users/logout', {
      method: 'GET',
      credentials: 'include',
    }).then(() => setUser(null))
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location , setLocation] = useState('Pakistan')
  const handleLocationClick = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  const handleLocationSelect = (location) => {
    setLocation(location); 
    setIsDropdownOpen(false); 
    console.log('location,',location)
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
   <>
   {login ? <HeaderMyads /> : (
     <Box
      sx={{
        width: '100%',
        paddingBlock: '15px',
        height: 'auto',
        paddingInline: 'auto',
      }}
    >
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
              <p className="flex text-red-500 text-sm mb-4">{emailError}</p>
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
              To Secure Your Account Your Log in fasterchoose a stronge password
              you have not used before
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
              This requires all devices to log in with the new password
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
                <button className="w-full flex items-center font-bold justify-center border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
                  <img
                    alt="Google logo"
                    className="mr-2"
                    height={20}
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    width={30}
                  />
                  Login with Google
                </button>
                <button className="w-full flex items-center justify-center font-bold border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
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
                  <EmailOutlined className="mr-2 text-teal-950" /> Login with
                  Email
                </button>
                <button className="w-full flex items-center justify-center font-bold border-2 border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
                  <button
                    onClick={PhoneOpen}
                    className="w-full rounded-sm flex items-center justify-center"
                  >
                    <PhoneOutlined className="text-teal-950 mr-2" /> Login with
                    Phone
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
                <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center font-bold border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
                  <img
                    alt="Google logo"
                    className="mr-2"
                    height={20}
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    width={30}
                  />
                  Join with Google
                </button>
                <button className="w-full flex font-bold items-center justify-center  border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
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
                  <EmailOutlined className="mr-2 text-teal-950" /> Join with
                  Email
                </button>
                <button className="w-full flex items-center justify-center  border-teal-950 border-2 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
                  <button className="w-full rounded-sm flex font-bold items-center justify-center">
                    <PhoneOutlined className="text-teal-950 mr-2" /> Join with
                    Phone
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
                  <span className="underline font-bold">Privacy Policy</span>
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
          <PasswordCreate />
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
              We’ll send a verification code to this email address if it matches
              an existing account
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
        open={login}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded border-teal-950 border focus:outline-none focus:ring-2 focus:ring-teal-950"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {confirmPassword && confirmPassword !== password && (
              <p className="text-teal-950 text-sm">Passwords do not match</p>
            )}
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
              onClick={CreateOpen}
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

      <Grid container spacing={2} alignItems="center" justifyContent="center">
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
                    borderBottom: index < 2 ? '1px solid #ccc' : 'none',
                    color: index === 0 ? '#4998EF' : 'inherit',
                  }}
                >
                  {option.icon}
                  {option.label}
                </li>
              )
            }
            popupIcon={
              <KeyboardArrowDown sx={{ color: '#014F43', fontSize: 35 }} />
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
                    <InputAdornment position="start" className="text-teal-950">
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
          <Link to={'/post'}>
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
  )
}