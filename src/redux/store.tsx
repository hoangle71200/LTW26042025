import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../myComponents/reduxToolkit/userSlice'
import bookedReducer from '../myComponents/reduxToolkit/BookedSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    booked: bookedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch