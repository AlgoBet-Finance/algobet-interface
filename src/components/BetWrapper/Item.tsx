import React, { useEffect, useState } from 'react'
import { useUpdateBetCallback } from 'store/betSlip/hooks'

export default function Item({ data }: any) {
  const [openSelect, setOpenSelect] = useState(false)
  // console.log(data, 'data')
  const deleteBet = useUpdateBetCallback()
  const betHandle = () => {
    // deleteBet(data.id)
  }
  return (
    <ul className="item-list">
      <li>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span>Full time result</span>- <span className="font-w600">{data.id}</span>
            <p className="text-3">{data.homeTeamName} - {data.awayTeamName}</p>
          </div>
          <span className="fs-20 font-w600">1.12</span>
        </div>
      </li>
      <li>
        {' '}
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
          <div className="" onClick={() => betHandle()} role="presentation">
            Xóa
          </div>

          <span>
            Possible payout: <span className="font-w600">0.00 AGB</span>
          </span>
        </div>
      </li>
    </ul>
  )
}
