import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ContactModalState = {
  isOpen: boolean
}

const initialState = {
  isOpen: false,
} as ContactModalState

export const contactModal = createSlice({
  name: 'contactModal',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsOpen } = contactModal.actions
export default contactModal.reducer
