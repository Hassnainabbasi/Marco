import { ArrowBackOutlined, MyLocation } from '@mui/icons-material'
import { Autocomplete, Grid, InputAdornment, InputBase, Popper, styled, TextField } from '@mui/material';
import { SearchIcon } from 'lucide-react';
import React, { useRef, useState } from 'react'

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


export default function PostAdMobile() {
    const fileInputRef = useRef(null);
     const [isOn, setIsOn] = useState(false);
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
    const handleClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const files = event.target.files;
      console.log("Selected files:", files);
    }; 
  return (
    <div>
   <div>
     <div className='py-3 bg-gray-50'>
         <div className="flex items-center gap-4 px-4">
         <ArrowBackOutlined style={{fontSize : "32px", fontWeight : "lighter"}}
      className="cursor-pointer text-teal-950 "
    />
            <h1 className="text-xl font-bold text-teal-950">
             Post your ad
            </h1>
          </div>
     </div>
   </div>
   <div className='border-t border-x border-b-white rounded-t-lg p-4 border-gray-400'>
    <div className="mt-2">
    <h1 className='font-bold text-teal-950 text-sm mb-3'>Category</h1>
    <div className='flex justify-between'>
    <div className='flex gap-3 items-center '>
     <div>
        <img className='w-12' src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
     </div>
     <div>
        <h1 className='font-bold text-sm text-teal-950'>Mobiles</h1>
        <p className='text-xs mt-1 text-teal-950'>Accessories / Converters</p>
     </div>
    </div>
    <div>
     <h1 className='text-blue-500 font-semibold text-sm'>Change</h1>
    </div>
    </div>
    </div>
    <div className="border rounded-md mt-5 border-gray-300 py-5">
      <div className="flex justify-center mb-4">
      <div>
        <svg width="108" height="49" viewBox="0 0 108 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 43.03h32.78V5.83H0v37.2z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 36.12h27.18V8.89H2.8v27.23z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.45 21.17l9.94-9.95 9.94 9.95H6.45z" fill="#23262A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.95 10.77L6 20.73l.44 1.07h19.88l.44-1.07-9.94-9.96h-.88zm8.86 9.77H7.97l8.42-8.44 8.42 8.44z" fill="#23262A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.45 33.8h19.88V21.72H6.45V33.8z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.79 27.01a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0zM21.87 27.01a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.55 33.8h4.24V27h-4.24v6.78z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.57 19.99h2.34v-5.86H8.57V20z" fill="#23262A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 19.99l.62.63h2.34l.62-.63v-5.86l-.62-.63H8.57l-.62.63V20zm2.33-.63H9.2v-4.6h1.08v4.6z" fill="#23262A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M81.73 39.02h25.71V9.84h-25.7v29.18z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M84.53 32.61h20.02V12.56H84.53v20.05z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.73 48.85h43.05V0H35.73v48.85z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.54 40.44h37.4V2.96h-37.4v37.48z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.2 19.68h1.63v-1.63h-1.63v1.63z" fill="#23262A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.2 19.68h1.63v-1.63h-1.63v1.63z" stroke="#23262A" stroke-width="3.71"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M86.9 29.45h15.37v-8.7H86.9v8.7z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M86.24 29.45l.66.66h15.37l.66-.66v-8.7l-.66-.66H86.9l-.66.66v8.7zm15.38-8.04v7.39H87.56v-7.4h14.06z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M94.59 29.22a4.12 4.12 0 1 1 .01-8.24 4.12 4.12 0 0 1-.01 8.24z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M94.59 20.1a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.77a3.23 3.23 0 1 1-.02 6.47 3.23 3.23 0 0 1 .02-6.47z" fill="#E7F1FD"></path><path d="M99.88 21.5v-.74h2.39v.74h-2.39zM99.88 22.64v-.74h2.39v.74h-2.39z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M88.8 21.7a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0zM47.02 19.63a6.84 6.84 0 1 0 .02 13.67 6.84 6.84 0 0 0-.02-13.67zm0 4.22a2.62 2.62 0 1 1 0 5.24 2.62 2.62 0 0 1 0-5.24zM67.46 19.63a6.84 6.84 0 1 0 .01 13.67 6.84 6.84 0 0 0-.01-13.67zm0 4.22a2.62 2.62 0 1 1-.01 5.24 2.62 2.62 0 0 1 0-5.24z" fill="#23262A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M63.07 17.14h-1.44l-5.1 8.87.71 1.25h10.22l.72-1.25-5.11-8.87zm2.95 8.46h-7.34l3.67-6.38 3.67 6.38z" fill="#85B5F5"></path><path d="M47.74 26.84l-1.43-.83 4.88-8.45.71-.42h10.68v1.67h-10.2l-4.64 8.03z" fill="#85B5F5"></path><path d="M58.68 27.16l-1.4.89-7.41-11.74 1.4-.89 7.41 11.74z" fill="#85B5F5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.9 28.83h3.74v-1.57H55.9v1.57z" fill="#E7F1FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.07 16.05a1.4 1.4 0 1 1 2.3-1.6 1.4 1.4 0 1 1-2.3 1.6z" fill="#23262A"></path><path d="M59.8 16.7v-1.66h5.1v1.66h-5.1z" fill="#23262A"></path></svg>
      </div>
      </div>
     <div className='text-center'>
     <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />

      <button
        onClick={handleClick}
        className="border-4 border-teal-950 text-teal-950 font-semibold p-2  rounded-md hover:bg-teal-100 hover:text-teal-950 transition"
      >
        Add images
      </button>
     </div>
      <p className=" mt-3 text-teal-950 text-[12.5px] mb-3">
        For the cover picture we recommend using the landscape mode.
      </p>
    </div>
   <div className='mt-6'>
    <hr className='border-slate-400'/>
   </div>
   <div className='mt-6'>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm mb-1'>Brand*</h1>
     <div className="mt w-full">
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
            width: "100%",
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
              border : "1.4px solid black"
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
   <div className='mt-8'>
    <hr className='border-slate-400'/>
   </div>
   <div className='mt-5'>
     <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
            Add title*
           </h1>
           <div className="mt-1 w-full">
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
   <div className='mt-8'>
    <hr className='border-slate-400'/>
   </div>
   <div>
     <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm mt-6'>
         Description*
           </h1>
           <div className="mt-1 w-full">
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
   <div className='mt-8'>
    <hr className='border-slate-400'/>
   </div>
   <div className='mt-6'>
      <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
         Location*
           </h1>
           <div className="mt-1 w-full">
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
            width: "100%",
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
   <div className='mt-8 mb-6'>
    <hr className='border-slate-400'/>
   </div>
   <div>
   <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Price*
       </h1>
       <div className="flex border w-full rounded-sm border-teal-950 h-12  mt-1 mb-5">
                    <div className="flex items-center px-1 h-5 self-center border-teal-950 border-r">
                      <span className="ml-1 mr-3 text-teal-950 text-xs">
                        Rs
                      </span>
                    </div>
                    <input
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phone"
                      placeholder="Enter Down Payment"
                      type="text"
                    />
                  </div>
   </div>
   <div className='mt-8 mb-6'>
    <hr className='border-slate-400'/>
   </div>
    <div>
    <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
           Names  *
          </h1>
          <div className="mt-1 w-full">
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
   <div className='mt-6'>
   <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Mobile Phone Number
       </h1>
       <div className="flex border w-full rounded-sm border-teal-950 h-12  mt-1  mb-5">
                    <div className="flex items-center px-1 h-5 self-center border-teal-950 border-r">
                      <span className="ml-1 mr-3 text-teal-950 text-xs">
                        +92
                      </span>
                    </div>
                    <input
                      className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phone"
                      placeholder="Enter Phone Number"
                      type="text"
                    />
                  </div>
   </div>
   <div className='flex justify-between mt-3'>
     <h1 className='text-teal-950 font-bold whitespace-nowrap text-sm'>
        Show My Phone Number Ads
       </h1>
       <div
      className={`w-12 h-6 flex items-center px-1 rounded-full cursor-pointer transition-all duration-300 ${
        isOn ? "bg-teal-950" : "bg-[#2A5D67]"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-4 h-4 flex items-center justify-center bg-white rounded-full shadow-md transform transition-all duration-300 ${
          isOn ? "translate-x-6 bg-teal-950" : "translate-x-0 bg-white"
        }`}
      >
        <div
          className={`w-3 h-3 bg-teal-950 rounded-full shadow-md transition-all duration-300`}
        ></div>
      </div>
    </div>
   </div>
   <div className='mt-6 mb-4'>
    <hr className='border-slate-400'/>
   </div>
   <div className='mb-5 flex justify-end'>
      <button className='text-white p-3 rounded-md font-bold bg-teal-950'>Post Now</button>
     </div>
   </div>
    </div>
  )
}
