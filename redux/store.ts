import { configureStore } from "@reduxjs/toolkit";
import socketSlice from "./slice/socketSlice";
import signalSlice from "./slice/signalSlice";

export const store = configureStore({
    reducer: {
        signal: signalSlice
        // socket: socketSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActionPaths: ['socket.socket'],
    //         }
    //     }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const selectSocket = (state: RootState) => state.socket