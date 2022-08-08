import {configureStore} from '@reduxjs/toolkit';
import pictureSlice from './slices/pictureSlice.js';

export const store=configureStore({
    reducer:{
        pictureSlice
    },
})

window.store = store;