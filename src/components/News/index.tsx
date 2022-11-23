import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { baseURL, get } from 'services/api'

export default function News() {
  const [listNews, setListNews] = useState([] as any[])
  useEffect(() => {
    get(`${baseURL}/news`, {
      limit: 5,
      page: 1,
    }).then((response) => {
      console.log('listNews :>> ', response.data);
      setListNews(response.data.news)
    })
  }, [])
  useEffect(() => {
    if (listNews) {
      const widthCard = ($('.card-news-div') && $('.card-news-div')[0] ? $('.card-news-div')[0].offsetWidth : 400) + 24
      $('#scroll-left-news').on('click', () => {
        $('#scroll-bar-news').animate({ scrollLeft: ($('#scroll-bar-news').scrollLeft() || 0) - widthCard }, 300)
      })
      $('#scroll-right-news').on('click', () => {
        $('#scroll-bar-news').animate({ scrollLeft: ($('#scroll-bar-news').scrollLeft() || 0) + widthCard }, 300)
      })
    }
  }, [listNews])
  return (
    <div className="news ">
      <div className="container">
        <div className="title-h2">
          <h2>Featured news</h2>
          <div className="group-view-btn">
            <button type="button" className="btn-view btn-view-all">
              <a href="/news">VIEW ALL</a>
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
          {listNews.map((item) => (
            <div key={item.id} className="col-md-4 card-news-div">
              <div className="card-news">
                <img src={item.urlToImage} alt="news" />
                <div className="content-news">
                  <div className="title-card">{item.title}</div>
                  <div className="des-news">{item.description}</div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                    <div className="readmore-news">
                      <a target="_blank" href={item.url} rel="noreferrer">
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
  )
}
