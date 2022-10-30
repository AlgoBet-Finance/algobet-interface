import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function MatchComing() {
  useEffect(() => {
    const widthCard = $('.card-nft')[0].offsetWidth + 24
    $('#scroll-left-matchComing').on('click', () => {
      $('#scroll-matchComing').animate({ scrollLeft: ($('#scroll-matchComing').scrollLeft() || 0) - widthCard }, 276)
    })
    $('#scroll-right-matchComing').on('click', () => {
      $('#scroll-matchComing').animate({ scrollLeft: ($('#scroll-matchComing').scrollLeft() || 0) + widthCard }, 276)
    })
  }, [])
  const matchList = [1, 2, 3, 4, 5, 6]
  return (
    <div className="match">
      <div className="container">
        <div className="title-h2">
          <h2>Up comming match</h2>
          <div className="group-view-btn">
            <button type="button" className="btn-view btn-view-all">
              <a href="/">VIEW ALL</a>
            </button>
            <button id="scroll-left-matchComing" type="button" className="btn-view btn-prev-next btn-prev">
              <img src="/images/arrow-left.svg" alt="arrow-left" />
            </button>
            <button id="scroll-right-matchComing" type="button" className="btn-view btn-prev-next btn-next">
              <img src="/images/arrow-right.svg" alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="card-list" id="scroll-matchComing">
          {matchList.map((item, key) => (
            <div className="match-item">
              <div className="inner">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <span className="fs-16 font-w600">12:00</span>
                    <span className="fs-12 text-3">Nov 20</span>
                  </div>
                  <div className="flags">
                    <div className="flags-item">
                      <img src="images/flags/en.svg" alt="eng" />
                    </div>
                    <div className="flags-item">
                      <img src="images/flags/ee.svg" alt="eng" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-24 font-w600">England</span>
                    <span className="fs-24 font-w600"> 2</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-24 text-2">England</span>
                    <span className="fs-24 text-2">2</span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom-item green">1.12</div>
                  <div className="bottom-item ">1.12</div>
                  <div className="bottom-item red">1.12</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
