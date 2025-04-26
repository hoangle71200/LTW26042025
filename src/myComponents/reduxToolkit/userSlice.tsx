import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import UserManagementService from '../service/UserManagementService'

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLogged: {}
  },
  reducers: {
    login: (state, action) => {
      state.userLogged = action.payload
    },
    logout: (state, action) => {
      state.userLogged = []
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;