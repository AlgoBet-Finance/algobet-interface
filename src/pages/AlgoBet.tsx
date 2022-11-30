/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper'
import News from 'components/News'
import HotNFT from 'components/HotNFT'
import Match from 'components/Match'
import MatchComing from 'components/MatchComing'
import CTA from 'components/CTA'
import Featured from 'components/Featured'
import LeaderBoard from 'components/LeaderBoard'
import { IMatch } from 'interfaces/components/IMatch'
import { get } from 'services/api'
import { getFlag } from 'utils/flag'
import { timestampToDate, timestampToTime } from 'utils/time'

// Import Swiper styles

const AlgoBet = () => {
  const [tab, setTab] = useState('All Matches')
  // const matchList = [{ id: 3 }, { id: 4 }, { id: 5 }]
  const [matchList, setMatchList] = useState([] as IMatch[])
  useEffect(() => {
    get(`/match`, {
      limit: 30,
      page: 1,
    }).then((response) => {
      console.log('alll-matches  :>> ', response.data)
      setMatchList(response.data.matches)
    })
  }, [])
  return (
    <div className="algoBet">
      <Match />
      <div className="container">
        <h2>All football matches</h2>
        <div className="all-football-matches">
          <div className="match-tab">
            <div
              className={`tab-item ${tab === 'All Matches' ? 'active' : ''}`}
              role="presentation"
              onClick={() => setTab('All Matches')}
            >
              All Matches
            </div>
            <div
              className={`tab-item ${tab === 'Bet Placed' ? 'active' : ''}`}
              role="presentation"
              onClick={() => setTab('Bet Placed')}
            >
              Bet Placed
            </div>
          </div>
          {tab === 'All Matches' ? (
            <table className="table-match">
              <thead>
                <tr>
                  <th>
                    <div>Group A</div>
                  </th>
                  <th />
                  <th />
                  <th>
                    <div>1</div>
                  </th>
                  <th>
                    <div>X</div>
                  </th>
                  <th>
                    <div>2</div>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {matchList.map((match: IMatch) => (
                  <tr key={match.id}>
                    <td>
                      <div className="time">
                        <span className="fs-16 font-w600"> {timestampToTime(match.matchTime)} </span>
                        <br />
                        <span className="fs-12 d-block"> {timestampToDate(match.matchTime)} </span>
                      </div>
                    </td>
                    <td>
                      {/* <div>
                        <div className="soon">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle opacity="0.2" cx="6" cy="6" r="5.5" stroke="#F74141" />
                            <circle cx="6" cy="6" r="3" fill="#F74141" />
                          </svg>
                          75:15
                        </div>
                      </div> */}
                    </td>
                    <td>
                      <div className="match-rs">
                        <span> {match.homeTeamName}</span>
                        <img src={getFlag(match.homeTeamCode)} alt={match.homeTeamName} />
                        <div className="match-score">
                          {match.homeScore} : {match.awayScore}
                        </div>
                        <img src={getFlag(match.awayTeamCode)} alt={match.awayTeamName} />
                        <span> {match.awayTeamName}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="bet-box">1.12</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="bet-box">2.47</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="bet-box">10.55</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/images/insert_chart.svg" alt="insert_chart" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="table-match table-bet">
              <thead>
                <tr>
                  <th>
                    <div>Date</div>
                  </th>
                  <th />
                  <th>
                    <div>Match</div>
                  </th>
                  <th>
                    <div>Odd</div>
                  </th>
                  <th>
                    <div>Status</div>
                  </th>
                  <th>
                    <div>Bet</div>
                  </th>
                  <th>
                    <div>Payout</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[].map((match: IMatch) => (
                  <tr key={match.id}>
                    <td>
                      <div>08:00</div>
                    </td>
                    <td>
                      <div>
                        <div className="soon">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle opacity="0.2" cx="6" cy="6" r="5.5" stroke="#F74141" />
                            <circle cx="6" cy="6" r="3" fill="#F74141" />
                          </svg>
                          75:15
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="match-rs">
                        Manchester United
                        <img src="/images/team/mu.svg" alt="mu" />
                        <div className="match-score">3:3</div>
                        <img src="/images/team/tot.svg" alt="mu" />
                        Tottenham Hotspur
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="bet-box">1.12</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="bet-box">2.47</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="bet-box">10.55</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <img src="/images/insert_chart.svg" alt="insert_chart" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
export default AlgoBet
