import React, { useEffect, useState } from 'react'
import $ from 'jquery'

import { baseURL, get } from 'services/api'
import { IMatch } from 'interfaces/components/IMatch'
import { timestampToDate, timestampToTime } from 'utils/time'
import { getFlag } from 'utils/flag'

export default function MatchComing() {
  const [matchList, setMatchList] = useState([] as any[])
  useEffect(() => {
    get(`${baseURL}/match`, {
      limit: 30,
      page: 1,
    }).then((response) => {
      console.log('comming-matches :>> ', response.data)
      setMatchList(response.data.matches)
    })
  }, [])

  useEffect(() => {
    const widthCard = $('.match-item')[0]?.offsetWidth + 24
    $('#scroll-left-matchComing').on('click', () => {
      $('#scroll-matchComing').animate({ scrollLeft: ($('#scroll-matchComing').scrollLeft() || 0) - widthCard }, 276)
    })
    $('#scroll-right-matchComing').on('click', () => {
      $('#scroll-matchComing').animate({ scrollLeft: ($('#scroll-matchComing').scrollLeft() || 0) + widthCard }, 276)
    })
  }, [])
  return (
    <div className="match">
      <div className="container">
        <div className="title-h2">
          <h2>Up comming match</h2>
          <div className="group-view-btn">
            <button type="button" className="btn-view btn-view-all">
              <a href="/">VIEW ALL</a>
            </button>
            <button id="scroll-left-matchComing" type="button" className="btn-view btn-prev-next btn-prev">
              <img src="/images/arrow-left.svg" alt="arrow-left" />
            </button>
            <button id="scroll-right-matchComing" type="button" className="btn-view btn-prev-next btn-next">
              <img src="/images/arrow-right.svg" alt="arrow-right" />
            </button>
          </div>
        </div>
        <div className="card-list" id="scroll-matchComing">
          {matchList.map((match: IMatch) => (
            <div className="match-item">
              <div className="inner">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column">
                    <span className="fs-16 font-w600">{timestampToTime(match.matchTime)}</span>
                    <span className="fs-12 text-3">{timestampToDate(match.matchTime)}</span>
                  </div>
                  <div className="flags">
                    <div className="flags-item">
                      <img src={getFlag(match.homeTeamCode)} alt={match.homeTeamName} />
                    </div>
                    <div className="flags-item">
                      <img src={getFlag(match.awayTeamCode)} alt={match.awayTeamName} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-24 font-w600"> {match.homeTeamName} </span>
                    <span className="fs-24 font-w600"> {match.homeScore} </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-24 text-2"> {match.awayTeamName} </span>
                    <span className="fs-24 text-2"> {match.awayScore} </span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom-item green">1.12</div>
                  <div className="bottom-item ">1.12</div>
                  <div className="bottom-item red">1.12</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
