import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Character from 'types/character';

// Slice
interface CounterState {
    loading: boolean,
    data: Character[] | null,
    error: any,
}
const initialState: CounterState = {
    loading: false,
    data: null,
    error: null,
}

const slice = createSlice({
    name: 'charactersContent',
    initialState,
    reducers: {
        fetchStarted(state) { 
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<Character[]>) {
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


export const getCharactersAPI = (id: any) => async (dispatch: any) => {
    try {
        dispatch(fetchStarted());
        const response = await fetch(
            `https://api.jikan.moe/v4/manga/${id}/characters`,
            { cache: "no-store" }
        );
        const data = await response.json();
        dispatch(fetchSuccess(data.data));
    } catch (error) {
        dispatch(fetchError(error.message));
    }
};






export default slice.reducer





