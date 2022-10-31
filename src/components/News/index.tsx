import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function News() {
  useEffect(() => {
    const widthCard = $('.card-news-div')[0].offsetWidth + 24
    $('#scroll-left-news').on('click', () => {
      $('#scroll-bar-news').animate({ scrollLeft: ($('#scroll-bar-news').scrollLeft() || 0) - widthCard }, 300)
    })
    $('#scroll-right-news').on('click', () => {
      $('#scroll-bar-news').animate({ scrollLeft: ($('#scroll-bar-news').scrollLeft() || 0) + widthCard }, 300)
    })
  }, [])
  const list = [1, 2, 3, 4]

  return (
    <div className="news container">
      <div className="title-h2">
        <h2>Featured news</h2>
        <div className="group-view-btn">
          <button type="button" className="btn-view btn-view-all">
            <a href="/">VIEW ALL</a>
          </button>
          <button id="scroll-left-news" type="button" className="btn-view btn-prev-next btn-prev">
            <img src="/images/arrow-left.svg" alt="arrow-left" />
          </button>
          <button id="scroll-right-news" type="button" className="btn-view btn-prev-next btn-next">
            <img src="/images/arrow-right.svg" alt="arrow-right" />
          </button>
        </div>
      </div>
      <div className="row card-list" id="scroll-bar-news">
        {list.map((item) => (
          <div className="col-md-4 card-news-div">
            <div className="card-news">
              <img src="/images/news/news-example.png" alt="news" />
              <div className="content-news">
                <div className="title-card">Lorem ipsum dolor sit amet</div>
                <div className="des-news">
                  Enim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod pariatur aliquip nulla minim
                  officiaEnim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod pariatur aliquip nulla
                  minim officiaEnim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod pariatur aliquip
                  nulla minim officia.
                </div>
                <div className="readmore-news">
                  <a target="_blank" href="/">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
