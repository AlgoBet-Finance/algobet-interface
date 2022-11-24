import React, { useEffect, useState } from 'react'
import $ from 'jquery'

import { baseURL, get } from 'services/api'
import { useAddBetCallback } from 'store/betSlip/hooks'
import { IMatch } from 'interfaces/components/IMatch'
import { timestampToDate, timestampToTime } from 'utils/time'
import { getFlag } from 'utils/flag'

export default function Match() {
  const [matchList, setMatchList] = useState([] as IMatch[])
  useEffect(() => {
    get(`${baseURL}/match/hot-matches`, {
      limit: 50,
      page: 1,
    }).then((response) => {
      console.log('hot-matches :>> ', response.data)
      setMatchList(response.data.hotMatches)
    })
  }, [])

  useEffect(() => {
    const widthCard = $('.match-item')[0]?.offsetWidth + 24
    $('#scroll-left-match').on('click', () => {
      $('#scroll-match').animate({ scrollLeft: ($('#scroll-match').scrollLeft() || 0) - widthCard }, 276)
    })
    $('#scroll-right-match').on('click', () => {
      $('#scroll-match').animate({ scrollLeft: ($('#scroll-match').scrollLeft() || 0) + widthCard }, 276)
    })
  }, [])
  const addBet = useAddBetCallback()
  const betHandle = (item: number) => {
    addBet(item)
  }

  return (
    <div className="match">
      <div className="container">
        <div className="title-h2">
          <h2>Todays hot match</h2>
          {matchList == null ? (
            <></>
          ) : (
            <div className="group-view-btn">
              <button id="scroll-left-match" type="button" className="btn-view btn-prev-next btn-prev">
                <img src="/images/arrow-left.svg" alt="arrow-left" />
              </button>
              <button id="scroll-right-match" type="button" className="btn-view btn-prev-next btn-next">
                <img src="/images/arrow-right.svg" alt="arrow-right" />
              </button>
            </div>
          )}
        </div>
        {matchList == null ? (
          <div className="no-matchs">
            <img src="/images/empty-state.png" alt="empty-state" />
          </div>
        ) : (
          <div className="card-list" id="scroll-match">
            {matchList.length > 0 ? (
              <>
                {matchList.map((match: IMatch) => {
                  if (
                    parseInt(match.matchTime) > new Date().getTime() / 1000 &&
                    parseInt(match.matchTime) < new Date().getTime() / 1000 + 66400
                  ) {
                    return (
                      <div className="match-item">
                        <div className="inner">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column">
                              <span className="fs-16 font-w600"> {timestampToTime(match.matchTime)} </span>
                              <span className="fs-12 text-3"> {timestampToDate(match.matchTime)} </span>
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
                            <div className="bottom-item green" onClick={() => betHandle(match.id)} role="presentation">
                              1.12
                            </div>
                            <div className="bottom-item" onClick={() => betHandle(match.id)} role="presentation">
                              1.12
                            </div>
                            <div className="bottom-item red" onClick={() => betHandle(match.id)} role="presentation">
                              1.12
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return <></>
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
