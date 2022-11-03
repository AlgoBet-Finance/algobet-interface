import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'config/web3'
import { Provider } from 'react-redux'
import store from 'store'
import ApplicationUpdater from 'store/application/ApplicationUpdater'
import BlockUpdater from 'store/block/BlockUpdater'
// import TransactionsUpdater from 'store/transactions/TransactionsUpdater'
// import TokensUpdater from 'store/tokens/TokensUpdater'
import App from 'pages/App'
import BigNumberJS from 'bignumber.js'
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss'

import './style/index.scss'
import './fonts/Teko-Regular.ttf'

BigNumberJS.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

window._store = store

function Updaters() {
  return (
    <>
      <ApplicationUpdater />
      <BlockUpdater />
      {/* <TransactionsUpdater />
      <TokensUpdater /> */}
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Updaters />
        <App />
      </Provider>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
