/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import HotNFT from 'components/HotNFT'

const MarketplacePage = () => {
  const list = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-inner hero-inner-mp">
              <h1>
                DISCOVER & COLECT
                <br />
                DIGITAL ART WITH NFT
              </h1>
              <div className="button-group-mp">
                <button type="button" className="btn-mp btn-place-a-bid">
                  PLACE A BID
                </button>
                <button type="button" className="btn-mp btn-view-artwork">
                  VIEW ARTWORK
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-item">
          <img src="./images/hero/hero-marketplace.png" alt="" />
        </div>
      </div>
      <HotNFT
        isOnHomePage={false}
        numberOnScreen={3}
        title="Hot NFT items"
        idScroll="scroll-bar-nft"
        idScrollLeft="scroll-left-nft"
        idScrollRight="scroll-right-nft"
      />
      <HotNFT
        isOnHomePage={false}
        numberOnScreen={3}
        title="Lorem ipsum"
        idScroll="scroll-bar-nft1"
        idScrollLeft="scroll-left-nft1"
        idScrollRight="scroll-right-nft1"
      />
      <HotNFT
        isOnHomePage={false}
        numberOnScreen={3}
        title="Lorem ipsum"
        idScroll="scroll-bar-nft2"
        idScrollLeft="scroll-left-nft2"
        idScrollRight="scroll-right-nft2"
      />
    </>
  )
}
export default MarketplacePage
