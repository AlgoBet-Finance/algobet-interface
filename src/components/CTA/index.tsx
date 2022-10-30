import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function CTA() {
  return (
    <div className="cta">
      <div className="container">
        <div className="cta-inner">
          <h4 className="fs-36 font-w600">Get token in second</h4>
          <div className="cta-list">
            <img src="/images/pay/1.png" alt=" " />
            <img src="/images/pay/2.png" alt=" " />
            <img src="/images/pay/3.png" alt=" " />
            <img src="/images/pay/4.png" alt=" " />
          </div>
          <a href="/" className='btn btn-cta'>
            <img src="/images/pay/Binance_Logo.png" alt="Binance_Logo" />
            BUY USDT
          </a>
        </div>
      </div>
    </div>
  )
}
