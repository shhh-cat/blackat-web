"use client";

import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const socketInstance = io(":8888")
export const SocketContext = createContext<Socket>(null)


export default function SocketProvider({ children }: PropsWithChildren) {

    

    return <SocketContext.Provider value={socketInstance}>{children}</SocketContext.Provider>;
}