import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from 'store/index'
import { useCallback } from 'react'
import { updateDetail } from '.'

export function useNftSelector() {
  const currentNft = useSelector<AppState, AppState['nft']>((state) => state.nft)

  return currentNft
}
 
export function useUpdateNftCallback() {
  const dispatch = useAppDispatch()
  return useCallback(
    (address: number) => {
      dispatch(updateDetail({ id: address }))
      // console.log(address)
    },
    [dispatch]
  )
}
