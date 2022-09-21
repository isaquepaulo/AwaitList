import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mangaContent from "./mangaContent";
import picturesContent from "./picturesContent";
import infoContent from "./infoContent";
import charactersContent from "./charactersContent";
import recomendationsContent from "./recomendationsContent";
const reducer = combineReducers({ mangaContent, picturesContent, infoContent, charactersContent, recomendationsContent });

const store = configureStore({
    reducer: {
        reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store