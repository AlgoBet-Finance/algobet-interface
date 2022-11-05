import React, { useEffect, useState } from 'react'

export default function Localization() {
  return (
    <div className="select-lang">
      <img src="/images/flags/en.svg" alt="eng" />
      <div className='text-lang'>Eng</div>
      <svg
        className="dd-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.76644 7.74155L9.99977 10.9749L13.2331 7.74155C13.5581 7.41655 14.0831 7.41655 14.4081 7.74155C14.7331 8.06655 14.7331 8.59155 14.4081 8.91655L10.5831 12.7416C10.2581 13.0666 9.73311 13.0666 9.40811 12.7416L5.58311 8.91655C5.25811 8.59155 5.25811 8.06655 5.58311 7.74155C5.90811 7.42489 6.44144 7.41655 6.76644 7.74155Z"
          fill="white"
          fillOpacity="0.75"
        />
      </svg>
    </div>
  )
}
