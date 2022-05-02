import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'note',
    initialState: [],
    reducers: {
        add(state, action) {
            let temp = true;
            // Checks to see if note being added is unique or not, if not doesn't add it
            for (let ii = 0; ii < state.length; ii++) {
                if (state[ii].item.name === action.payload.name) {
                    temp = false;
                }
            }
            if (temp) {
                state.push({ item: action.payload, count: 1 });
            }
        },
        remove(state, action) {
            return state.filter(element => element.item.name !== action.payload.name);
        },
    }
});

export const { add, remove, addItemToNotes, removeItemFromNotes } = noteSlice.actions;

export default noteSlice;