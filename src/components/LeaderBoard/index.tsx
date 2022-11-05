/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react'

export default function LeaderBoard() {
  return (
    <div className="leaderboard">
      <div className="container">
        <div className="title-h2">
          <h2>Country Token Leader board</h2>
          <div className="group-view-btn">
            <button type="button" className="btn-view btn-view-all">
              <a href="/">VIEW ALL</a>
            </button>
          </div>
        </div>
        <div>
          <table className="table-lb">
            <thead>
              <tr>
                <th />
                <th>COUNTRY TOKEN</th>
                <th>LARGEST BET AMOUNT</th>
                <th>TOTAL AMOUNT</th>
              </tr>
            </thead>
          </table>
          <div className='empty-info-token'>
            <img src="/images/no-info-country-token.png" alt="no-info-country-token.png" />
          </div>

        </div>
        <div className="what-is-country-token">
          <h4>What is Country Token?</h4>
          <div>
          By the way you own Country Token, using it for betting to increase your asset. Every week, AlgoBet will announce top 10 Country Token with the largest total ownership.
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="show-more-ct">
            BUY COUNTRY TOKEN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
