import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginResponseType } from '../../../types'

const initialState: LoginResponseType = {
  token: '',
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<LoginResponseType>) => {
      state.token = action.payload.token
    },
  },
})

export const { userLoggedIn } = authSlice.actions

export default authSlice.reducer
