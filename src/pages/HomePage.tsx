/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useMemo, useState } from 'react'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import useConnectWalletCallback from 'hooks/useConnectWalletCallback'

const Home = () => {
  const { account } = useActiveWeb3React()
  const connectWallet = useConnectWalletCallback()

  // useEffect(() => {
  //   if (!account) connectWallet()
  // }, [account, connectWallet])

  const handleConnectWallet = () => {
    if (!account) {
      connectWallet()
    }
  }
  return (
    <div>
      <button type='button' className='btn btn-connect-wallet' onClick={handleConnectWallet}>
        {
          account || 'CONNECT WALLET'
        }
      </button>

    </div>
  )
}
export default Home
