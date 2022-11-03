/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ChainId } from '@dynamic-amm/sdk';
import _ from 'lodash';

import Header from 'components/Header'

import Footer from 'components/Footer'
import Home from './HomePage'
import Promotions from './PromotionPage'
import MarketplacePage from './MarketplacePage'
import ComingSoon from './ComingSoon'

const ParamNetwork = {
  BSCMAINNET: {
      chainId: `0x${ChainId.BSCMAINNET.toString(16)}`,
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
          name: 'Binance Coin',
          symbol: 'BNB',
          decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com']
    },
    BSCTESTNET: {
      chainId: `0x${ChainId.BSCTESTNET.toString(16)}`,
      chainName: "Smart Chain - Testnet",
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      blockExplorerUrls: ["https://testnet.bscscan.com"],
    },  
    AVAXMAINNET: {
      chainId: `0x${ChainId.AVAXMAINNET.toString(16)}`,
      chainName: "Avalanche Mainnet C-Chain",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://snowtrace.io/"],
    }, 
    MATIC: {  
      chainId: `0x${ChainId.MATIC.toString(16)}`,
      chainName: 'Matic(Polygon) Mainnet',
      nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
      rpcUrls: ['https://polygon-rpc.com'],
      blockExplorerUrls: ['https://www.polygonscan.com'],
    }, 
};

async function setupNetwork(selectedChainId : any) {
  const provider = window.ethereum
  //default BSC Mainet
  
  let param = ParamNetwork.BSCMAINNET
  if (selectedChainId === ChainId.BSCTESTNET) {
    param = ParamNetwork.BSCTESTNET
  }
  else if (selectedChainId === ChainId.AVAXMAINNET) {
    param = ParamNetwork.AVAXMAINNET
  } else if (selectedChainId === ChainId.MATIC) {
    param = ParamNetwork.MATIC
  }
  if (provider?.request) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: `0x${selectedChainId.toString(16)}`,
          },
        ],
      })
    } catch(err: any) {
      console.log(err)
      if (err.code === 4902) {
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
              chainId: `0x${selectedChainId.toString(16)}`,
            },
          ],
        })
      }
    }
  } else {
    console.error("Can't setup the ETH network on metamask because window.ethereum is undefined")
  }
}


const DefaultLayout = () => {
  const [chainId, setChainId] = useState(ChainId.BSCMAINNET)
  const [account, setAccount] = useState('')

  const handleConnectWallet = async () => {
    const provider = window.ethereum
    if (provider?.request) {
      try {
        await setupNetwork(chainId)
        const accountMtm: any = await provider.request({
          method: 'eth_accounts',
        })
        setAccount(accountMtm[0])
      } catch(e) {
        
      }
    }
  }

  useEffect(() => {
    async function initData() {
      const provider = window.ethereum
      if (provider) {
        provider.on('accountsChanged', (accounts) => {
          if (accounts.length === 0) {
            setAccount('')
          } else {
            setAccount(accounts[0])
          }
        })
        provider.on('networkChanged', (networkId) => {
          setChainId(parseInt(networkId, 10))
        })
      }
    }
    initData()
  }, [])
  
  return (
    <div className="app">
      <BrowserRouter>
        <Header 
        handleConnectWallet={handleConnectWallet} 
        account={account} 
        chainId={chainId} 
        setChainId={setChainId}  
        setupNetwork={setupNetwork}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/algobet" element={<ComingSoon />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default DefaultLayout
