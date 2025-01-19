
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../context/ThemeContext';
import { MyLocation } from '@mui/icons-material';

const Location = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(3, 2),
  border: '1px solid #ccc',
  color: theme.palette.teal[700],
  cursor: 'pointer',
  borderRadius: theme.shape.borderRadius,
  height: '40px',
  width: '100%',
  position: 'relative', // Required for dropdown positioning
}));

const DropdownMenu = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '67px', // Distance from the Location component
  left: '16px',
  width: '95%', // Same width as Location
  maxHeight: '200px', // Set max height for scrollbar
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 10, // Ensure it stays above other elements
  padding: '10px',
  borderRadius: theme.shape.borderRadius,
  overflowY: 'auto', // Enable vertical scrollbar if items exceed maxHeight
  '& p': {
    margin: '5px 0',
    cursor: 'pointer',
    padding: '5px',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  border: '1px solid #ccc',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  height: '40px',
  width: '119%',
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

export default function MixingItems() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLocationClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      width: '100%',
      padding: '10px',
      height: 'auto', // Ensure the height is flexible by default
      [theme.breakpoints.down('sm')]: {
        height: '290px', // Adjust height for mobile
        padding: '5px', // Reduce padding for mobile
      }
    }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3} style={{ position: 'relative' }}>
        <Location onClick={handleLocationClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
  <Typography variant="body1" sx={{ ml: 1, color: 'black' }}>Pakistan</Typography>
  {!isMobile && (
    <SmallIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path d={isDropdownOpen
        ? "M85.4 746.67h60.32l366.34-366.34L878.4 746.67h60.33v-60.33L529.74 277.33h-35.3L85.4 686.33z" // Up arrow
        : "M85.4 277.33h60.32l366.34 366.34L878.4 277.33h60.33v60.33l-408.99 409h-35.3l-409.05-409z" // Down arrow
      }></path>
    </SmallIcon>
  )}
</Location>
{isDropdownOpen && (
  <DropdownMenu>
  {/* Use Current Location */}
  <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-4">
  <MyLocation />
    <span className="text-blue-600 font-medium">Use current location</span>
  </div>

  {/* See Ads in All Pakistan */}
  <div className="flex items-center mb-4 border-b gap-2 border-gray-200 pb-4">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <span className="text-teal-950">See ads in all Pakistan</span>
  </div>

  {/* Choose Region */}
  <div className="text-teal-950 font-medium mb-2">CHOOSE REGION</div>

  {/* Regions with Icons */}
  <div className="flex items-center mb-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <p className="text-teal-950">Azad Kashmir, Pakistan</p>
  </div>
  <div className="flex items-center mb-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <p className="text-teal-950">Balochistan, Pakistan</p>
  </div>
  <div className="flex items-center mb-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <p className="text-teal-950">Sindh, Pakistan</p>
  </div>
  <div className="flex items-center mb-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <p className="text-teal-950">Punjab, Pakistan</p>
  </div>
  <div className="flex items-center mb-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <p className="text-teal-950">Khyber Pakhtunkhwa, Pakistan</p>
  </div>
  <div className="flex items-center mb-2">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
    <p className="text-teal-950">Gilgit-Baltistan, Pakistan</p>
  </div>
</DropdownMenu>

)}

        </Grid>

        <Grid item xs={12} sm={6}>
          <StyledInputBase placeholder="Find Cars, Mobile Phones and more..." inputProps={{ 'aria-label': 'search' }} />
        </Grid>

        <Grid item xs={12} sm={1} sx={{ display: "flex", justifyContent: "flex-end", position: "relative", left: "20px" }}>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </Grid>
        <Grid item xs={12} sm={1}>
          <LoginButton>Login</LoginButton>
        </Grid>

        <Grid item xs={12} sm={1}>
          <GradientBorderDiv>
            <SellButton>
              <span className="icon">+</span>Sell
            </SellButton>
          </GradientBorderDiv>
        </Grid>
      </Grid>
    </Box>
  );
}
