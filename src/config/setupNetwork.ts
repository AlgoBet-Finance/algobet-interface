import { BASE_EXPLORER_URLS, CHAIN_ID, nodes } from 'config/constants'
import { ChainId } from '@dynamic-amm/sdk'



export default async function setupNetwork(selectedChainId : any) {
  const provider = window.ethereum
  //default BSC Mainet
  let param = {
    chainId: `0x${selectedChainId.toString(16)}`,
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com']
  }
  if (selectedChainId === ChainId.BSCTESTNET) {
    param = {
      chainId: `0x${selectedChainId.toString(16)}`,
      chainName: "Smart Chain - Testnet",
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorerUrls: ["https://testnet.bscscan.com"],
    }
  }
  else if (selectedChainId === ChainId.AVAXMAINNET) {
    param = {
      chainId: `0x${selectedChainId.toString(16)}`,
      chainName: "Avalanche Mainnet C-Chain",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://snowtrace.io/"],
    }
  } else if (selectedChainId === ChainId.MATIC) {
    param = {
      chainId: `0x${selectedChainId.toString(16)}`,
      chainName: 'Matic(Polygon) Mainnet',
      nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
      rpcUrls: ['https://polygon-rpc.com'],
      blockExplorerUrls: ['https://www.polygonscan.com'],
    }
  }
  if (provider?.request) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          param,
        ],
      })
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: param.chainId,
          },
        ],
      })
      return true
    } catch (error) {
      console.log(error)
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error("Can't setup the ETH network on metamask because window.ethereum is undefined")
    return false
  }
}
