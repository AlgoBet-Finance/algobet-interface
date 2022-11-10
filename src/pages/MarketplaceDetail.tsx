/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import HotNFT from 'components/HotNFT'

const MarketplaceDetail = () => {
  const list = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
  return (
    <div className="market-page">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Library
            </li>
          </ol>
        </nav>
        <div className="detail-market">
          <div className="row">
            <div className="col-md-6">
              <div className="hover-img ">
                <figure>
                  <img src="/images/nft-collection/20_.jpg" alt="nft" />
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="d-flex">
                  <h2>Star Ticket 20% name #001</h2>
                  <p>
                    When using Star Ticket to bet a match, the user can increase the profit by the percentage that
                    Ticket brings
                  </p>
                  <ul>
                    <li>
                      <span className="text-3 font-w600">Editions</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span className="text-3 font-w600">Collection</span>
                      <span>NFTs Star Ticket</span>
                    </li>
                    <li>
                      <span className="text-3 font-w600">Series</span>
                      <span>#001</span>
                    </li>
                    <li>
                      <span className="text-3 font-w600">Blockchain</span>
                      <span>
                        <img className="" src="/images/network/poly.png" alt="BNB" />
                        BNB
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <span className="text-2 fs-12">3 available for sale</span>
                  <h3>300 AGB </h3>
                  <div className="btn btn-main">BUY NOW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MarketplaceDetail
