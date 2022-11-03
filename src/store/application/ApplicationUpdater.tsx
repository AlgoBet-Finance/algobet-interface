import { useEffect } from 'react';
import useIsWindowVisible from 'hooks/useIsWindowVisible';
// import {
//   useGetETHBalanceAndSyncToStoreCallback,
//   useGetTrackingTokenBalancesAndSyncToStoreCallback,
// } from 'store/application/hooks';
import { useCurrentBlock } from 'store/block/hooks';

export default function ApplicationUpdater() {
  const isWindowVisible = useIsWindowVisible();
  // const getETHBalance = useGetETHBalanceAndSyncToStoreCallback();
  // const getTokenBalances = useGetTrackingTokenBalancesAndSyncToStoreCallback();
  const currentBlock = useCurrentBlock();

  // useEffect(() => {
  //   const fetchData = () => {
  //     getETHBalance();
  //     getTokenBalances();
  //   };

  //   if (isWindowVisible) {
  //     fetchData();
  //   }
  // }, [isWindowVisible, getETHBalance, getTokenBalances, currentBlock]);

  return null;
}
