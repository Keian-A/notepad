// Redux imports
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Esoteric imports
import noteSlice from './notes.js';

const reducers = combineReducers({
    note: noteSlice.reducer,
});

const store = configureStore({ reducer: reducers })

export default store;