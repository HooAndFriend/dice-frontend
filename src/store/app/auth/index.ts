// ** Redux Imports
import { authApi } from '@/services'
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

interface UserType {
  user: { accessToken: string; refreshToken: string }
}

const initialState: UserType = {
  user: {
    accessToken: '',
    refreshToken: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = { ...payload.data }
      },
    )
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = { ...payload.data }
      },
    )
  },
})

export default authSlice.reducer

export const getAccessToken = (state: RootState) => state.auth.user.accessToken
