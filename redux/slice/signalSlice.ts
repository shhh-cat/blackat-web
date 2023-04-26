import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Socket, io } from "socket.io-client";
import * as SignalClient from '../../lib/libsignal/node/dist'



// const initialState = SignalClient.IdentityKeyPair.generate()
const initialState = null

export const signalSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        
    }
})

// export const { listen, removeListener, connect, disconnect } = socketSlice.actions

export default signalSlice.reducer