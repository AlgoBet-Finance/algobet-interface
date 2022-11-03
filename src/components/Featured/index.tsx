import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function Featured({ isOnHomePage }: { isOnHomePage: any }) {
  useEffect(() => {
    const widthCard = $('.featured-item')[0].offsetWidth + 24
    $('#scroll-left-promotion').on('click', () => {
      $('#scroll-bar-promotion').animate(
        { scrollLeft: ($('#scroll-bar-promotion').scrollLeft() || 0) - widthCard },
        300
      )
    })
    $('#scroll-right-promotion').on('click', () => {
      $('#scroll-bar-promotion').animate(
        { scrollLeft: ($('#scroll-bar-promotion').scrollLeft() || 0) + widthCard },
        300
      )
    })
  }, [])
  const matchList = [1, 2, 3]
  return (
    <div className="featured">
      <div className="container">
        <div className="title-h2">
          <h2>{isOnHomePage ? 'Featured promotions' : 'Hot promotions for you'}</h2>
          <div className="group-view-btn">
            {isOnHomePage ? (
              <button type="button" className="btn-view btn-view-all">
                <a href="/">VIEW ALL</a>
              </button>
            ) : (
              <>
                <button id="scroll-left-promotion" type="button" className="btn-view btn-prev-next btn-prev">
                  <img src="/images/arrow-left.svg" alt="arrow-left" />
                </button>
                <button id="scroll-right-promotion" type="button" className="btn-view btn-prev-next btn-next">
                  <img src="/images/arrow-right.svg" alt="arrow-right" />
                </button>
              </>
            )}
          </div>
        </div>
        <div className="row featured-list" id="scroll-bar-promotion">
          {matchList.map((item, key) => (
            <div key={item} className="col-md-4 featured-item-div">
              <a className="featured-item" href='/'>
                <div className="hover-img ">
                  <figure>
                    <img src="/images/pay/promotion-banner.png" alt="banner" />
                  </figure>
                </div>
                <p className="text-3">End at 3:12 PM - Sep15, 2022</p>
                <h4 className="fs-16 font-w600">Lorem ipsum dolor sit amet</h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
