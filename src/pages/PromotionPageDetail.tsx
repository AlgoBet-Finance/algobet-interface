/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'

import { get } from 'services/api'
import { useParams } from 'react-router-dom'

// Import Swiper styles

const PromotionPageDetail = () => {
  const params = useParams()

  const [promotionDetail, setPromotionDetail] = useState({} as any)

  useEffect(() => {
    get(`/promotion/${params.id}`).then((response) => {
      console.log('promotionDetail :>> ', response.data)
      setPromotionDetail(response.data)
    })
  }, [params.id])
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
              <img src="../images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="../images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="../images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-item">
              <img src="../images/hero/hero-promotion.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="mt-5 mb-5">
          <h2>{promotionDetail.title}</h2>
          <p>{promotionDetail.content}</p>
        </div>
      </div>
    </>
  )
}
export default PromotionPageDetail
