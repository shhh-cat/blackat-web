import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Socket, io } from "socket.io-client";

interface Event {
    eventName: string,
    listener: (...args: any[]) => void
}

interface socketState {
    socket: Socket
}

const initialState: socketState = {
    socket: io(":8888",{
        autoConnect: false
    })
}

export const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        listen: (state, action: PayloadAction<Event>) => {
            state.socket.on(action.payload.eventName,action.payload.listener)
        },
        removeListener: (state, action: PayloadAction<string>) => {
            state.socket.off(action.payload)
        },
        connect: state => {
            if (state.socket.connected) {
                console.log("Already connected")
                return
            } 
            console.log("Connecting")
            state.socket.on("connect_error", (err) => {
                console.log("connect err: " + err)
                setTimeout(() => {
                    state.socket.connect()
                }, 1000)
            })
            state.socket.on("connect",() => {
                console.log(state.socket.id)
            })
            state.socket.connect()
        },
        disconnect: state => {
            state.socket.disconnect()
        }
    }
})

export const { listen, removeListener, connect, disconnect } = socketSlice.actions

export default socketSlice.reducer