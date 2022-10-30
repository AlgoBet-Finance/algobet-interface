import React, { useEffect, useState } from 'react'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import useConnectWalletCallback from 'hooks/useConnectWalletCallback'

const LENGTH_TRUNCATE_ADDRESS = 15;
export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [state, setState] = useState(false)
  const { account } = useActiveWeb3React()
  const connectWallet = useConnectWalletCallback()
  const [openPopup, setOpenPopup] = useState(false)

  // useEffect(() => {
  //   if (!account) connectWallet()
  // }, [account, connectWallet])

  const handleConnectWallet = () => {
    if (!account) {
      connectWallet()
    }
  }
  const truntcateAccount = (walletAddress: string) => {
    return `${walletAddress.substring(0,LENGTH_TRUNCATE_ADDRESS)  }...`;
  }
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setScreenWidth(window.innerWidth)
      }
    }
    // window.addEventListener('resize', handleResize)

    const header = document.getElementById('header')
    const backToTop = document.getElementById('back-to-top')
    let sticky: number
    if (header) {
      sticky = header.offsetTop
    }

    function onScroll() {
      if (window.pageYOffset > sticky) {
        if (header && backToTop) {
          header.classList.add('bg-header')
          backToTop.style.display = 'flex'
        }
      } else if (header && backToTop) {
        header.classList.remove('bg-header')
        backToTop.style.display = 'none'
      }
    }
    window.addEventListener('scroll', onScroll)

    if (window.pageYOffset > 0) {
      if (header && backToTop) {
        header.classList.add('bg-header')
        backToTop.style.display = 'flex'
      }
    }
  }, [])
  const handelShow = () => {
    setState(!state)
  }
  // useEffect(() => {
  //   if (!state) return
  //   function handleClick() {
  //     if (mobile.current) {
  //       setState(false)
  //     }
  //   }
  //   window.addEventListener('click', handleClick)
  //   return () => window.removeEventListener('click', handleClick)
  // }, [state])
  return (
    <div id="header" className="header">
      <div className="header-left">
        <a href="./" className="header-logo">
          <img className="" src="/images/logo.svg" alt="logo" />
        </a>
        <div className="nav desktop">
          <a href="/#home" className="nav-item nav-active ">
            Home
          </a>
          <a href="/#what-is-algobet" className="nav-item">
            SPORTS
          </a>
          <a href="/#features" className="nav-item">
            CASINO
          </a>
          <a href="/#token" className="nav-item">
            PROMOTIONS
          </a>
          <a href="/#roadmap" className="nav-item">
            NEWS
          </a>
        </div>
      </div>
      <div className="gr-btn">
        <div className="btn btn-network" role="presentation" onClick={() => setOpenPopup(true)}>
          <div className="d-flex">
            <img className="" src="/images/network/Binance.png" alt="BNB" />
            BNB Chain
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.41289 11.3815L11.0199 14.9885C11.563 15.5316 12.4404 15.5316 12.9835 14.9885L16.5905 11.3815C17.4679 10.5041 16.8412 9 15.6017 9H8.38776C7.14829 9 6.53552 10.5041 7.41289 11.3815Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <button type="button" className="btn btn-connect-wallet" onClick={handleConnectWallet}>
          {account ? truntcateAccount(account) : 'CONNECT WALLET'}
        </button>
      </div>
      <div className="btn btn--close" role="presentation" onClick={() => handelShow()}>
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 24H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 38H42" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <ul className={state ? 'mobile active' : 'mobile '}>
        <li>
          <a href="/#home" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="/#what-is-algobet" className="nav-item">
            What is Algobet
          </a>
        </li>
        <li>
          <a href="/#features" className="nav-item">
            Features
          </a>
        </li>
        <li>
          <a href="/#token" className="nav-item">
            Token
          </a>
        </li>
        <li>
          <a href="/#roadmap" className="nav-item">
            Roadmap
          </a>
        </li>

        <li>
          <a href="/#partner" className="nav-item">
            Partner
          </a>
        </li>
      </ul>
      <div className="modal" style={{ display: openPopup ? 'flex' : 'none' }}>
        <div className="modal-wallet">
          <div className="modal-body">
            <div className="modal-header">
              <span className="fs-24 font-w600"> Select a NetWork</span>
              <i role="presentation" onClick={() => setOpenPopup(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L12 10.5858L19.2929 3.29289C19.6834 2.90237 20.3166 2.90237 20.7071 3.29289C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L13.4142 12L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L12 13.4142L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L10.5858 12L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z"
                    fill="white"
                  />
                </svg>
              </i>
            </div>
            <div className="network-list">
              <div className="network-item network-active">
                <img className="" src="/images/network/Binance.png" alt="BNB" />
                BNB Chain
              </div>
              <div className="network-item">
                <img className="" src="/images/network/algo.png" alt="BNB" />
                Algorand
              </div>
              <div className="network-item">
                <img className="" src="/images/network/poly.png" alt="BNB" />
                Polygon
              </div>
              <div className="network-item">
                <img className="" src="/images/network/ava.png" alt="BNB" />
                Avalanche
              </div>
              <div className="network-item">
                <img className="" src="/images/network/sol.png" alt="BNB" />
                Solana
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
