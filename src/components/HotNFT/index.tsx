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
  const list = [{ id: 11 }, { id: 2 },{ id: 11 }, { id: 2 }]

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
