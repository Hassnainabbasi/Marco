import React, { useState } from 'react'
import PostHeader from './PostHeader'
import { Add, AddAPhoto, AddOutlined, CameraAlt, CameraAltOutlined, KeyboardArrowDown, MyLocation } from '@mui/icons-material'
import { SearchIcon } from 'lucide-react'
import { Autocomplete, Grid, InputAdornment, InputBase, Popper, styled, TextField } from '@mui/material';

const names = ["Corner Plot", "Park Facing","Corner Plot", "Park Facing","Corner Plot", "Park Facing","Corner Plot", "Park Facing"];

const LocationIcon = () => (
  <svg
    className="fill-teal-950"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 1024 1024"
  >
    <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z"></path>
  </svg>
)

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 10,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  border: '1px solid #ccc',
  overflow: 'hidden',
  "& .MuiAutocomplete-listbox": {
    maxHeight: "100%",
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

const type = [
  { label: "Popular Make", isHeader: true },
  { 
    label: "Suzuki ", 
    icon: () => <img src="https://images.olx.com.pk/static/logos/suzuki.png" alt="Suzuki Logo" width="20" height="20" /> 
  },
  { label: "Honda ",  icon: () => <img src="https://images.olx.com.pk/static/logos/honda.png" width="20" height="20" />  },
  { label: "Toyota ",  icon: () => <img src="https://images.olx.com.pk/static/logos/toyota.png" width="20" height="20" />  },
  { label: "Hyundai",  icon: () => <img src="https://images.olx.com.pk/static/logos/hyundai.png" alt="Suzuki Logo" width="20" height="20" />  },
];

const locations = [
  { label: "Use current location", icon: <MyLocation /> },
  { label: "CHOOSE REGION", isHeader: true },
  { label: "Azad Kashmir, Pakistan", icon: <LocationIcon /> },
  { label: "Balochistan, Pakistan", icon: <LocationIcon /> },
  { label: "Sindh, Pakistan", icon: <LocationIcon /> },
  { label: "Punjab, Pakistan", icon: <LocationIcon /> },
  { label: "Khyber Pakhtunkhwa, Pakistan", icon: <LocationIcon /> },
  { label: "Gilgit-Baltistan, Pakistan", icon: <LocationIcon /> },
];

const StyledCommentBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  border: '1px solid ',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  transition: 'border 0.3s ease-in-out',
  '&:focus-within': {
    border: '1px solid #14b8a6',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  borderRadius: "px",
  color: '#000000',
  height: '50px',
  [theme.breakpoints.down('sm')]: {
  width: '100%', 
  },
}));


const StyledDescriptionBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  border: '1px solid ',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  width: '100%',
  height: '145px',
  display: 'flex',
  alignItems: 'flex-start',
  transition: 'border 0.3s ease-in-out',
  overflow : "auto",
  '&:focus-within': {
    border: '1px solid #14b8a6',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))


export default function PostAd() {
   const [comment, setComment] = useState('')
    const [wordCount, setWordCount] = useState(0)
  
    const handleComment = (e) => {
      const words = e.target.value
      if (words.length <= 70) {
        setComment(words.length)
        setWordCount(words.length)
      }
    }

    const [descomment, dessetComment] = useState('')
    const [deswordCount, dessetWordCount] = useState(0)
  
    const deshandleComment = (e) => {
      const words = e.target.value
      if (words.length <= 4096) {
        dessetComment(words.length)
        dessetWordCount(words.length)
      }
    }
  return (
    <div>
     <div className='overflow-x-hidden'>
      <PostHeader />
     </div>
     <div className="bs-container">
        <h1 className="text-teal-950 text-xl text-center mt-5 font-bold">
          POST YOUR AD
        </h1>
      </div>
    <div className='flex bs-container gap-4'>
 <div className=' mx-auto container mt-5'>
 <div className='border rounded-md border-gray-400'>
   <div className='py-5 px-8 '>
      <div className='flex justify-between items-center'>
      <div className='flex justify-between gap-48 items-center'>
      <h1 className='text-teal-950 font-bold text-sm'>
        Category
       </h1>
       <div className='flex items-center gap-2'>
        <div>
          <img className='w-12 rounded-full' src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
        </div>
        <div>
          <h1 className='text-teal-950 font-bold text-sm'>Property for Sale</h1>
          <h1 className='text-teal-950 text-sm'>Land & Plots</h1>
        </div>
       </div>
      </div>
       
       <button className='text-blue-500 font-bold text-sm'>Change</button>
      </div>
     </div>
     <div className='mt-2 mb-5'>
      <hr className=' border-gray-400'/>
     </div>
     <div className='flex items-center justify-between mb-5'>
      <div className='px-8 flex items-start justify-between w-full'>
      <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Upload Images
       </h1>
    <div>
         <div className="w-full flex flex-col">
       <div className="grid grid-cols-7 gap-2 p-4">
        <div className="min-w-[70px] bg-blue-50 h-14 border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:border-blue-500">
          <Add className="text-blue-500" fontSize="large" />
        </div>

        {[...Array(13)].map((_, index) => (
          <div
            key={index}
            className="min-w-[70px] h-14 border border-gray-300 flex items-center justify-center rounded-lg cursor-pointer hover:border-blue-500"
          >
            <div>
              <div>
                <img className='w-6' src="https://www.olx.com.pk/assets/iconAddPhoto_noinline.8924e2486f689a28af51da37a7bda6ec.svg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='px-5'>
     <p className="text-xs text-teal-950 ">
        For the cover picture we recommend using the landscape mode.
      </p>
     </div>
    </div>
    </div>

      </div>
     </div>
     <div className='mt-8'>
      <hr className=' border-gray-400'/>
     </div>
     <div>
     <div className='postad-container'>
     <div className='items-center flex gap-60 justify-between'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
     Type*
       </h1>
       <div className="mt-6 w-full">
       <Autocomplete
      disablePortal={false}
      PopperComponent={StyledPopper}
      options={type}
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
              fallbackPlacements: [],
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
            {option.icon && <span style={{ width: "200px", height: "20px" }}>{option.icon}</span>}
            {option.label}
          </li>
        ) : (
          <li 
            {...props} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "14px",
              padding: index < 0 ? "20px": "13px",
              cursor: "pointer",
              color: index === 0 ? "#4998EF" : "inherit",
              paddingInline : "28px"
            }}
          >
                {option.icon && <span>{option.icon()}</span>}
            {option.label}
          </li>
        )
      }
      popupIcon={null}
      sx={{
        width: { xs: 180, sm: 175, md: 230, lg: 554 },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#fff", 
          },
          "&:hover fieldset": {
            borderColor: "#fff", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff !important",
          },
        },
      }}
      renderInput={(params) => 
      <TextField
        {...params}
        placeholder='Select Type'
        InputLabelProps={{
          shrink : false,
        }}
        InputProps={{
          ...params.InputProps,
          style: {
            height: "48px",
          paddingInline: "10px",
          border : "1px solid black "
          },
          startAdornment: (
            <InputAdornment position="start" className='text-teal-950' >
                  <SearchIcon  /> 
            </InputAdornment>
          ),
        }}
      />}
    /> 
                  </div>
    </div>
     </div>
        <div className='mt-8'>
      <hr className=' border-gray-400'/>
     </div>
     <div className='postad-container'>
     <div className='items-center flex gap-52 justify-between'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Add title*
       </h1>
       <div className="mt-6 w-full">
                    <Grid container spacing={2} alignItems="">
                      <Grid item xs={12} sm={12}>
                        <StyledCommentBase
                          onChange={handleComment}
                          placeholder="Enter title"
                          inputProps={{
                            'aria-label': 'search',
                            maxLength: 70,
                            style: { verticalAlign: 'top' },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <div className='flex justify-between'>
                    <p className="text-teal-950 text-xs mt-1">
                      Title should contain at least 5 alphanumeric characters. Please edit the field
                      </p>
                      <p className="text-teal-950 text-xs mt-1">{wordCount}/70</p>
                     
                    </div>
                  </div>
    </div>
     </div>
     <div className='postad-container'>
     <div className='items-center flex gap-48 justify-between'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
     Description*
       </h1>
       <div className="mt-6 w-full">
                    <Grid container spacing={2} alignItems="">
                      <Grid item xs={12} sm={12}>
                        <StyledDescriptionBase
                        
                          onChange={deshandleComment}
                          multiline={true}
                          placeholder="Describe the item you're selling"
                          inputProps={{
                            'aria-label': 'search',
                            maxLength: 4096,
                            style: { verticalAlign: 'top' },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <div className='flex justify-between'>
                    <p className="text-teal-950 text-xs mt-1">
                      Description should contain at least 10 alphanumeric characters. Please edit the field
                      </p>
                      <p className="text-teal-950 text-xs mt-1">{deswordCount}/4096</p>
                    </div>
                  </div>
    </div>
     </div>
     <div className='postad-container mb-5'>
     <div className='items-center flex gap-52 justify-between'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
     Location*
       </h1>
       <div className="mt-6 w-full">
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
              fallbackPlacements: [],
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
              color: index === 0 ? "#4998EF" : "inherit",
              paddingInline : "28px"
            }}
          >
            {option.label}
          </li>
        )
      }
      popupIcon={null}
      sx={{
        width: { xs: 180, sm: 175, md: 230, lg: 555 },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#fff", 
          },
          "&:hover fieldset": {
            borderColor: "#fff", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff !important",
          },
        },
      }}
      renderInput={(params) => 
      <TextField
        {...params}
        placeholder='Select Location'
        InputLabelProps={{
          shrink : false,
        }}
        InputProps={{
          ...params.InputProps,
          style: {
            height: "48px",
          paddingInline: "10px",
          border : "1px solid black"
          },
          startAdornment: (
            <InputAdornment position="start" className='text-teal-950' >
                  <SearchIcon  /> 
            </InputAdornment>
          ),
        }}
      />}
    /> 
                
                  </div>
    </div>
     </div>
     </div>
   </div>
   <div className='flex'>
     <div className='border container w-full mt-5 rounded-md border-gray-400'>
     <div className='postad-container'>
     <div className='items-center flex gap-40 justify-between'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Down Payment*
       </h1>
       <div className="flex border w-full rounded-md border-teal-950 h-12  mt-5 mb-5">
                    <div className="flex items-center px-1 h-5 self-center border-teal-950 border-r">
                      <span className="ml-1 mr-3 text-teal-950 text-xs">
                        Rs
                      </span>
                    </div>
                    <input
                      className="w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phone"
                      placeholder="Enter Down Payment"
                      type="text"
                    />
                  </div>
                   
                  </div>
     </div>
     </div>
     </div>
     <div className='flex'>
     <div className='border container w-full mt-5 rounded-md border-gray-400'>
     <div className='postad-container'>
     <div className='items-center flex gap-52 justify-between mb-5'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Names  *
       </h1>
       <div className="mt-6 w-full">
                    <Grid container spacing={2} alignItems="">
                      <Grid item xs={12} sm={12}>
                        <StyledCommentBase
                          onChange={handleComment}
                          placeholder="Enter title"
                          inputProps={{
                            'aria-label': 'search',
                            maxLength: 70,
                            style: { verticalAlign: 'top' },
                          }}
                        />
                      </Grid>
                    </Grid>
                  
                  </div>
                   
                  </div>
     </div>
     </div>
     </div>
 </div>
   
   <div className=' mx-auto container flex-1 w-full '>
  <div className='w-96 border mt-5 rounded-md border-gray-400'>
  <div className='px-6 mt-7'>
  <h1 className='text-teal-950 font-bold text-base whitespace-nowrap'>
        Need help getting startd?
       </h1>
       <h1 className='text-teal-950 mt-8 text-sm '>
       Review these resource to learn how to create a <br /> great ad and increase your selling chances
       </h1>
  </div>
  <div className='flex gap-3 px-2'>
        <h1 className='font-bold text-2xl'>.</h1>
        <h1 className='font-bold mt-3 underline text-gray-900 text-sm'>Tips for improving your ads and your chances of selling</h1>
      </div>
      <div className='flex gap-3 px-2'>
        <h1 className='font-bold text-2xl'>.</h1>
        <h1 className='font-bold mt-3 underline text-gray-900 text-sm'>All you need to know about Posting Ads</h1>
      </div>
      <div className='px-6 mt-5 mb-8'>
        <h1 className='text-teal-950 text-sm'>You can always come back to change your ad</h1>
      </div>
  </div>
   </div>
    </div>
    </div>
  )
}

