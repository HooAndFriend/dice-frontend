// ** Redux Imports
import { authApi } from '@/services'
import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

export interface UserTypeProps {
  user: {
    token: { accessToken: string; refreshToken: string }
    user: { nickname: string; profile: string; email: string }
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
      profile: '',
      email: '',
    },
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = { ...initialState.user }
    },
    updateToken: (state, { payload }) => {
      state.user.token.accessToken = payload
    },
  },
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
    ),
      builder.addMatcher(
        authApi.endpoints.socialRegister.matchFulfilled,
        (state, { payload }) => {
          state.user = { ...payload.data }
        },
      )
  },
})

export default authSlice.reducer

export const getAccessToken = (state: RootState) =>
  state.auth.user.token.accessToken

export const getUserInfo = (state: RootState) => state.auth.user.user

export const { logout, updateToken } = authSlice.actions
