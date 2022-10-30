/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'
import News from 'components/News'
import HotNFT from 'components/HotNFT'
import Match from 'components/Match'
import MatchComing from 'components/MatchComing'
import CTA from 'components/CTA'
import Featured from 'components/Featured'
import LeaderBoard from 'components/LeaderBoard'

// Import Swiper styles

const Promotions = () => {
  const list = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
  return (
    <>
      <div className="hero">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          // grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          // breakpoints={{
          //   769: {
          //     slidesPerView: 2,
          //     slidesPerGroup: 2,
          //   },
          // }}
          navigation
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Featured isOnHomePage={false} />
      <div className="featured">
        <div className="container">
          <div className="title-h2">
            <h2>All promotions</h2>
          </div>
          <div className="row featured-list-all" id="scroll-bar-promotion">
            {list.map((item, key) => (
              <div key={item} className="col-3 featured-item-div">
                <div className="featured-item">
                  <img src="/images/pay/promotion-banner.png" alt="arrow-right" />
                  <p className="text-3">End at 3:12 PM - Sep15, 2022</p>
                  <h4 className="fs-16 font-w600">Lorem ipsum dolor sit amet</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Promotions
