import BigNumberJS from 'bignumber.js'
import { ethers } from 'ethers'
import { BIG_TEN } from 'config/constants'

export function bigNumberToEthers(bn: BigNumberJS): ethers.BigNumber {
  return ethers.BigNumber.from(bn.toString())
}

export function ethersToBigNumber(ethersBn: ethers.BigNumber): BigNumberJS {
  return new BigNumberJS(ethersBn.toString())
}

export function ethersToBigNumberInstance(ethersBn: ethers.BigNumber): BigNumberJS.Instance {
  const { s, e, c } = new BigNumberJS(ethersBn.toString())
  return {
    s,
    e,
    c,
    _isBigNumber: true, // Must have.
  }
}

/**
 * Take a formatted amount, e.g. 15 ETH and convert it to full decimal value, e.g. 15000000000000000
 */
export const getDecimalAmount = (amount: BigNumberJS, decimals = 18) => {
  return new BigNumberJS(amount).times(BIG_TEN.pow(decimals))
}

export function getBalanceAmount(amount: BigNumberJS, decimals = 18): BigNumberJS {
  return new BigNumberJS(amount).dividedBy(BIG_TEN.pow(decimals))
}

export function getFullDisplayBalance(balance: BigNumberJS, decimals = 18, displayDecimals = 18): string {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals)
}
