import { useSelector } from 'react-redux'
import { IMatch } from 'interfaces/components/IMatch'
import { AppState, useAppDispatch } from 'store/index'
import { useCallback } from 'react'
import { addBet, updateBet } from '.'

export function useBetSelector() {
  const currentBet = useSelector<AppState, AppState['betSlip']>((state) => state.betSlip)

  return currentBet
}
export function useAddBetCallback() {
  const dispatch = useAppDispatch()
  return useCallback(
    (item: IMatch) => {
      dispatch(addBet(item))
    },
    [dispatch]
  )
}
export function useUpdateBetCallback() {
  const dispatch = useAppDispatch()
  return useCallback(
    (address: number) => {
      dispatch(updateBet({ id: address }))
    },
    [dispatch]
  )
}
