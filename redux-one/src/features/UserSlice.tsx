import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface formState {
  id: string,
  name: string,
  email: string,
  age: string,
}

export interface formSliceState {
  users: formState[]
}

const initialState: formSliceState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser:(state,action:PayloadAction<formState>) => {
      const newUser = {...action.payload, id: Date.now().toString()}
        state.users.push(newUser)
    // state.users.push(action.payload)
    },
    updateUser:(state, action:PayloadAction<formState>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
    },
    deleteUser:(state, action:PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer