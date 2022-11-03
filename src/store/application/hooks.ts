import { AppState, useAppDispatch } from 'store'
import { useSelector } from 'react-redux'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useCallback, useMemo } from 'react'
import { updateETHBalance, updateTokenBalance } from 'store/application'
import { ethersToBigNumberInstance } from 'utils/bigNumber'
import BigNumberJS from 'bignumber.js'
import { useArrayTrackingTokens } from 'store/tokens/hooks'
// import { useBep20Contracts } from 'hooks/useContract'
import { Contract } from 'ethers'

/*********************************  ETH  *********************************/

export function useETHBalance(): BigNumberJS | undefined {
  const ethBalance = useSelector<AppState, AppState['application']['ethBalance']>(
    (state) => state.application.ethBalance
  )
  return useMemo(() => ethBalance && new BigNumberJS(ethBalance), [ethBalance])
}

// export function useGetETHBalanceAndSyncToStoreCallback() {
//   const { account, library } = useActiveWeb3React()
//   const dispatch = useAppDispatch()

//   return useCallback(() => {
//     const getETHBalanceAndSyncToStore = async () => {
//       if (account && library) {
//         const signer = library.getSigner(account)
//         const weiBalance = await signer.getBalance()
//         dispatch(updateETHBalance({ ethBalance: ethersToBigNumberInstance(weiBalance) }))
//       }
//     }
//     getETHBalanceAndSyncToStore()
//   }, [account, dispatch, library])
// }

/*********************************  Token  *********************************/

export function useTrackingTokenBalances(): { [address: string]: BigNumberJS.Instance | null | undefined } {
  return useSelector<AppState, AppState['application']['trackingTokenBalances']>(
    (state) => state.application.trackingTokenBalances
  )
}

// For iterating convenient.
export function useArrayTrackingTokenBalances(): {
  address: string
  balance: BigNumberJS.Instance | null | undefined
}[] {
  const trackingTokenBalances = useSelector<AppState, AppState['application']['trackingTokenBalances']>(
    (state) => state.application.trackingTokenBalances
  )

  return useMemo(
    () =>
      Object.keys(trackingTokenBalances).reduce(
        (acc: { address: string; balance: BigNumberJS.Instance | null | undefined }[], address) => [
          ...acc,
          { address, balance: trackingTokenBalances[address] },
        ],
        []
      ),
    [trackingTokenBalances]
  )
}

export function useTrackingTokenBalance(address?: string): BigNumberJS | null | undefined {
  const trackingTokenBalance = useSelector<AppState, AppState['application']['trackingTokenBalances']>(
    (state) => state.application.trackingTokenBalances
  )[address ?? '']
  return useMemo(() => trackingTokenBalance && new BigNumberJS(trackingTokenBalance), [trackingTokenBalance])
}

// export function useGetTrackingTokenBalancesAndSyncToStoreCallback() {
//   const { account } = useActiveWeb3React()
//   const trackingTokens = useArrayTrackingTokens()
//   const trackingTokenAddresses = trackingTokens.map(({ address }) => address)
//   const contracts = useBep20Contracts(trackingTokenAddresses)
//   const dispatch = useAppDispatch()

//   return useCallback(() => {
//     const getTokenBalanceAndSyncToStore = async (address: string, contract: Contract | undefined) => {
//       if (account && contract) {
//         const balance = await contract.balanceOf(account)
//         dispatch(updateTokenBalance({ address, balance: ethersToBigNumberInstance(balance) }))
//       }

//       return undefined
//     }

//     const promises = contracts.map((contract, index) =>
//       getTokenBalanceAndSyncToStore(trackingTokenAddresses[index], contract)
//     )

//     Promise.allSettled(promises)
//   }, [account, contracts, dispatch, trackingTokenAddresses])
// }
