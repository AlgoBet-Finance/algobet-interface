/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper'
import News from 'components/News'
import HotNFT from 'components/HotNFT'
import Match from 'components/Match'
import MatchComing from 'components/MatchComing'
import CTA from 'components/CTA'
import Featured from 'components/Featured'
import LeaderBoard from 'components/LeaderBoard'

// Import Swiper styles

const Home = () => {
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="./images/hero/hero.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="hero-content">
          <div className="container">
            <div className="hero-inner">
              <div className="countdown">
                <div className="flags">
                  <div className="flags-item">
                    <img src="images/flags/en.svg" alt="eng" />
                  </div>
                  <div className="flags-item">
                    <img src="images/flags/ee.svg" alt="eng" />
                  </div>
                </div>
                <div className="time">
                  <div className="time-item">
                    <span className="font-w600">10</span>
                    <span className="text-3 fs-14">day</span>
                  </div>
                  :
                  <div className="time-item">
                    <span className="font-w600">10</span>
                    <span className="text-3 fs-14">hr</span>
                  </div>
                  :
                  <div className="time-item">
                    <span className="font-w600">10</span>
                    <span className="text-3 fs-14">min</span>
                  </div>
                  :
                  <div className="time-item">
                    <span className="font-w600">10</span>
                    <span className="text-3 fs-14">sec</span>
                  </div>
                </div>
              </div>
              <div className="hero-match">
                <img src="./images/hero/1.png" className="worldcup" alt="" />
                <h1 className="font-w700">Brazil</h1>
                <h1>Cameroon</h1>
                <div className="bottom">
                  <div className="bottom-item">
                    <div className="left">
                      <img src="./images/flags/en.svg" alt="" />
                      Brazil
                    </div>
                    <span>2.50</span>
                  </div>
                  <div className="bottom-item">
                    <div className="left">
                      <img src="./images/flags/en.svg" alt="" />
                      Brazil
                    </div>
                    <span>2.50</span>
                  </div>
                  <div className="bottom-item">
                    <div className="left">
                      <img src="./images/flags/en.svg" alt="" />
                      Brazil
                    </div>
                    <span>2.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Match />
      <MatchComing />
      <CTA />
      <Featured isOnHomePage />
      <HotNFT
        isOnHomePage
        numberOnScreen={3}
        title="Hot NFT items"
        idScroll="scroll-bar-nft"
        idScrollLeft="scroll-left-nft"
        idScrollRight="scroll-right-nft"
      />
      <LeaderBoard />
      <News />
    </>
  )
}
export default Home
