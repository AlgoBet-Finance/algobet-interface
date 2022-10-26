import { Currency, ETHER, Token } from '@dynamic-amm/sdk'

export function isToken(currency: Currency): currency is Token {
  return currency !== ETHER
}
