import { combineReducers } from '@reduxjs/toolkit'

import { assets } from './slices/assetsSlice'

export const reducer = combineReducers({
  assets: assets.reducer
})
