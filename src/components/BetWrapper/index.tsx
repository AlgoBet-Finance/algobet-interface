import React, { useEffect, useState } from 'react'
import { useBetSelector } from 'store/betSlip/hooks'
import Item from './Item'

export default function BetWrapper() {
  const [openPage, setOpenPage] = useState(true)

  const betSlip = useBetSelector()
  if (betSlip.listBet.length === 0) {
    return <></>
  }
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
              <div className="item-inner">
                {betSlip.listBet.length > 0 ? (
                  <>
                    {betSlip.listBet.map((item, index) => (
                      <Item data={item} />
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
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
