import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import { Link, NavLink } from 'react-router-dom'

export default function HotNFT({
  isOnHomePage,
  numberOnScreen,
  title,
  idScroll,
  idScrollLeft,
  idScrollRight,
}: {
  isOnHomePage: any
  numberOnScreen: any
  title: any
  idScroll: any
  idScrollLeft: any
  idScrollRight: any
}) {
  useEffect(() => {
    const widthCard = $(`.${idScroll}`)[0].offsetWidth + 24
    $(`#${idScrollLeft}`).on('click', () => {
      $(`#${idScroll}`).animate({ scrollLeft: ($(`#${idScroll}`).scrollLeft() || 0) - widthCard }, 300)
    })
    $(`#${idScrollRight}`).on('click', () => {
      $(`#${idScroll}`).animate({ scrollLeft: ($(`#${idScroll}`).scrollLeft() || 0) + widthCard }, 300)
    })
  }, [idScroll, idScrollLeft, idScrollRight])
  const list = [
    {
      id: 11,
      imageUrl: '/images/nft-collection/20_.jpg',
      title: 'Star Ticket 20%',
      price: '150',
      totalAmount: 100,
      available: 80,
    },
    {
      id: 2,
      imageUrl: '/images/nft-collection/15_.jpg',
      title: 'Star Ticket 15%',
      price: '100',
      totalAmount: 100,
      available: 68,
    },
    {
      id: 11,
      imageUrl: '/images/nft-collection/10_.jpg',
      title: 'Star Ticket 10%',
      price: '50',
      totalAmount: 1000,
      available: 462,
    },
    {
      id: 11,
      imageUrl: '/images/nft-collection/5_.jpg',
      title: 'Star Ticket 5%',
      price: '20',
      totalAmount: 5000,
      available: 232,
    },
    {
      id: 2,
      imageUrl: '/images/nft-collection/3_.jpg',
      title: 'Star Ticket 3%',
      price: '10',
      totalAmount: 10000,
      available: 168,
    },
    {
      id: 2,
      imageUrl: '/images/nft-collection/x_.jpg',
      title: 'Star Ticket Lucky',
      price: '300',
      totalAmount: 100,
      available: 8,
    },
    {
      id: 2,
      imageUrl: '/images/nft-collection/ctBrazil.jpg',
      title: 'Country Token Brazil',
      iconPrice: '/images/pay/Binance_Logo.png',
      price: '1 USDT',
      totalAmount: 100,
      available: 20,
    },
  ]

  return (
    <div className="nft ">
      <div className=" container">
        <div className="title-h2">
          <h2>{title}</h2>
          <div className="group-view-btn">
            {isOnHomePage && (
              <button type="button" className="btn-view btn-view-all">
                <a href="/">VIEW ALL</a>
              </button>
            )}

            <button id={idScrollLeft} type="button" className="btn-view btn-prev-next btn-prev">
              <img src="/images/arrow-left.svg" alt="arrow-left" />
            </button>
            <button id={idScrollRight} type="button" className="btn-view btn-prev-next btn-next">
              <img src="/images/arrow-right.svg" alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="row card-list" id={idScroll}>
          {list.map((item, index) => (
            <div className={`${numberOnScreen === 3 ? 'col-md-4' : 'col-3'} card-nft-div`}>
              <Link to={{ pathname: `/marketplace/${item.id}` }}>
                <div className={`card-nft ${idScroll}`}>
                  <div className="color-blur" />
                  <img src={item.imageUrl} alt="nft" />
                  <div className="content-news">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="title-card">{item.title}</div>
                      <div className="balance-nft">
                        <img src={item.iconPrice || '/images/AGB-token.svg'} alt="agb" />
                        {item.price}
                      </div>
                    </div>
                    <div className="nft-avlb">{`${item.available} of ${item.totalAmount} Available`}</div>
                    <div className="gr-btn">
                      <button type="button" className="btn  btn-border">
                        VIEW ARTWORK
                      </button>
                      <button type="button" className="btn btn-main">
                        BUY ARTWORK
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
