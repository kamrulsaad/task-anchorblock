import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import { baseApi } from './api/baseApi'

const token = localStorage.getItem('token')
export const store = configureStore({
  reducer,
  preloadedState: {
    auth: {
      token: token ? token : '',
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
