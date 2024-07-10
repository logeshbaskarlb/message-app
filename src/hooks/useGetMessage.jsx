import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessage = () => {
 
    const [ loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation } = useConversation()

    useEffect(()=>{
        const getMessage = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`)
                const data = await res.json()
                if(data.error) throw Error(data.error)
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        
        if(selectedConversation?._id) getMessage()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ selectedConversation?._id, setMessages])

    return {messages, loading};

}


export default useGetMessage
