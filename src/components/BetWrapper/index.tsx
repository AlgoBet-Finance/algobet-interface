import React, { useEffect, useState } from 'react'

export default function BetWrapper() {
  const [openSelect, setOpenSelect] = useState(false)
  const [openPage, setOpenPage] = useState(true)
  return (
    <div className="betWrapper">
      <div className="item">
        <div className="item-header">
          BETSLIP
          <div
            className={openPage ? 'btn btn-minus ' : 'btn btn-minus btn-minus-active'}
            role="presentation"
            onClick={() => setOpenPage(!openPage)}
          >
            <img src="./images/close.svg" alt="" />
          </div>
        </div>
        {openPage ? (
          <>
            <div className="item-content">
              <ul className="item-list">
                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span>Full time result</span>- <span className="font-w600">ENGLAND</span>
                      <p className="text-3">England - USA</p>
                    </div>
                    <span className="fs-20 font-w600">1.12</span>
                  </div>
                </li>
                <li>
                  <div className="amount">
                    <input type="number" placeholder="Bet amount" className="form-control" />
                    <div className="select" onClick={() => setOpenSelect(!openSelect)} role="presentation">
                      .USDT
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.41289 11.3815L11.0199 14.9885C11.563 15.5316 12.4404 15.5316 12.9835 14.9885L16.5905 11.3815C17.4679 10.5041 16.8412 9 15.6017 9H8.38776C7.14829 9 6.53552 10.5041 7.41289 11.3815Z"
                          fill="white"
                        />
                      </svg>
                      <div className={openSelect ? 'select-option select-active' : 'select-option'}>
                        <ul>
                          <li className="select-option-active">
                            <div className="d-flex">
                              <img src="./images/tether-icon.svg" alt="" className="me-2" />
                              USDT
                            </div>
                            <img src="./images/check.svg" alt="" className="check" />
                          </li>
                          <li>
                            <div className="d-flex">
                              <img src="./images/tether-icon.svg" alt="" className="me-2" />
                              USDT
                            </div>
                            <img src="./images/check.svg" alt="" className="check" />
                          </li>
                          <li>
                            <div className="d-flex">
                              <img src="./images/tether-icon.svg" alt="" className="me-2" />
                              USDT
                            </div>
                            <img src="./images/check.svg" alt="" className="check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Possible payout:</span> <span className="font-w600">0.00 AGB</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="item-bottom">
              <div className="btn btn-bet">SIGN IN TO PLACE A BET</div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
