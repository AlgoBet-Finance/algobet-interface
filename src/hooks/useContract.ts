import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { useCallback, useMemo } from 'react'
import { Contract, ethers } from 'ethers'
import bep20Abi from 'config/abis/bep20.json'
import stakingAbi from 'config/abis/staking.json'
import lotteryAbi from 'config/abis/lottery.json'
import prizePoolAbi from 'config/abis/prizePool.json'
import { isAddress } from 'ethers/lib/utils'
import useSimpleRpcProvider from 'hooks/useSimpleRpcProvider'

export function useGetContractCallback() {
  const simpleRpcProvider = useSimpleRpcProvider()

  return useCallback(
    (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider): Contract | undefined => {
      const signerOrProvider = signer ?? simpleRpcProvider
      if (signerOrProvider === undefined) return undefined
      return new ethers.Contract(address, abi, signerOrProvider)
    },
    [simpleRpcProvider]
  )
}

export function useGetBEP20ContractCallback() {
  const { account, library } = useActiveWeb3React()
  const getContract = useGetContractCallback()

  return useCallback(
    (address: string, abi?: any): Contract | undefined =>
      getContract(abi ?? bep20Abi, address, account && library ? library.getSigner(account) : library),
    [getContract, account, library]
  )
}

export function useBep20Contracts(addresses: string[], abis?: any[]): (Contract | undefined)[] {
  const getBEP20Contract = useGetBEP20ContractCallback()

  return useMemo(
    () => addresses.map((address, index) => (isAddress(address) ? getBEP20Contract(address, abis ? abis[index] : undefined) : undefined)),
    [abis, addresses, getBEP20Contract]
  )
}

export function useStakingContract() {
  const { account, library } = useActiveWeb3React()
  const getContract = useGetContractCallback()

  return useMemo(() => {
    return getContract(
      stakingAbi,
      process.env.REACT_APP_STAKING_CONTRACT!,
      account && library ? library.getSigner(account) : library
    )
  }, [account, getContract, library])
}

export function useLotteryContract() {
  const { account, library } = useActiveWeb3React()
  const getContract = useGetContractCallback()

  return useMemo(() => {
    return getContract(
      lotteryAbi,
      process.env.REACT_APP_LOTTERY_CONTRACT!,
      account && library ? library.getSigner(account) : library
    )
  }, [account, getContract, library])
}

export function usePrizePoolContract() {
  const { account, library } = useActiveWeb3React()
  const getContract = useGetContractCallback()

  return useMemo(() => {
    return getContract(
      prizePoolAbi,
      process.env.REACT_APP_PRIZE_POOL_CONTRACT!,
      account && library ? library.getSigner(account) : library
    )
  }, [account, getContract, library])
}
