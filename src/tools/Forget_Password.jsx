import { Password, ReportOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'

export default function ForgetPasswordForm() {
  const [phoneNo, setPhoneNo] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otpValue, setOtpValue] = useState(['', '', '', ''])

  const sendOtp = async () => {
    if (!phoneNo) return alert('Please enter your phone number')
    setStep(2)
  }

  const handleSmsForward = async () => {
    let cleanedPhone = phoneNo.replace(/^0/, '')
    let formattedPhone = `+92${cleanedPhone}`

    try {
      const response = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNo: formattedPhone }),
      })

      const data = await response.json()    
      console.log(data, 'this is data ')

      console.log('OTP:', data.otp)
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
    let cleanedPhone = phoneNo.replace(/^0/, '')
    let formattedPhone = `+92${cleanedPhone}`

    const otpString = otpValue.join('')
    console.log('OTP submitted:', otpString) // Log OTP

    if (otpString.length !== 4) {
      alert('Please enter a 4-digit OTP')
      return
    }

    try {
      const response = await fetch(
        'http://localhost:3000/users/reset-password',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNo : formattedPhone, otp: otpString, newPassword }),
        }
      )

      const data = await response.json()
      if (response.ok) {
        alert('OTP verified successfully!')
      } else {
        alert(data.message || 'OTP verification failed')
      }
    } catch (error) {
      console.error('Error verifying OTP:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  const handlePasswordSubmit = async () => {

    let cleanedPhone = phoneNo.replace(/^0/, '')
    let formattedPhone = `+92${cleanedPhone}`

    if (!newPassword || !confirmPassword) return alert('Enter all fields')
    if (newPassword !== confirmPassword) return alert('Passwords do not match')

    try {
      const res = await fetch('http://localhost:3000/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNo : formattedPhone }),
      })

      const data = await res.json()
      if (res.ok) {
        setStep(3)
      } else {
        alert(data.message || 'OTP sending failed')
      }
    } catch (error) {
      alert('Error sending OTP')
    }
  }

  return (
    <div className="p-1 max-w-md mx-auto">
      {step === 1 && (
        <>
          <h2 className="text-2xl text-teal-950 font-bold mt-10 text-center mb-7">
            Forgot Password
          </h2>
          <p className="text-teal-950 mb-6">
            We’ll send a verification code to this email address if it matches
            an existing account
          </p>
          <h1 className="text-teal-950 font-bold text-sm mb-4">
            Enter your phone number
          </h1>
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
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="phone"
              placeholder="Phone number"
              type="text"
            />
          </div>
          <p className="text-red-500 text-xs mt-1 mb-5">
            Phone number is required.
          </p>
          <button
            onClick={sendOtp}
            className="w-full bg-blue-500 text-white py-2"
          >
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
        </>
      )}

      {step === 3 && (
        <div className="h-full flex items-center justify-center ">
          <div className="bg-white rounded-lg p-2 w-full max-w-md text-center relative">
            <h2 className="text-xl font-bold text-teal-950 mb-8">
              Enter confirmation code
            </h2>
            <p className="text-teal-950 text-sm mb-4">
              You will receive a 4-digit code through a call on <br />
              <span className="font-bold text-sm text-teal-950">{phoneNo}</span>
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
                If you have not received the code by call, please request
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
      )}
    </div>
  )
}
