import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL || "";


const useSendMessage = () => {
 
    const [loading, setloading]= useState(false)
    const { messages, setMessages,  selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setloading(true)
        try {
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`,
                { message }
            )
            const data =  res.data
            if(data.error) throw new Error(data.error)

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message)
        }finally{
            setloading(false)
        }
    }
    return { sendMessage, loading };

    }


export default useSendMessage
