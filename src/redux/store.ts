import { configureStore } from '@reduxjs/toolkit'
import contactModalReducer from './features/contactModalSlice'

// https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/
export const store = configureStore({
  reducer: {
    contactModalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
