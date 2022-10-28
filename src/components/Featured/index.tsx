import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function Featured() {
  const matchList = [1, 2, 3]
  return (
    <div className="featured">
      <div className="container">
        <div className="title-h2">
          <h2>Featured promotions</h2>
          <div className="group-view-btn">
            <button type="button" className="btn-view btn-view-all">
              <a href="/">VIEW ALL</a>
            </button>
          </div>
        </div>
        <div className="featured-list">
          {matchList.map((item, key) => (
            <div className="featured-item">
              <img src="/images/pay/promotion-banner.png" alt="arrow-right" />

              <p className='text-3'>End at 3:12 PM - Sep15, 2022</p>
              <h4 className='fs-16 font-w600'>Lorem ipsum dolor sit amet</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
