import { useCallback } from 'react'
import { injected } from 'config/web3'
import { UnsupportedChainIdError } from '@web3-react/core'

import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import setupNetwork from 'config/setupNetwork'
import { ChainId } from '@dynamic-amm/sdk'

export default function useConnectWalletCallback(chainId : any) {
  const { activate } = useActiveWeb3React(chainId)

  return useCallback(() => {
    activate(injected, async (error: Error) => {
      if (error instanceof UnsupportedChainIdError) {
        const hasSetup = await setupNetwork(chainId)
        console.log(1, hasSetup)
        if (hasSetup) {
          await activate(injected)
        }
      }
    })
  }, [activate, chainId])
}
