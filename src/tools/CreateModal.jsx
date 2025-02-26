import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { ClearOutlined, ReportOutlined } from '@mui/icons-material'

export default function PasswordReset() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isValid = {
    length: password.length >= 8,
    number: /\d/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    letter: /[a-zA-Z]/.test(password),
  }

  return (
    <div className="max-w-md mx-auto mt-5 p-2 bg-white rounded-xl">
      <h2 className="text-xl font-semibold text-teal-950 mb-4">
        Choose a new password
      </h2>
      <p className="text-teal-950 mb-4">
        To secure your account and log in faster, choose a strong password you
        haven't used before.
      </p>

      <div className="mb-4 relative">
        <label className="flex text-teal-950">New Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-red-500 border-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter password"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Password Strength */}
      <div className="text-sm text-teal-950 mb-4 ">
        <p className="text-teal-950">Password must contain at least:</p>
        <ul className="list-disc pl-1 ">
          <li className={isValid.length ? 'text-green-600' : 'text-teal-950'}>
            8 characters <ClearOutlined className="text-red-600" />
          </li>
          <li className={isValid.number ? 'text-green-600' : 'text-teal-950'}>
            1 number <ClearOutlined className="text-red-600" />
          </li>
          <li
            className={isValid.specialChar ? 'text-green-600' : 'text-teal-950'}
          >
            1 special character <ClearOutlined className="text-red-600" />
          </li>
          <li className={isValid.letter ? 'text-green-600' : 'text-teal-950'}>
            1 letter <ClearOutlined className="text-red-600" />
          </li>
        </ul>
      </div>

      {/* Confirm Password Field */}
      <div className="mb-4 relative">
        <label className="block text-teal-950">Confirm New Password</label>
        <div className="relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-red-500 border-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
      </div>
      <p className=" text-teal-950 text-sm ">
        <ReportOutlined className="" />
        This requires all devices to log in with the
      </p>
      <p className=" text-teal-950 text-sm mb-4">new password</p>
      <button
        className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
        disabled={
          !(
            isValid.length &&
            isValid.number &&
            isValid.specialChar &&
            isValid.letter &&
            password === confirmPassword
          )
        }
      >
        Submit
      </button>
    </div>
  )
}
