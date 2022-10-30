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
                <th>MATCH</th>
                <th>USER</th>
                <th>TIME</th>
                <th>ODDS</th>
                <th>BET AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LIV vs MU</td>
                <td>Steve Roger</td>
                <td>8:05 AM</td>
                <td>2.30</td>
                <td>
                  <div className="d-flex justify-content-end align-items-center">
                    4144
                    <img src="/images/tether-icon.svg" alt="tether-icon" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>LIV vs MU</td>
                <td>Steve Roger</td>
                <td>8:05 AM</td>
                <td>5.16</td>
                <td>
                  <div className="d-flex justify-content-end align-items-center">
                    56743
                    <img src="/images/agb-icon.svg" alt="tether-icon" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>LIV vs MU</td>
                <td>Steve Roger</td>
                <td>8:05 AM</td>
                <td>3.13</td>
                <td>
                  <div className="d-flex justify-content-end align-items-center">
                    44673
                    <img src="/images/agb-icon.svg" alt="tether-icon" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>LIV vs MU</td>
                <td>Steve Roger</td>
                <td>8:05 AM</td>
                <td>6.53</td>
                <td>
                  <div className="d-flex justify-content-end align-items-center">
                    98097
                    <img src="/images/tether-icon.svg" alt="tether-icon" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>LIV vs MU</td>
                <td>Steve Roger</td>
                <td>8:05 AM</td>
                <td>2.30</td>
                <td>
                  <div className="d-flex justify-content-end align-items-center">
                    7.65
                    <img src="/images/agb-icon.svg" alt="tether-icon" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="what-is-country-token">
          <h4>What is Country Token?</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="show-more-ct">
              SHOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
