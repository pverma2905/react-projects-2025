import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    id: string;
    name: string;
    email: string;
    age: string;
}

interface FormSliceState {
    users: FormState[];
}

const initialState: FormSliceState = {
    users: []
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<Omit<FormState, "id">>) => {
            // Add a new user with a unique id
            const newUser = { ...action.payload, id: Date.now().toString() };
            state.users.push(newUser);
        },
        updateUser: (state, action: PayloadAction<FormState>) => {
            const idx = state.users.findIndex(u => u.id === action.payload.id);
            if (idx !== -1) {
                state.users[idx] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(u => u.id !== action.payload);
        }
    }
});

export const { saveUser, updateUser, deleteUser } = formSlice.actions;
export default formSlice.reducer;