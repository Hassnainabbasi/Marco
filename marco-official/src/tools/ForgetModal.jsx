import React from 'react'

export default function ForgetModal() {
  return (
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
    <button
      className="w-full bg-gray-200 text-gray-500 font-semibold py-2 rounded"
      disabled=""
    >
      Next
    </button>
    </div>
  )
}
