import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search'
import { theme } from '../../context/ThemeContext'
import {
  ArrowBackIos,
  ArrowLeft,
  ClearOutlined,
  EmailOutlined,
  KeyboardArrowDown,
  LocationOnOutlined,
  MyLocation,
  NotificationAdd,
  Notifications,
  NotificationsNone,
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
import { LocationIcon } from '../GetCategories/GetCategories'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowDown, ArrowDownIcon, Eye, EyeOff, PlusIcon } from 'lucide-react'
import OpenMeuFilter from '../OpenMeuFilter'
import OpenDesktopFilter from '../OpenDesktopFilter'

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
  width: '100%',
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

export default function MixingItemsMyads() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [location, setLocation] = useState('Pakistan')
  const navigate = useNavigate()
  const [isopen, setIsopen] = useState(false)
  const handleLocationClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLocationSelect = (location) => {
    setLocation(location)
    setIsDropdownOpen(false)
    console.log('location,', location)
  }
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        width: '100%',
        paddingBlock: '15px',
        height: 'auto',
        paddingInline: 'auto',
      }}
    >
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
              width: "100%",
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
          className="relative -left-20"
          item
          xs={12}
          sm={1}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Link to={'/get-cat'}>
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </Link>
        </Grid>
        <Grid item xs={12} sm={1}>
          <div className="relative -left-14">
            <div className="flex gap-5 justify-start items-center cursor-pointer">
              <img
               onClick={()=> navigate('/chate-page')}
                src="https://www.olx.com.pk/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg"
                alt=""
              />
              <NotificationsNone />
              <img
                className="rounded-full w-10"
                src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
                alt=""
              />
              <button onClick={() => setIsopen(!isopen)}>
                <KeyboardArrowDown className="-ml-5 cursor-pointer" />
              </button>
            </div>
            {isopen && (
              <div className="absolute -right-14 mt-3 w-72 bg-white shadow-lg rounded-lg overflow-y-scroll overflow-x-hidden max-h-[505px] z-50">
                <OpenDesktopFilter />
              </div>
            )}
          </div>
        </Grid>

        <Grid item xs={12} sm={1}>
          <div className="">
            <img
              className=""
              src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
              alt=""
            />
            <button onClick={()=> navigate('/post')} className="flex items-center ml-5 absolute bottom-7 font-bold text-teal-950">
              <PlusIcon size={20} className="" />
              Sell
            </button>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}
