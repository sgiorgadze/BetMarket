import { createSlice } from '@reduxjs/toolkit';

const betMarketInfoSlice = createSlice({
    name: 'BetMarketData',
    initialState: {},
    reducers: {
        data(state, { payload }) {
            //console.log(payload);
            //state.userInfo = payload;
        },

    }
});

export const { data } = betMarketInfoSlice.actions;
export default betMarketInfoSlice.reducer;
