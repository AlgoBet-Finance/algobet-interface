import reducer, { updateETHBalance } from 'store/application';
import { ethersToBigNumberInstance } from 'utils/bigNumber';
import { ethers } from 'ethers';
import { Action } from '@reduxjs/toolkit';

test('Return initial state of application', () => {
  expect(reducer(undefined, {} as Action)).toEqual({
    ethBalance: undefined,
    trackingTokenBalances: {},
  });
});

test('Update ETH balance', () => {
  const previousState = {
    ethBalance: undefined,
    trackingTokenBalances: {},
  };

  const balanceInWei = ethers.utils.parseEther('123');
  const newETHBalance = ethersToBigNumberInstance(balanceInWei);

  const expectedETHBalance = ethersToBigNumberInstance(ethers.BigNumber.from('123000000000000000000'));

  expect(reducer(previousState, updateETHBalance({ ethBalance: newETHBalance }))).toEqual({
    ethBalance: expectedETHBalance,
    trackingTokenBalances: {},
  });
});
