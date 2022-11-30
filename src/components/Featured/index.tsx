import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { get } from 'services/api'
import { timestampFormat, timestampToTime } from 'utils/time'
import { Link } from 'react-router-dom'

export default function Featured({ isOnHomePage }: { isOnHomePage: any }) {
  const [promotionHot, setPromotionHot] = useState([] as any[])

  useEffect(() => {
    if (promotionHot.length > 0) {
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
    }
  }, [promotionHot])
  useEffect(() => {
    get(`/promotion/hot-promotions`, {
      limit: 30,
      page: 1,
    }).then((response) => {
      console.log('promotion/hot-promotions :>> ', response.data)
      setPromotionHot(response.data.hotPromotions)
    })
  }, [])
  const matchList = [1, 2, 3]
  return (
    <div className="featured">
      <div className="container">
        <div className="title-h2">
          {promotionHot.length > 0 ? (
            <>
              <h2>{isOnHomePage ? 'Featured promotions' : 'Hot promotions for you'}</h2>
              <div className="group-view-btn">
                {isOnHomePage ? (
                  <button type="button" className="btn-view btn-view-all">
                    <a href="/promotions">VIEW ALL</a>
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
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="row featured-list" id="scroll-bar-promotion">
          {promotionHot.length > 0 ? (
            <>
              {promotionHot.map((item) => (
                <div key={item.id} className="col-md-4 featured-item-div">
                  <Link to={{ pathname: `/promotions/${item.id}` }}>
                    <div className="featured-item">
                      <div className="hover-img ">
                        <figure>
                          <img src={item.urlToImage} alt="banner" />
                        </figure>
                      </div>
                      <p className="text-3">End at {timestampFormat(item.endDate)} </p>
                      <h4 className="fs-16 font-w600">{item.title}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <>{/* <div className="text-center">No promotion</div> */}</>
          )}
        </div>
      </div>
    </div>
  )
}
