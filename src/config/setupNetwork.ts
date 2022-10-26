import { BASE_EXPLORER_URLS, CHAIN_ID, nodes } from 'config/constants'
import { ChainId } from '@dynamic-amm/sdk'

export default async function setupNetwork() {
  const provider = window.ethereum
  if (provider?.request) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${CHAIN_ID.toString(16)}`,
            chainName: `BSC ${CHAIN_ID === ChainId.MAINNET ? 'Mainnet' : 'Testnet'}`,
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            rpcUrls: nodes,
            // @ts-ignore
            blockExplorerUrls: [BASE_EXPLORER_URLS[CHAIN_ID]],
          },
        ],
      })
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${CHAIN_ID.toString(16)}`,
            chainName: `BSC ${CHAIN_ID === ChainId.MAINNET ? 'Mainnet' : 'Testnet'}`,
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18,
            },
            rpcUrls: nodes,
            // @ts-ignore
            blockExplorerUrls: [BASE_EXPLORER_URLS[CHAIN_ID]],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the ETH network on metamask because window.ethereum is undefined")
    return false
  }
}
