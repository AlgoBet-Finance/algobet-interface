import Localization from 'components/Localization'
import React, { useEffect, useState } from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="footer-s1">
          <div className="nav-footer">
            <a href="/">About Algobet</a>
            <a href="/">White paper</a>
            <a href="/">Pichdeck</a>
          </div>
          <Localization />
        </div>
        <div className="footer-s2">
          <div>
            <div className="footer-title">Follow us</div>
            <div className="icon-footer">
              <a href="/">
                <img src="/images/telegram.svg" alt="telegram" />
              </a>
              <a href="/">
                <img src="/images/twitter.svg" alt="twitter" />
              </a>
            </div>
          </div>
          <div style={{ marginLeft: 112, marginRight: 145 }}>
            <div className="footer-title">Platforms</div>
            <div className="icon-footer">
              <a href="/">
                <img src="/images/network/sol.png" alt="sol" />
              </a>
              <a href="/">
                <img src="/images/network/poly.png" alt="poly" />
              </a>
              <a href="/">
                <img src="/images/network/ava.png" alt="ava" />
              </a>
              <a href="/">
                <img src="/images/network/algo.png" alt="algo" />
              </a>
              <a href="/">
                <img src="/images/binance-yellow.svg" alt="Binance" />
              </a>
            </div>
          </div>
          <div>
            <div className="footer-title" style={{ marginBottom: 24 }}>
              Contact us
            </div>
            <div>contact@algobet-sports.com</div>
          </div>
        </div>
        <div className="footer-s3">
          <div>Copyright by @AlgoBet, All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}
