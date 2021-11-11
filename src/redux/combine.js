import { combineReducers } from '@reduxjs/toolkit';

import BetMarketData from './dataSlice';

const combineSlices = combineReducers({
    BetMarketData
});

export default combineSlices;