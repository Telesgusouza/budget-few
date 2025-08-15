import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../interfaces';

const initialState: IUserState = {
    user: {
        id: "",
        login: "",
        name: ""
    },
    pots: {
        total: 0,
        list: []
    },
    friends: [],
    budgets: []
}

const user = createSlice({
    name: 'user',
    initialState,

    reducers: {
        userData(state, action) {
            state.user = action.payload;
        },

        listPostUpdate(state, action) {
            state.pots = action.payload
        }
    }
});

export const { userData, listPostUpdate } = user.actions;
export default user.reducer;
