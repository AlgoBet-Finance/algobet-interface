/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useParams, useLocation } from 'react-router-dom'
import { SerializedNft } from 'store/nft'
import { useNftSelector, useUpdateNftCallback } from 'store/nft/hooks'
// export interface SerializedBet {
//   id: number
//   imageUrl?: string
//   title?: string
//   price?: string
//   iconPrice?: string
//   totalAmount?: number
//   available?: number
// }
const MarketplaceDetail = () => {
  const params = useParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const [nftDetail, setNft] = useState({} as SerializedNft)
  const [idNft, setIdNft] = useState(15)
  const nft = useNftSelector()

  useEffect(() => {
    if (params.id && nft.listNft.length > 0) {
      setIdNft(parseInt(params.id))
      nft.listNft.forEach((item) => {
        // console.log(parseInt(params.id))
        if (item.id === idNft) {
          setNft(item)
          console.log(item)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idNft])

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
                  <img src={nftDetail?.imageUrl} alt="nft" />
                </figure>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <div className="d-flex">
                  <h2>{nftDetail?.title}</h2>
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
                        <img className="me-2" src="/images/pay/Binance_Logo.png" alt="BNB" />
                        USDT
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <span className="text-2 fs-12">{nftDetail.available} available for sale</span>
                  <h3>{nftDetail?.price} USDT </h3>
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
