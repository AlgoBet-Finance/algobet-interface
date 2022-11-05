/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'

import News from 'components/News'

// Import Swiper styles

const NewsPageCategory = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="news-page">
      <div className="container">
        <div className="news-top">
          <h1>Category title News</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4996 13.9999H14.7096L14.4296 13.7299C15.6296 12.3299 16.2496 10.4199 15.9096 8.38989C15.4396 5.60989 13.1196 3.38989 10.3196 3.04989C6.08965 2.52989 2.52965 6.08989 3.04965 10.3199C3.38965 13.1199 5.60965 15.4399 8.38965 15.9099C10.4196 16.2499 12.3296 15.6299 13.7296 14.4299L13.9996 14.7099V15.4999L18.2496 19.7499C18.6596 20.1599 19.3296 20.1599 19.7396 19.7499C20.1496 19.3399 20.1496 18.6699 19.7396 18.2599L15.4996 13.9999ZM9.49965 13.9999C7.00965 13.9999 4.99965 11.9899 4.99965 9.49989C4.99965 7.00989 7.00965 4.99989 9.49965 4.99989C11.9896 4.99989 13.9996 7.00989 13.9996 9.49989C13.9996 11.9899 11.9896 13.9999 9.49965 13.9999Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
            <input type="text" placeholder="What are you looking for?" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <a className="featured-item" href="/">
              <div className="hover-img ">
                <figure>
                  <img src="/images/news/news-example.png" alt="news" />
                </figure>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <div className="text-3">Category name 01 - October 20, 2021</div>
            <a href="/" className="news-title mb-3 d-block">
              <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</h2>
            </a>
            <p className="text-3 fs-16">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
              magnam aliquam quaerat voluptatem. Ut enim ad minima ...
            </p>
            <div className="readmore-news">
              <a href="/">READ MORE</a>
            </div>
          </div>
        </div>
        <div className="news ">
          <div className="container">
            <div className="row card-list flex-wrap" style={{ marginTop: 80, rowGap: 24 }}>
              {list.map((item) => (
                <div className="col-md-4 card-news-div">
                  <div className="card-news">
                    <img src="/images/news/news-example.png" alt="news" />
                    <div className="content-news">
                      <div className="title-card">Lorem ipsum dolor sit amet</div>
                      <div className="des-news">
                        Enim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod pariatur aliquip nulla
                        minim officiaEnim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod pariatur
                        aliquip nulla minim officiaEnim laboris ullamco quis ullamco proident occaecat et deserunt
                        eiusmod pariatur aliquip nulla minim officia.
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
        </div>
      </div>
    </div>
  )
}
export default NewsPageCategory
