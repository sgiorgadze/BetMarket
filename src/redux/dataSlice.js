import { createSlice } from '@reduxjs/toolkit';

const betMarketInfoSlice = createSlice({
    name: 'BetMarketData',
    initialState: {
        data: [],
        tags: {}
    },
    reducers: {
        getDataList(state, { payload }) {
            console.log(payload);
            //state.userInfo = payload;
        },

    }
});

export const { getDataList } = betMarketInfoSlice.actions;
export default betMarketInfoSlice.reducer;
