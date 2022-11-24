import { MatchStatus } from 'config/constants'

export interface IMatch {
  id: number
  matchId: string
  matchTime: string
  minutePlayed?: number
  status: MatchStatus
  homeTeamName: string
  homeTeamCode:string
  awayTeamCode:string
  awayTeamName: string
  homeScore?: number
  awayScore?: number
  penHomeScore?: number
  penAwayScore?: number
}

export interface IMatchDetail {
  id: number
  matchId: string
  homeId: string
  awayId: string
  createdAt: string
  updatedAt: string
  matchInfo: IMatchInfo
  homeTeam: ITeam
  awayTeam: ITeam
  odds: any[]
  events: any[]
  matchStats: any[]
  penalties: any[]
}

export interface IMatchInfo {
  id: number
  matchId: string
  matchTime: string
  halfStartTime: string
  timeStartExtraTime?: string
  minutePlayed: number
  status: MatchStatus
  homeScore: number
  awayScore: number
  extraHomeScore?: number
  extraAwayScore?: number
  penHomeScore?: number
  penAwayScore?: number
  isHotMatch: boolean
  isUpdateToExtraTime: boolean
  createdAt?: string
  updatedAt?: string
}

export interface ITeam {
  id: number
  teamId: string
  name: string
  logoUrl: string
  createdAt?: string
  updatedAt?: string
}
