import { ArrowBack, ArrowBackIos } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PostHeader() {
  return (
    <div className="bg-gray-50">
      <div className="post-container">
        <div className="flex items-center gap-3 py-2">
          <Link to={'/'}>
          <svg className='text-teal-950'
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
</Link>
          <img
            src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
