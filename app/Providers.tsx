'use client';

import { PropsWithChildren, Suspense } from "react";
import ReduxProvider from "../redux/provider";
import SocketProvider from "../socket/provider";
// import SignalProvider from "../lib/signal/provider";

type P = PropsWithChildren

export default function Providers({ children }: P) {


  return (
    <>
      <ReduxProvider>
          <SocketProvider>
            {/* <SignalProvider> */}
              {children}
            {/* </SignalProvider> */}
            
          </SocketProvider>
      </ReduxProvider>
    </>
  );
}
