import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'note',
    initialState: [],
    reducers: {
        add(state, action) {
            // Finds most available id for newest not object added to state
            let releventId = 0;
            for (let ii = 0; ii < state.length; ii++) {
                if (releventId === ii) {
                    releventId++;
                } else {
                    break;
                }
            }
            state.push({ note: action.payload, id: releventId });
        },
        remove(state, action) {
            return state.filter(element => element.id !== action.payload);
        },
    }
});

export const { add, remove } = noteSlice.actions;

export default noteSlice;