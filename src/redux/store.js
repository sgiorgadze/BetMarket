import { configureStore } from '@reduxjs/toolkit';
import slices from './combine';

const store = configureStore({
    reducer: slices
});

export default store;