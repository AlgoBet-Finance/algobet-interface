/// <reference types="react-scripts" />

interface Window {
  ethereum?: {
    networkVersion: any;
    on(arg0: string, arg1: (accounts: any) => void): unknown;
    isMetaMask?: true;
    request?: (...args: any[]) => Promise<void>;
  };
  BinanceChain?: {
    ethSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
  };
  _store: unknown;
  _workingNode?: string;
}
