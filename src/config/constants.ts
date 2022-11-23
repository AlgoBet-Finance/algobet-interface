import BigNumberJS from 'bignumber.js'
import { ChainId } from '@dynamic-amm/sdk'

export const CHAIN_ID: ChainId = +process.env.REACT_APP_CHAIN_ID!

export const BASE_EXPLORER_URLS = {
  [ChainId.MAINNET]: 'https://etherscan.io',
  [ChainId.RINKEBY]: 'https://rinkeby.etherscan.io',
  [ChainId.BSCTESTNET]: 'https://testnet.bscscan.com/',
}

const NODE_1 = process.env.REACT_APP_NODE_1!
export const nodes = [NODE_1]

export const FAST_INTERVAL = 300
export const SLOW_INTERVAL = 3000

export const BIG_TEN = new BigNumberJS(10)
export const MAX_UINT_256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

// Match constants
export enum MatchStatus {
  NOT_STARTED,
  FIRST_HALF,
  HALF_TIME_BREAK,
  SECOND_HALF,
  EXTRA_TIME,
  PENALTY,
  FINISHED = -1,
  CANCELLED = -10,
  TBD = -11,
  INTERRUPTED = -13,
  POSTPONED = -14,
}