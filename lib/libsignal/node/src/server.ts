import { createServer } from "http";
import * as SignalClient from "../dist/index"
import * as express from "express";
import { DisconnectReason, Server } from "socket.io"

async function main() {
    const key = SignalClient.IdentityKeyPair.generate()
    const app = express();
    const httpServer = createServer(app);
    const io = new Server(httpServer, {
        cors: {
            origin: [
                "http://localhost:3000"
            ]
        }
    });

    io.on("connection", (socket) => {
        console.log(socket.id)
        socket.on("ok", (num) => {
            console.log("client said: " + num)
        })
        socket.on("disconnect", (reason: DisconnectReason) => {
            console.log(reason)
        })
    });

    httpServer.listen(8888);
    console.log("Socket is listening on 8888")
    // // Alice va Bob trao doi public key
    // const aliceIdentityKeyPair = SignalClient.IdentityKeyPair.generate()
    // const bobIdentityKeyPair = SignalClient.IdentityKeyPair.generate()


    // // Alice
    // const aliceRegistrationId = 1234
    // const aliceDeviceId = 1
    // const alicePreKey = SignalClient.PrivateKey.generate()
    // const aliceSPreKey = SignalClient.PrivateKey.generate()
    // const aliceSignature = aliceIdentityKeyPair.sign()

    // aliceIdentityKeyPair.privateKey.

    // const aliceSignedPreKey = SignalClient.SignedPreKeyRecord.new(1,10,

    // // Bob
    // const bobPrv = SignalClient.PrivateKey.generate()
    // const bobPub = bobPrv.getPublicKey()

    // //Alice tinh toan shared secret
    // const bobPreKeyBundle = SignalClient.PreKeyBundle.new()




    // console.log(identityKeyPair)
}

main().catch(err => console.log(err))