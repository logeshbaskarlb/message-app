import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL || "";

const useLogout = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const apiUrl = import.meta.env.VITE_API_URL || "";

    const logout = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${apiUrl}/api/auth/logout`)
            const data = res.data
            if(data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
return {loading, logout}
}

export default useLogout