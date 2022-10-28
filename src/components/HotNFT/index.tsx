import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function HotNFT() {
  useEffect(() => {
    const widthCard = $('.card-nft')[0].offsetWidth + 24
    $('#scroll-left-nft').on('click', () => {
      $('#scroll-bar-nft').animate({ scrollLeft: ($('#scroll-bar-nft').scrollLeft() || 0) - widthCard }, 300)
    })
    $('#scroll-right-nft').on('click', () => {
      $('#scroll-bar-nft').animate({ scrollLeft: ($('#scroll-bar-nft').scrollLeft() || 0) + widthCard }, 300)
    })
  }, [])
  return (
    <div className="nft container">
      <div className="title-h2">
        <h2>Hot NFT items</h2>
        <div className="group-view-btn">
          <button type="button" className="btn-view btn-view-all">
            <a href="/">VIEW ALL</a>
          </button>
          <button id="scroll-left-nft" type="button" className="btn-view btn-prev-next btn-prev">
            <img src="/images/arrow-left.svg" alt="arrow-left" />
          </button>
          <button id="scroll-right-nft" type="button" className="btn-view btn-prev-next btn-next">
            <img src="/images/arrow-right.svg" alt="arrow-right" />
          </button>
        </div>
      </div>
      <div className="card-list" id="scroll-bar-nft">
        <div className="card-nft">
          <div className="color-blur" />
          <img src="/images/nft-img.png" alt="nft" />
          <div className="content-news">
            <div className="d-flex justify-content-between align-items-start">
              <div className="title-card">Lorem ipsum dolor sit amet</div>
              <div className="balance-nft">
                <img src="/images/AGB-token.svg" alt="agb" />
                5.123,3
              </div>
            </div>
            <div className="nft-avlb">3 of 10 Available</div>
          </div>
        </div>
        <div className="card-nft">
          <div className="color-blur" />
          <img src="/images/nft-img.png" alt="nft" />
          <div className="content-news">
            <div className="d-flex justify-content-between align-items-start">
              <div className="title-card">Lorem ipsum dolor sit amet</div>
              <div className="balance-nft">
                <img src="/images/AGB-token.svg" alt="agb" />
                5.123,3
              </div>
            </div>
            <div className="nft-avlb">3 of 10 Available</div>
          </div>
        </div>
        <div className="card-nft">
          <div className="color-blur" />
          <img src="/images/nft-img.png" alt="nft" />
          <div className="content-news">
            <div className="d-flex justify-content-between align-items-start">
              <div className="title-card">Lorem ipsum dolor sit amet</div>
              <div className="balance-nft">
                <img src="/images/AGB-token.svg" alt="agb" />
                5.123,3
              </div>
            </div>
            <div className="nft-avlb">3 of 10 Available</div>
          </div>
        </div>
        <div className="card-nft">
          <div className="color-blur" />
          <img src="/images/nft-img.png" alt="nft" />
          <div className="content-news">
            <div className="d-flex justify-content-between align-items-start">
              <div className="title-card">Lorem ipsum dolor sit amet</div>
              <div className="balance-nft">
                <img src="/images/AGB-token.svg" alt="agb" />
                5.123,3
              </div>
            </div>
            <div className="nft-avlb">3 of 10 Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}
