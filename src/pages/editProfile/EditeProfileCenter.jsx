import { Grid, IconButton, InputBase, styled } from '@mui/material'
import { SearchIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BasicSelect from '../../mui_component/Dropdown'
import MonthDropdown from '../../mui_component/MonthDropdown'
import YearDropdown from '../../mui_component/YearDropdown'
import MaleDropdown from '../../mui_component/MaleDropdown'
import Footer from '../../components/footer/Footer'
import FooterTwo from '../../components/footer/FooterTwo'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid ',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  width: '206%',
  height: '48px !important',
  textIndent: 0,
  textAlign: 'left',
  transition: 'border 0.3s ease-in-out',
  '&:focus-within': {
    border: '1px solid #14b8a6',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const StyledCommentBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingRight: '30px',
  border: '1px solid ',
  borderRadius: theme.shape.borderRadius,
  color: '#000000',
  width: '206%',
  height: '145px',
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

export default function EditeProfileCenter() {
  const [showTick, setShowTick] = useState(false)
  const [showCommentTick, setShowCommentTick] = useState(false)
  const [comment, setComment] = useState('')
  const [wordCount, setWordCount] = useState(0)

  const handleComment = (e) => {
    const words = e.target.value
    if (words.length <= 200) {
      setComment(words.length)
      setWordCount(words.length)
    }
  }

  const handleFocus = () => {
    setShowTick(true)
  }
  const handleBlur = (e) => {
    setTimeout(() => {
      if (!e.relatedTarget?.classList.contains('tick-icon')) {
        setShowTick(false)
      }
    }, 200)
  }

  const CommentFocus = () => {
    setShowCommentTick(true)
  }
  const CommentBlur = (e) => {
    setTimeout(() => {
      if (!e.relatedTarget?.classList.contains('tick-icon')) {
        setShowCommentTick(false)
      }
    }, 200)
  }

  useEffect(() => {
    console.log('Updated Word Count:', wordCount)
  }, [wordCount])

  return (
    <div>
      <div className="edite-container border border-gray-300 rounded-md mt-14">
        <div className="p-2 mt-3">
          <h1 className="text-teal-950 text-lg font-bold mb-4">Edit Profile</h1>
          <hr className="border-gray-500" />
          <h1 className="text-teal-950 font-bold text-base mt-5">
            Profile Photo
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <img
              className="w-24"
              src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
              alt=""
            />
          </div>
          <div className="">
            <button className="bg-teal-950 rounded-md font-bold mb-3 text-white px-5 py-3">
              Upload Photo
            </button>
            <div className="flex items-center gap-2">
              <h1>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="#002F34"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 .33A6.67 6.67 0 0 1 13.67 7 6.67 6.67 0 0 1 7 13.67 6.67 6.67 0 0 1 .33 7 6.67 6.67 0 0 1 7 .33zm0 1.34A5.34 5.34 0 0 0 1.67 7 5.34 5.34 0 0 0 7 12.33 5.34 5.34 0 0 0 12.33 7 5.34 5.34 0 0 0 7 1.67zm0 4l.67.66v3.34l-.67.66-.67-.66V6.33L7 5.67zm0-2A.67.67 0 1 1 7 5a.67.67 0 0 1 0-1.33z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </h1>
              <h1 className="text-xs">
                JPG, JPEG, PNG Min: 400px, Max: 1024px
              </h1>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-5 border-gray-500" />
        <div className="">
          <div className="flex">
            <div className="p-3 w-1/2">
              <h1 className="font-bold text-teal-950 mb-2">Name</h1>
              <div className="w-full flex-grow">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <StyledInputBase
                      value={'Hassnain'}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Find Cars, Mobile Phones and more..."
                      inputProps={{ 'aria-l abel': 'search' }}
                    />
                  </Grid>
                  {showTick && (
                    <Grid
                      item
                      xs={12}
                      sm={1}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'relative',
                        bottom: 6,
                        right : -190
                      }}
                    >
                      <div className="border border-teal-400 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 1024 1024"
                          fill="#14b8a6"
                        >
                          <path d="M878.34 192l-537 547.68L145.65 540.1H85.33v61.55L311.17 832h60.35l567.15-578.47V192z"></path>
                        </svg>
                      </div>
                    </Grid>
                  )}
                </Grid>
              </div>
              <div className="mt-5">
                <h1 className="text-teal-950 font-bold text-base mb-2">
                  Date of birth
                </h1>
                <div className="flex max-w-[470px] gap-3">
                  <BasicSelect />
                  <MonthDropdown />
                  <YearDropdown />
                </div>
                <div className="mt-5">
                  <h1 className="text-teal-950 font-bold text-base mb-2">
                    Gender
                  </h1>
                  <MaleDropdown />
                </div>
              </div>
              <div className="mt-6">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <StyledCommentBase
                      onChange={handleComment}
                      multiline={true}
                      onFocus={CommentFocus}
                      onBlur={CommentBlur}
                      placeholder="About me (optional)"
                      inputProps={{
                        'aria-label': 'search',
                        maxLength: 200,
                        style: { verticalAlign: 'top' },
                      }}
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
                      bottom: 52,
                      right : -190
                    }}
                  >
                    {showCommentTick && (
                      <Grid
                        item
                        xs={12}
                        sm={1}
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          position: 'relative',
                          bottom: 6,
                        }}
                      >
                        <div className="border border-teal-400 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 1024 1024"
                            fill="#14b8a6"
                          >
                            <path d="M878.34 192l-537 547.68L145.65 540.1H85.33v61.55L311.17 832h60.35l567.15-578.47V192z"></path>
                          </svg>
                        </div>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                <div>
                  <p className="text-teal-950 text-xs mt-1">{wordCount}/200</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-10 border text-teal-950 p-4">
                <h1 className="font-bold text-teal-950 text-sm flex items-center gap-1">
                  <span>
                    <svg
                      fill="#042F2E"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill-rule="evenodd"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M318 279.3h-54.8l-61.5-61.5v-54.9h54.8l61.6 61.5v54.9zm194-38.8l-38.8-38.8V124L512 85.3l38.8 38.8v77.6L512 240.5zm426.7 232.7L899.9 512h-77.6l-38.8-38.8 38.8-38.8H900l38.8 38.8zm-737-38.8l38.8 38.8-38.8 38.8H124l-38.8-38.8 38.8-38.8h77.6zm620.6-216.6l-61.5 61.5h-54.9v-54.9l61.6-61.5h54.8v54.9zm-200.6 404a154.9 154.9 0 0 1-47.6 32.4l-23.3 35.6v55h-77.6v-55L450 654.3a155.3 155.3 0 0 1-47.7-252 155.4 155.4 0 0 1 219.5 0 155.3 155.3 0 0 1 0 219.4zM473.2 861h77.6v-38.8h-77.6V861zM512 279.3a233 233 0 0 0-116.4 434.3V900l38.8 38.8h155.2l38.8-38.8V713.6A233 233 0 0 0 512 279.3z"></path>
                    </svg>
                  </span>
                  Why is it important?
                </h1>
                <p className="text-teal-950 text-xs">
                  OLX is built on trust. Help other people get to know <br />{' '}
                  you. Tell them about the things you like. Share your <br />{' '}
                  favorite brands, books, movies, shows, music, food. <br /> And
                  you will see the results…
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-10">
              <hr className="border-teal-950" />
            </div>
            <div className="">
              <div className="mt-6">
                <h1 className="font-bold text-teal-950 text-lg mb-5">
                  Contact information
                </h1>
                <div className="flex gap-3">
                  <div className="flex border rounded-md border-teal-950 h-12 w-1/2">
                    <div className="flex items-center px-1 h-5 self-center border-teal-950 border-r">
                      <span className="ml-1 mr-3 text-teal-950 text-xs">
                        +92
                      </span>
                    </div>
                    <input
                      className="w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="phone"
                      placeholder="Phone number"
                      type="text"
                    />
                  </div>
                  <div className=" text-xs whitespace-nowrap text-gray-600">
                    This is the number for buyers contacts, reminders, and other
                    notifications.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="mt-10 w-1/2">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <StyledInputBase
                      value={'Hassnain'}
                      placeholder="Find Cars, Mobile Phones and more..."
                      inputProps={{ 'aria-l abel': 'search' }}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="text-gray-600 text-xs whitespace-nowrap">
                We won't reveal your email to anyone else nor use it to send you
                spam.
              </div>
            </div>
            <div className="mt-12 mb-10">
              <hr className="border-gray-600" />
            </div>
            <div>
              <div>
                <h1 className="font-bold text-teal-950 text-lg mb-4 px-2">
                  Optional informaton
                </h1>
                <div className="flex items-center w-full justify-between">
                  <div className="px-2">
                    <p className="text-teal-950 text-sm font-semibold mb-1">
                      Facebook
                    </p>
                    <p className="text-gray-700 text-xs whitespace-nowrap">
                      Sign in with Facebook and discover your trusted
                      connections to buyers
                    </p>
                  </div>
                  <div className="">
                    <div className="mr-48">
                      <button className="border-2 rounded-sm px-28 p-2 border-teal-950 text-teal-950 font-bold">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full justify-between">
                  <div className="px-2 ">
                    <p className="text-teal-950 text-sm font-semibold mb-1 mt-6">
                      Google
                    </p>
                    <p className="text-gray-700 text-xs whitespace-nowrap">
                      Connect your OLX account to your Google account for
                      simplicity and ease
                    </p>
                  </div>
                  <div className="">
                    <div className="mr-48">
                      <button className="border-2 rounded-sm px-28 p-2 mt-5  border-teal-950 text-teal-950 font-bold">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-12 mb-10">
                  <hr className="border-gray-600" />
                </div>
                <div className="flex px-2 items-center justify-between mb-8">
                  <div className="">
                    <h1 className="font-bold text-base underline underline-offset-4">
                      Discard
                    </h1>
                  </div>
                  <div>
                    <button className="text-white rounded-sm font-bold bg-teal-950 border-teal-950 px-3 py-2">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 edite-container border border-gray-300 rounded-md">
        <div className="p-2">
          <h1 className="text-teal-950 font-bold text-lg mt-3">
            Delete this account
          </h1>
          <hr className="mt-3 mb-5 border-gray-400" />
          <h1 className="text-teal-950 font-bold text-lg mt-3">
            Are you sure you want to delete your account?
          </h1>
          <button className="border-2 rounded-sm px-14 p-2 mt-5 border-teal-950 text-teal-950 font-bold">
            Yes, delete my account
          </button>
          <h1 className="font-bold text-base underline mt-5 mb-3 text-teal-950 underline-offset-4">
          See more info
          </h1>
        </div>
      </div>
     <div className='mt-5'>
     <Footer />
     <FooterTwo />
     </div>
    </div>
  )
}
