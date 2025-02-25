import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket]  = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()
    useEffect(()=>{
        if(authUser) {
            const socket = io("https://message-app-backend-2.onrender.com" , {
                query: { userId: authUser._id },
            })
            setSocket(socket)

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
        } else{
            if (socket) {
				socket.close();
				setSocket(null);
			}
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[authUser])

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}