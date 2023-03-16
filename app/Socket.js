"use client"
const { useState, useEffect } = require("react");
const { io } = require("socket.io-client");

function useSocket() {
    const [socket,setSocket] = useState(null)

    useEffect(() => {
        const socketIo = io(":3333")
        console.log(socketIo)
        setSocket(socketIo)

        function cleanup() {
            socketIo.disconnect()
        }

        return cleanup
    }, [])

    return socket
}

export default useSocket