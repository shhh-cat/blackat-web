

import { PropsWithChildren, createContext } from "react";
import { Socket, io } from "socket.io-client";
import * as SignalClient from "./ts"

declare type SignalClient = typeof import("./ts")


export const SignalContext = createContext<SignalClient>(null)


export default function SignalProvider({ children }: PropsWithChildren) {

    return <SignalContext.Provider value={SignalClient}>{children}</SignalContext.Provider>;
}