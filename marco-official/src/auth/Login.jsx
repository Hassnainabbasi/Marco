import React from 'react'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailOutlined, PhoneOutlined } from '@mui/icons-material';


export default function Login() {
  return (
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
      <a className="text-blue-600 hover:underline" href="#">
        New to OLX? Create an account
      </a>
    </div>
  </div>
  </div>
  
  )
}
