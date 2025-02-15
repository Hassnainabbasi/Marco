import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { theme } from '../../context/ThemeContext';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowBackIos, ArrowLeft, CheckBox, CheckBoxOutlineBlank, CheckBoxOutlined, ClearOutlined, EmailOutlined, MyLocation, PhoneOutlined, ReportOutlined } from '@mui/icons-material';
import { Autocomplete, Button, Modal, Popper, TextField } from '@mui/material';
import Login from '../../auth/Login';
import ForgetModal from '../ForgetModal';
import PasswordReset from '../CreateModal';
import PasswordCreate from '../CreateCorectModal';

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
    <path fill="#555" d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
);

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
    { label: "Azad Kashmir, Pakistan", icon: <LocationIcon /> },
    { label: "Balochistan, Pakistan", icon: <LocationIcon /> },
    { label: "Sindh, Pakistan", icon: <LocationIcon /> },
    { label: "Punjab, Pakistan", icon: <LocationIcon /> },
    { label: "Khyber Pakhtunkhwa, Pakistan", icon: <LocationIcon /> },
    { label: "Gilgit-Baltistan, Pakistan", icon: <LocationIcon /> },
  ];

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  height: '40px',
  width: '119%',
  [theme.breakpoints.down('sm')]: {
  width: '100%', 
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#143f32',
  color: theme.palette.common.white,
  paddingBlock: "13px",
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

const GradientBorderDiv = styled('div')(({ theme }) => ({
  padding: '5px',
  borderRadius: '25px',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  background: '#fff',
  width: '100%',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    margin: '-1px',
    borderRadius: 'inherit',
    background: 'linear-gradient(to right, #FFD54F, #00E676, #2979FF)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    position: 'relative',
    top: '-66px',
    padding : '10px'
  },
}));

const SellButton = styled('button')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: '20px',
  height: '40px',
  backgroundColor: 'white',
  color: '#000',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '100%',
  '& .icon': {
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
  },
}));

const SmallIcon = styled('svg')({
  width: '16px',
  height: '16px',
  marginLeft: 'auto',
});

export default function MixingItemsCat() {
  const [open, setOpen] = useState(false);
  const [forgett, setForgett] = useState(false);
  const [create, setCreate] = useState(false);
  const [createnew, setCreatenew] = useState(false);
  const [createcorrect, setCreatecorrect] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const newCreateOpen = () => setCreatecorrect(true);
  const newCreateClose = () => setCreatecorrect(false);
  
  
  const CorrectCreateOpen = () => setCreatecorrect(true);
  const CorrectCreateClose = () => setCreatecorrect(false);
  


  const CreateOpen = () => {
    forgetClose()
    setCreate(true)
  }
  const CreateClose = () => setCreate(false);

  const forgetOpen = () => {
    handleClose()
    setForgett(true)
  }
  const forgetClose = () => setForgett(false);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location , setLocation] = useState('Pakistan')
  const handleLocationClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const handleLocationSelect = (location) => {
    setLocation(location); // Update the selected location
    setIsDropdownOpen(false); // Close dropdown after selection
    console.log('location,',location)
  };
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      width: '100%',
      paddingBlock: '15px',
      height: 'auto', // Flexible height by default
      paddingInline: 'auto', // This will adapt to the container's width
      
      // For small screens (mobile)
      // [theme.breakpoints.down('sm')]: {
      //   height: '260px', // Adjust height for mobile
      //   paddingInline: '15px',  // Reduce padding for small screens
      // },
    
      // // For medium screens (tablet or small laptops)
      // [theme.breakpoints.down('lg')]: {
      //   paddingInline: '30px',  // Adjust padding for medium screens (tablets)
      // },
    
      // // For larger screens (desktop and above)
      // [theme.breakpoints.down('xl')]: {
      //   paddingInline: '30px',  // Increase padding for larger screens (laptops/desktops)
      // },
    
      // // For very large screens (xl and above)
      // [theme.breakpoints.up('xl')]: {
      //   paddingInline: '96px', // More padding for extra-large screens
      // },
    }}>
       
 <Modal open={open} onClose={handleClose}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
      maxWidth: 430,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
      borderRadius: 2,
      textAlign: "center",
    }}
  >
    <Button
      color="teal"
      onClick={handleClose}
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ClearOutlined className="text-teal-950" />
    </Button>
  <div className='flex justify-center'>
      <div className="bg-white p-8 rounded-sm w-full max-w-sm">
      <div className="flex justify-end">
        <button className="text-gray-500">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="text-center mb-6">
        <img
          alt="OLX logo"
          className="mx-auto mb-4"
          height={50}
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png"
          width={100}
        />
        <h2 className="text-xl font-semibold text-teal-950">
          Login into your OLX account
        </h2>
      </div>
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center border border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
          <img
            alt="Google logo"
            className="mr-2"
            height={20}
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            width={30}
          />
          Login with Google
        </button>
        <button className="w-full flex items-center justify-center border border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
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
        <button className="w-full flex items-center justify-center border border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
        <EmailOutlined className="mr-2 text-teal-950" /> Login with Email
        </button>
        <button className="w-full flex items-center justify-center border border-teal-950 rounded-sm py-2 text-teal-950 hover:bg-gray-100">
         <button className="w-full rounded-sm flex items-center justify-center">
          <PhoneOutlined className="text-teal-950 mr-2" /> Login with Phone
          </button>
        </button>
      </div>
      <div className="text-center mt-6">
        <a onClick={forgetOpen} className="text-teal-ring-teal-950 hover:underline" href="#">
          New to OLX? Create an account
        </a>
      </div>
    </div>
    </div>
  </Box>
</Modal> 

<Modal open={forgett} onClose={forgetClose}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
      maxWidth: 430,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
      borderRadius: 2,
      // textAlign: "",
    }}
  >
    <Button
      color="teal"
      onClick={forgetClose}
      sx={{
        position: "absolute",
        top: "8px",
        left: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ArrowBackIos className="text-teal-950" />
    </Button>
    <Button
      color="teal"
      onClick={forgetClose}
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ClearOutlined className="text-teal-950" />
    </Button>
    <div className='p-6 mt-5'>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Forgot password</h2>
    <p className="text-gray-600 mb-4">
      We’ll send a verification code to this email address if it matches an
      existing account
    </p>
    <label htmlFor="email" className=" flex text-gray-800 font-semibold mb-3">
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
    <button onClick={CreateOpen}
      className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded"
      disabled=""
    >
      Next
    </button>
    </div>
  </Box>
</Modal>

<Modal open={create} onClose={CreateClose}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
      maxWidth: 430,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
      borderRadius: 2,
      textAlign: "",
    }}
  >
    <Button
      color="teal"
      onClick={CreateClose}
      sx={{
        position: "absolute",
        top: "8px",
        left: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ArrowBackIos className="text-teal-950" />
    </Button>
    <Button
      color="teal"
      onClick={CreateClose}
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ClearOutlined className="text-teal-950" />
    </Button>
    <div className='p-6 mt-5'>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose a new password</h2>
    <p className="text-gray-600 mb-4">
     To Secure Your Account Your Log in fasterchoose a stronge password you have not used before
    </p>
    <label htmlFor="password" className=" flex text-gray-800 font-semibold mb-3">
      New Password
    </label>
    <input
      type="password"
      id="password"
      className="w-full border border-teal-950 p-2 rounded mb-3"
      placeholder="Enter password"
    />
    <label htmlFor="password" className=" flex text-gray-800 font-semibold mb-3">
     Confirm New Password
    </label>
    <input
      type="password"
      id="password"
      className="w-full border border-teal-950 p-2 rounded mb-3"
      placeholder="Confirm password"
    />
    <p className=" text-teal-950 text-sm mb-4">
      <ReportOutlined className=''/>
     This requires all devices to log in with the new password
    </p>
    <button
      className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded"
      disabled=""
    >
      Submit
    </button>
    </div>
  </Box>
</Modal>

<Modal open={createnew} onClose={newCreateClose}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
      maxWidth: 430,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
      borderRadius: 2,
      textAlign: "",
    }}
  >
    <Button
      color="teal"
      onClick={newCreateClose}
      sx={{
        position: "absolute",
        top: "8px",
        left: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ArrowBackIos className="text-teal-950" />
    </Button>
    <Button
      color="teal"
      onClick={newCreateClose}
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
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
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: "90%", sm: 400 }, // Mobile pe 90%, bigger screens pe 400px
      maxWidth: 430,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: { xs: 2, sm: 3 }, // Mobile pe thoda kam padding
      borderRadius: 2,
      textAlign: "",
    }}
  >
    <Button
      color="teal"
      onClick={CorrectCreateClose}
      sx={{
        position: "absolute",
        top: "8px",
        left: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
      }}
    >
      <ArrowBackIos className="text-teal-950" />
    </Button>
    <Button
      color="teal"
      onClick={CorrectCreateClose}
      sx={{
        position: "absolute",
        top: "8px",
        right: "8px",
        minWidth: "30px",
        padding: "5px",
        borderRadius: "50%",
        fontSize: "12px",
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
            name: "preventOverflow",
            options: {
              boundary: "window", 
            },
          },
          {
            name: "flip",
            options: {
              fallbackPlacements: ["bottom"],
            },
          },
        ],
      }}
      renderOption={(props, option, { index }) => 
        option.isHeader ? (
          <li 
            {...props} 
            style={{ fontWeight: "lighter", color: "#023F46", fontSize: 12 }}
          >
            {option.label}
          </li>
        ) : (
          <li 
            {...props} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              padding: index < 2 ? "20px": "13px",
              cursor: "pointer",
              borderBottom: index < 2 ? "1px solid #ccc" : "none",
              color: index === 0 ? "#4998EF" : "inherit"
            }}
          >
            {option.icon}
            {option.label}
          </li>
        )
      }
      sx={{
        width: 282,
        "& .MuiOutlinedInput-root": {
        },
      }}
      renderInput={(params) => 
      <TextField
        {...params}
        label="Pakistan" 
        InputLabelProps={{
          shrink : false,
        }}
        InputProps={{
          ...params.InputProps,
          style: {
            height: "50px", // Adjust the height of the input field
          paddingInline: "10px"
          },
        }}
      />}
    /> 
        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledInputBase placeholder="Find Cars, Mobile Phones and more..." inputProps={{ 'aria-label': 'search' }} />
        </Grid>

        <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "flex-end", position: "relative", left: "20px" }}>
       <div className='flex justify-between gap-2 px-5'>
       <input id="default-checkbox" type="checkbox" value="" className="w-5 h-6 mt-3 accent-teal-950  text-teal-950 rounded-sm focus:ring-teal-950 dark:focus:ring-teal-950 "/>
       <label className='flex items-center whitespace-nowrap text-sm text-teal-950'>Only Property for Rent</label>
       </div>
          <SearchButton onClick={CorrectCreateOpen}>
            <SearchIcon />
          </SearchButton>
        </Grid>
        <Grid item xs={12} sm={1}>
          <LoginButton onClick={handleOpen}>Login</LoginButton>
        </Grid>

        <Grid item xs={12} sm={1}>
          <GradientBorderDiv>
            <SellButton onClick={newCreateOpen}>
              <span className="icon">+</span>Sell
            </SellButton>
          </GradientBorderDiv>
        </Grid>
      </Grid>
    </Box>
  )
}