/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Header from 'components/Header'

import Footer from 'components/Footer'
import Home from './HomePage'
import Promotions from './PromotionPage'
import MarketplacePage from './MarketplacePage'
import ComingSoon from './ComingSoon'

// Import Swiper styles

const DefaultLayout = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/algobet" element={<ComingSoon />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default DefaultLayout
