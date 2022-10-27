import Localization from 'components/Localization'
import React, { useEffect, useState } from 'react'

export default function Footer() {

  return (
    <footer>
      <div className='container footer'>
        <div className='footer-s1'>
          <div className='nav-footer'>
            <a href="/">Lorem ipsum</a>
            <a href="/">Lorem ipsum</a>
            <a href="/">Lorem ipsum</a>
            <a href="/">Lorem ipsum</a>
            <a href="/">Lorem ipsum</a>
            <a href="/">Lorem ipsum</a>
          </div>
          <Localization/>
        </div>
        <div className='footer-s2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className='footer-s3'>
          <div>Copyright @Algorand</div>
          <div>18 AND OVER ONLY</div>
        </div>
      </div>
    </footer>
  )
}
