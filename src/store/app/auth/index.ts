// ** Redux Imports
import { authApi } from '@/services'
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

export interface UserTypeProps {
  user: {
    token: { accessToken: string; refreshToken: string }
    user: { nickname: string }
  }
}

const initialState: UserTypeProps = {
  user: {
    token: {
      accessToken: '',
      refreshToken: '',
    },
    user: {
      nickname: '',
    },
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
    builder.addMatcher(
      authApi.endpoints.socialLogin.matchFulfilled,
      (state, { payload }) => {
        state.user = { ...payload.data }
      },
    )
  },
})

export default authSlice.reducer

export const getAccessToken = (state: RootState) =>
  state.auth.user.token.accessToken
