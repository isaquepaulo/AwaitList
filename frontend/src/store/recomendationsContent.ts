import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    loading: boolean,
    data: any[] | null,
    error: any,
}
const initialState: CounterState = {
    loading: false,
    data: null,
    error: null,
}

const slice = createSlice({
    name: 'recomendationsContent',
    initialState,
    reducers: {
        fetchStarted(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
    },
});

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const getRecommendationsAPI = (id: any) => async (dispatch: any) => {
    try {
        dispatch(fetchStarted());
        const response = await fetch(
            `https://api.jikan.moe/v4/manga/${id}/recommendations`, 
            { cache: "no-store" }
        );
        const data = await response.json();
        dispatch(fetchSuccess(data.data));
    } catch (error) {
        dispatch(fetchError(error.message));
    }
};
export default slice.reducer





