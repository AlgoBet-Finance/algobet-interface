import { useCallback } from 'react'
import { injected } from 'config/web3'
import { UnsupportedChainIdError } from '@web3-react/core'

import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import setupNetwork from 'config/setupNetwork'

export default function useConnectWalletCallback() {
  const { activate } = useActiveWeb3React()

  return useCallback(() => {
    activate(injected, async (error: Error) => {
      if (error instanceof UnsupportedChainIdError) {
        const hasSetup = await setupNetwork()
        if (hasSetup) {
          await activate(injected)
        }
      }
    })
  }, [activate])
}
