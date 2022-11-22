import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SerializedNft {
  id: number|undefined
  imageUrl?: string
  title?: string
  price?: string
  iconPrice?: string
  totalAmount?: number
  available?: number
}

export interface NftState {
  count: number
  listNft: SerializedNft[]
  nftDetail: SerializedNft
}

export const initialState: NftState = {
  count: 6,
  nftDetail: {
    id: 11,
    imageUrl: '/images/nft-collection/20_.jpg',
    title: 'Star Ticket 20%',
    price: '150',
    iconPrice: '/images/pay/Binance_Logo.png',
    totalAmount: 100,
    available: 80,
  },
  listNft: [
    {
      id: 20,
      imageUrl: '/images/nft-collection/20_.jpg',
      title: 'Star Ticket 20%',
      price: '150',
      iconPrice: '/images/pay/Binance_Logo.png',
      totalAmount: 100,
      available: 80,
    },
    {
      id: 15,
      imageUrl: '/images/nft-collection/15_.jpg',
      title: 'Star Ticket 15%',
      price: '100',
      iconPrice: '/images/pay/Binance_Logo.png',
      totalAmount: 100,
      available: 68,
    },
    {
      id: 10,
      imageUrl: '/images/nft-collection/10_.jpg',
      title: 'Star Ticket 10%',
      price: '50',
      iconPrice: '/images/pay/Binance_Logo.png',
      totalAmount: 1000,
      available: 462,
    },
    {
      id: 5,
      imageUrl: '/images/nft-collection/5_.jpg',
      title: 'Star Ticket 5%',
      price: '20',
      iconPrice: '/images/pay/Binance_Logo.png',
      totalAmount: 5000,
      available: 232,
    },
    {
      id: 3,
      imageUrl: '/images/nft-collection/3_.jpg',
      title: 'Star Ticket 3%',
      iconPrice: '/images/pay/Binance_Logo.png',
      price: '10',
      totalAmount: 10000,
      available: 168,
    },
    {
      id: 0,
      imageUrl: '/images/nft-collection/x_.jpg',
      title: 'Star Ticket Lucky',
      price: '300',
      iconPrice: '/images/pay/Binance_Logo.png',
      totalAmount: 100,
      available: 8,
    },
    {
      id: 1,
      imageUrl: '/images/nft-collection/ctBrazil.jpg',
      title: 'Country Token Brazil',
      iconPrice: '/images/pay/Binance_Logo.png',
      price: '1',
      totalAmount: 100,
      available: 20,
    },
  ],
}

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    updateDetail: (state, action) => {
      console.log(action.payload.id)
      // state.listNft.forEach((item) => {
      //   if (item.id === action.payload.id) {
      //     // console.log(item.id)
      //     // state.nftDetail = {...item}

      //   }
      // })
    },
  },
})

export const { updateDetail } = nftSlice.actions

export default nftSlice.reducer
