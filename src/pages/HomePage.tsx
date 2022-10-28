/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import useConnectWalletCallback from 'hooks/useConnectWalletCallback'
import Header from 'components/Header'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'
import Footer from 'components/Footer'
import News from 'components/News'
import HotNFT from 'components/HotNFT'
import Match from 'components/Match'
import MatchComing from 'components/MatchComing'
import CTA from 'components/CTA'
import Featured from 'components/Featured'
import LeaderBoard from 'components/LeaderBoard'

// Import Swiper styles

const Home = () => {
  const { account } = useActiveWeb3React()
  const connectWallet = useConnectWalletCallback()

  // useEffect(() => {
  //   if (!account) connectWallet()
  // }, [account, connectWallet])

  const handleConnectWallet = () => {
    if (!account) {
      connectWallet()
    }
  }
  return (
    <div className="app">
      <Header />
      <div className="hero">
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
      </div>
      <Match />
      <MatchComing />
      <CTA />
      <Featured />
      <HotNFT />
      <LeaderBoard/>
      <News />
      <Footer />
    </div>
  )
}
export default Home
